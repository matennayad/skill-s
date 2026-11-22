/*
 * Reusable multiple-choice quiz with instant feedback.
 * Usage:
 *   <div class="quiz" data-quiz="quiz-id"></div>
 *   <script type="application/json" id="quiz-id">
 *     [{"q": "...", "opts": ["a","b","c","d"], "answer": 2, "why": "..."}]
 *   </script>
 *   <script src="../assets/quiz.js"></script>
 * Keep options equal in length and vary the position of the right answer.
 */
(function () {
  function render(root) {
    var data = JSON.parse(document.getElementById(root.dataset.quiz).textContent);
    var answered = 0, correct = 0;
    var score = document.createElement("div");
    score.className = "score";
    data.forEach(function (item, i) {
      var q = document.createElement("div");
      q.className = "q";
      q.innerHTML = '<div class="q-text">' + (i + 1) + ". " + item.q + "</div>";
      var opts = document.createElement("div");
      opts.className = "opts";
      var why = document.createElement("div");
      why.className = "why";
      item.opts.forEach(function (text, j) {
        var b = document.createElement("button");
        b.type = "button";
        b.textContent = text;
        b.addEventListener("click", function () {
          var buttons = opts.querySelectorAll("button");
          buttons.forEach(function (x) { x.disabled = true; });
          buttons[item.answer].classList.add("right");
          if (j === item.answer) { correct++; why.textContent = "נכון. " + (item.why || ""); }
          else { b.classList.add("wrong"); why.textContent = "לא בדיוק. " + (item.why || ""); }
          answered++;
          if (answered === data.length) {
            score.textContent = "תוצאה: " + correct + " מתוך " + data.length +
              (correct === data.length ? ". מצוין!" : ". שווה לנסות שוב מחר, בלי להציץ.");
          }
        });
        opts.appendChild(b);
      });
      q.appendChild(opts);
      q.appendChild(why);
      root.appendChild(q);
    });
    root.appendChild(score);
  }
  document.querySelectorAll(".quiz[data-quiz]").forEach(render);
})();
