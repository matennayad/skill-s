/*
 * Reusable "put these in order" exercise (tap to place, works on phones).
 * Usage:
 *   <div class="order" data-order="order-id"></div>
 *   <script type="application/json" id="order-id">["first","second","third"]</script>
 *   <script src="../assets/order.js"></script>
 * The JSON array is the correct order; items are shuffled for the learner.
 */
(function () {
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function render(root) {
    var correct = JSON.parse(document.getElementById(root.dataset.order).textContent);
    root.innerHTML =
      '<p class="muted">הקש על השלבים לפי הסדר הנכון. הקשה על שלב שכבר הוצב מחזירה אותו.</p>' +
      '<div class="pool"></div><div class="slots"></div>' +
      '<div class="actions"><button type="button" class="primary check">בדוק</button>' +
      '<button type="button" class="reset">התחל מחדש</button></div><div class="feedback"></div>';
    var pool = root.querySelector(".pool"), slots = root.querySelector(".slots");
    var fb = root.querySelector(".feedback"), placed = [];

    function draw() {
      pool.innerHTML = ""; slots.innerHTML = ""; fb.textContent = "";
      shuffledLeft().forEach(function (t) {
        var b = document.createElement("button"); b.type = "button"; b.textContent = t;
        b.onclick = function () { placed.push(t); draw(); };
        pool.appendChild(b);
      });
      correct.forEach(function (_, i) {
        var s = document.createElement("div"); s.className = "slot";
        if (placed[i] !== undefined) {
          var span = document.createElement("span"); span.textContent = placed[i];
          s.appendChild(span); s.style.cursor = "pointer";
          s.onclick = function () { placed.splice(i, 1); draw(); };
        }
        slots.appendChild(s);
      });
    }
    var order = shuffle(correct);
    function shuffledLeft() { return order.filter(function (t) { return placed.indexOf(t) < 0; }); }

    root.querySelector(".check").onclick = function () {
      if (placed.length < correct.length) { fb.textContent = "עוד לא הצבת את כל השלבים."; return; }
      var ok = 0;
      slots.querySelectorAll(".slot").forEach(function (s, i) {
        var good = placed[i] === correct[i];
        s.classList.add(good ? "right" : "wrong"); if (good) ok++;
      });
      fb.textContent = ok === correct.length ? "מושלם! כל השלבים במקומם."
        : ok + " מתוך " + correct.length + " במקום. השלבים באדום לא במקומם, נסה שוב.";
    };
    root.querySelector(".reset").onclick = function () { placed = []; order = shuffle(correct); draw(); };
    draw();
  }
  document.querySelectorAll(".order[data-order]").forEach(render);
})();
