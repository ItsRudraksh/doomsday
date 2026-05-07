/* ============================================
   MULTIVERSE COLLAPSE — App Engine
   ============================================ */

// ─── Watch Order Data ───
const WATCH_DATA = {
  fox: {
    icon: "🦊", title: "Fox X-Men Universe",
    sub: "Parallel universe — internal story order",
    items: [
      { num: 1, title: "X-Men: First Class", era: "1962", type: "Movie" },
      { num: 2, title: "X-Men Origins: Wolverine", era: "1979–2000s", type: "Movie" },
      { num: 3, title: "X-Men", era: "2000", type: "Movie" },
      { num: 4, title: "X2: X-Men United", era: "2003", type: "Movie" },
      { num: 5, title: "X-Men: The Last Stand", era: "2006", type: "Movie" },
      { num: 6, title: "The Wolverine", era: "2013", type: "Movie" },
      { num: 7, title: "X-Men: Days of Future Past", era: "1973 + 2023", type: "Movie" },
      { num: 8, title: "X-Men: Apocalypse", era: "1983", type: "Movie" },
      { num: 9, title: "Deadpool", era: "2016", type: "Movie" },
      { num: 10, title: "Deadpool 2", era: "2018", type: "Movie" },
      { num: 11, title: "Dark Phoenix", era: "1992 + 2019", type: "Movie" },
      { num: 12, title: "The New Mutants", era: "2019", type: "Movie" },
      { num: 13, title: "Logan", era: "2029", type: "Movie" },
    ]
  },
  "sony-legacy": {
    icon: "🕷️", title: "Sony Legacy Spider-Men",
    sub: "Folded into MCU via No Way Home",
    items: [
      { num: 14, title: "Spider-Man (Tobey Maguire)", era: "2002", type: "Movie" },
      { num: 15, title: "Spider-Man 2", era: "2004", type: "Movie" },
      { num: 16, title: "Spider-Man 3", era: "2007", type: "Movie" },
      { num: 17, title: "The Amazing Spider-Man", era: "2012", type: "Movie" },
      { num: 18, title: "The Amazing Spider-Man 2", era: "2014", type: "Movie" },
    ]
  },
  infinity: {
    icon: "⚙️", title: "MCU — The Infinity Saga",
    sub: "Chronological through the Blip",
    items: [
      { num: 19, title: "Eyes of Wakanda", era: "1260 BC–present", type: "Disney+" },
      { num: 20, title: "Captain America: The First Avenger", era: "1942–1945", type: "Movie" },
      { num: 21, title: "Captain Marvel", era: "1995", type: "Movie" },
      { num: 22, title: "Iron Man", era: "2010", type: "Movie" },
      { num: 23, title: "Iron Man 2", era: "2011", type: "Movie" },
      { num: 24, title: "The Incredible Hulk", era: "2011", type: "Movie" },
      { num: 25, title: "Thor", era: "2011", type: "Movie" },
      { num: 26, title: "The Avengers", era: "2012", type: "Movie" },
      { num: 27, title: "Thor: The Dark World", era: "2013", type: "Movie" },
      { num: 28, title: "Iron Man 3", era: "2013", type: "Movie" },
      { num: 29, title: "Captain America: The Winter Soldier", era: "2014", type: "Movie" },
      { num: 30, title: "Guardians of the Galaxy", era: "2014", type: "Movie" },
      { num: 31, title: "Guardians of the Galaxy Vol. 2", era: "2014", type: "Movie" },
      { num: 32, title: "Avengers: Age of Ultron", era: "2015", type: "Movie" },
      { num: 33, title: "Ant-Man", era: "2015", type: "Movie" },
      { num: 34, title: "Captain America: Civil War", era: "2016", type: "Movie" },
      { num: 35, title: "Black Widow", era: "2016", type: "Movie" },
      { num: 36, title: "Spider-Man: Homecoming", era: "2016", type: "Movie" },
      { num: 37, title: "Doctor Strange", era: "2016–2017", type: "Movie" },
      { num: 38, title: "Black Panther", era: "2017", type: "Movie" },
      { num: 39, title: "Thor: Ragnarok", era: "2017", type: "Movie" },
      { num: 40, title: "Avengers: Infinity War", era: "2018", type: "Movie" },
      { num: 41, title: "Ant-Man and the Wasp", era: "2018", type: "Movie" },
      { num: 42, title: "Avengers: Endgame", era: "2018–2023", type: "Movie" },
      { num: 43, title: "Spider-Man: Far From Home", era: "2024", type: "Movie" },
    ]
  },
  defenders: {
    icon: "📺", title: "Netflix / Defenders Saga",
    sub: "Set 2015–2018 — best watched after Endgame",
    items: [
      { num: 44, title: "Daredevil S1–S3", era: "2015–2018", type: "Netflix" },
      { num: 45, title: "Jessica Jones S1–S3", era: "2015–2018", type: "Netflix" },
      { num: 46, title: "Luke Cage S1–S2", era: "2015–2018", type: "Netflix" },
      { num: 47, title: "Iron Fist S1–S2", era: "2015–2018", type: "Netflix" },
      { num: 48, title: "The Defenders", era: "2015–2018", type: "Netflix" },
      { num: 49, title: "The Punisher S1–S2", era: "2015–2018", type: "Netflix" },
    ]
  },
  multiverse: {
    icon: "🌀", title: "MCU — The Multiverse Saga",
    sub: "Post-Endgame — Disney+ and theatrical",
    items: [
      { num: 50, title: "WandaVision", era: "2023", type: "Disney+" },
      { num: 51, title: "The Falcon and the Winter Soldier", era: "2024", type: "Disney+" },
      { num: 52, title: "Loki S1", era: "Outside time", type: "Disney+" },
      { num: 53, title: "What If…? S1–S3", era: "Multiverse", type: "Disney+" },
      { num: 54, title: "Shang-Chi and the Legend of the Ten Rings", era: "2024", type: "Movie" },
      { num: 55, title: "Eternals", era: "2024", type: "Movie" },
      { num: 56, title: "Hawkeye", era: "2024", type: "Disney+" },
      { num: 57, title: "Spider-Man: No Way Home", era: "2024", type: "Movie" },
      { num: 58, title: "Moon Knight", era: "2025", type: "Disney+" },
      { num: 59, title: "Doctor Strange in the Multiverse of Madness", era: "2025", type: "Movie" },
      { num: 60, title: "Ms. Marvel", era: "2025", type: "Disney+" },
      { num: 61, title: "Thor: Love and Thunder", era: "2025", type: "Movie" },
      { num: 62, title: "She-Hulk: Attorney at Law", era: "2025", type: "Disney+" },
      { num: 63, title: "Werewolf by Night", era: "2025", type: "Disney+ Special" },
      { num: 64, title: "Black Panther: Wakanda Forever", era: "2025", type: "Movie" },
      { num: 65, title: "Guardians of the Galaxy Holiday Special", era: "2025", type: "Disney+ Special" },
      { num: 66, title: "Ant-Man and the Wasp: Quantumania", era: "2025", type: "Movie" },
      { num: 67, title: "Guardians of the Galaxy Vol. 3", era: "2025", type: "Movie" },
      { num: 68, title: "Secret Invasion", era: "2025", type: "Disney+" },
      { num: 69, title: "Loki S2", era: "Outside time", type: "Disney+" },
      { num: 70, title: "Echo", era: "2025", type: "Disney+" },
      { num: 71, title: "X-Men '97 S1", era: "Alternate 1990s", type: "Disney+" },
      { num: 72, title: "The Marvels", era: "2026", type: "Movie" },
      { num: 73, title: "Agatha All Along", era: "2026", type: "Disney+" },
    ]
  },
  "sony-verse": {
    icon: "🕸️", title: "Sony Spider-Verse",
    sub: "Post–No Way Home multiverse connections",
    items: [
      { num: 74, title: "Venom", era: "Sony Universe", type: "Movie" },
      { num: 75, title: "Venom: Let There Be Carnage", era: "Sony Universe", type: "Movie" },
      { num: 76, title: "Morbius", era: "Sony Universe", type: "Movie" },
      { num: 77, title: "Spider-Man: Into the Spider-Verse", era: "Animated", type: "Movie" },
      { num: 78, title: "Spider-Man: Across the Spider-Verse", era: "Animated", type: "Movie" },
      { num: 79, title: "Venom: The Last Dance", era: "Sony Universe", type: "Movie" },
      { num: 80, title: "Kraven the Hunter", era: "Sony Universe", type: "Movie" },
    ]
  },
  phase56: {
    icon: "⚡", title: "MCU Phase 5–6",
    sub: "The final lead-up to Doomsday",
    items: [
      { num: 81, title: "Your Friendly Neighborhood Spider-Man S1", era: "2025", type: "Disney+" },
      { num: 82, title: "Ironheart", era: "2025", type: "Disney+" },
      { num: 83, title: "Daredevil: Born Again S1", era: "2025", type: "Disney+" },
      { num: 84, title: "Captain America: Brave New World", era: "2025", type: "Movie" },
      { num: 85, title: "Thunderbolts*", era: "2025", type: "Movie" },
      { num: 86, title: "Deadpool & Wolverine", era: "2024 → MCU", type: "Movie" },
      { num: 87, title: "Fantastic Four: First Steps", era: "Alt-1960s/2025", type: "Movie" },
    ]
  },
  "2026": {
    icon: "🔥", title: "2026 Pre-Doomsday Drops",
    sub: "Watch as they release — the final countdown",
    items: [
      { num: 88, title: "Wonder Man S1", era: "Jan 27, 2026", type: "Disney+" },
      { num: 89, title: "Daredevil: Born Again S2", era: "Mar 2026", type: "Disney+" },
      { num: 90, title: "The Punisher: One Last Kill", era: "May 12, 2026", type: "Disney+" },
      { num: 91, title: "X-Men '97 S2", era: "Summer 2026", type: "Disney+" },
      { num: 92, title: "Your Friendly Neighborhood Spider-Man S2", era: "Fall 2026", type: "Disney+" },
      { num: 93, title: "Spider-Man: Brand New Day", era: "Jul 31, 2026", type: "Movie" },
      { num: 94, title: "VisionQuest", era: "Late 2026", type: "Disney+" },
    ]
  },
};

const TOTAL = 94;
const DOOMSDAY = new Date("2026-12-18T00:00:00");

// ─── State ───
let watched = new Set(JSON.parse(localStorage.getItem("doom-watched") || "[]"));
function save() { localStorage.setItem("doom-watched", JSON.stringify([...watched])); }

// ─── Doom Clock ───
const RING_RADII = { days: 88, hours: 72, mins: 56, secs: 40 };

function setArc(id, fraction) {
  const el = document.getElementById(id);
  if (!el) return;
  const r   = parseFloat(el.getAttribute('r'));
  const c   = 2 * Math.PI * r;
  const f   = Math.max(0, Math.min(1, fraction));
  el.setAttribute('stroke-dasharray', c);
  el.setAttribute('stroke-dashoffset', c * (1 - f));
}

function tickCountdown() {
  const diff = DOOMSDAY - new Date();
  if (diff <= 0) return;
  const d = Math.floor(diff / 864e5);
  const h = Math.floor((diff % 864e5) / 36e5);
  const m = Math.floor((diff % 36e5) / 6e4);
  const s = Math.floor((diff % 6e4) / 1e3);

  // Update text
  const elD = document.getElementById('cd-days');
  const elH = document.getElementById('cd-hours');
  const elM = document.getElementById('cd-mins');
  const elS = document.getElementById('cd-secs');
  if (elD) { elD.textContent = String(d); }
  if (elH) { elH.textContent = String(h).padStart(2,'0'); }
  if (elM) { elM.textContent = String(m).padStart(2,'0'); }
  if (elS) {
    const prev = elS.textContent;
    elS.textContent = String(s).padStart(2,'0');
    if (prev !== elS.textContent) {
      const primary = document.querySelector('.doom-clock__primary');
      primary?.classList.add('tick');
      setTimeout(() => primary?.classList.remove('tick'), 250);
    }
  }

  // Drive arcs: fractional fill (days cycles monthly, rest by unit max)
  setArc('arc-days',  (d % 30) / 30);
  setArc('arc-hours', h / 24);
  setArc('arc-mins',  m / 60);
  setArc('arc-secs',  s / 60);
}

// ─── Phase Parallax Depth ───
function initParallax() {
  // Inject .phase-bg into every phase-block
  document.querySelectorAll('.phase-block').forEach(block => {
    if (!block.querySelector('.phase-bg')) {
      const bg = document.createElement('div');
      bg.className = 'phase-bg';
      block.insertBefore(bg, block.firstChild);
    }
  });

  let ticking = false;
  const phases = [...document.querySelectorAll('.phase-block')];

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      phases.forEach(block => {
        const bg = block.querySelector('.phase-bg');
        if (!bg) return;
        const rect   = block.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        // Move bg at 0.3x scroll speed relative to block's center offset
        bg.style.transform = `translateY(${center * 0.28}px)`;
      });
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // init position
}


// ─── Build Timeline ───
function buildTimeline() {
  const tl = document.getElementById("timeline");

  Object.entries(WATCH_DATA).forEach(([phase, data]) => {
    const section = document.createElement("section");
    section.className = "phase-block";
    section.dataset.phase = phase;
    section.id = "phase-" + phase;

    // Header
    const header = document.createElement("div");
    header.className = "phase-block__header";
    header.innerHTML = `
      <span class="phase-block__icon">${data.icon}</span>
      <h2 class="phase-block__title">${data.title}</h2>
      <p class="phase-block__sub">${data.sub}</p>
      <span class="phase-block__counter" id="cnt-${phase}">0/${data.items.length}</span>
    `;
    section.appendChild(header);

    // Cards container
    const container = document.createElement("div");
    container.className = "phase-block__items";

    data.items.forEach((item) => {
      const card = document.createElement("div");
      const isWatched = watched.has(item.num);
      card.className = "card" + (isWatched ? " watched" : "");
      card.dataset.num = item.num;
      card.dataset.title = item.title.toLowerCase();

      card.innerHTML = `
        <canvas class="snap-canvas"></canvas>
        <div class="card__nano"></div>
        <div class="card__check">
          <span class="card__check-icon">✓</span>
        </div>
        <div class="card__body">
          <div class="card__num">#${String(item.num).padStart(2, "0")}</div>
          <div class="card__name">${item.title}</div>
          <div class="card__tags">
            <span class="card__tag">${item.era}</span>
            <span class="card__tag">${item.type}</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => toggleWatchedWithSnap(item.num, card));


      container.appendChild(card);
    });

    section.appendChild(container);
    tl.appendChild(section);
  });
}

// ─── Progress — proxied to the real gauntlet-aware refreshProgress below ───

// ─── Search ───
function initSearch() {
  document.getElementById("search").addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll(".card").forEach((c) => {
      c.classList.toggle("hidden", q.length > 0 && !c.dataset.title.includes(q));
    });
  });
}

// ─── Filters ───
function initFilters() {
  const pills = document.querySelectorAll(".pill");
  pills.forEach((p) => {
    p.addEventListener("click", () => {
      pills.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected","false"); });
      p.classList.add("active");
      p.setAttribute("aria-selected","true");
      const f = p.dataset.filter;
      document.querySelectorAll(".phase-block").forEach((s) => {
        s.style.display = (f === "all" || s.dataset.phase === f) ? "" : "none";
      });
    });
  });
}

// ─── Bulk Actions ───
function initBulkActions() {
  const btnAll   = document.getElementById('btn-mark-all');
  const btnReset = document.getElementById('btn-reset');
  if (!btnAll || !btnReset) return;

  function flash(btn, msg) {
    const orig = btn.textContent;
    btn.textContent = msg;
    btn.disabled = true;
    setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 1500);
  }

  btnAll.addEventListener('click', () => {
    Object.values(WATCH_DATA).forEach(phase =>
      phase.items.forEach(item => watched.add(item.num))
    );
    save();
    // dataset.num is the key — set by buildTimeline
    document.querySelectorAll('.card').forEach(card => {
      const num = parseInt(card.dataset.num);
      if (!isNaN(num) && watched.has(num)) {
        card.classList.add('watched');
      }
    });
    refreshProgress();
    flash(btnAll, 'DONE! ✓');
  });

  btnReset.addEventListener('click', () => {
    watched.clear();
    save();
    document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('watched');
    });
    refreshProgress();
    flash(btnReset, 'RESET ✓');
  });
}


// ─── Scroll Reveal ───
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const delay = (parseInt(card.dataset.ri) || 0) * 70;
        setTimeout(() => card.classList.add("revealed"), delay);
        obs.unobserve(card);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

  document.querySelectorAll(".phase-block__items").forEach((container) => {
    container.querySelectorAll(".card").forEach((card, i) => {
      card.dataset.ri = i;
      obs.observe(card);
    });
  });
}

// ─── Void Canvas (energy particles) ───
function initVoid() {
  const c = document.getElementById("void-canvas");
  if (!c) return;
  const ctx = c.getContext("2d");
  let pts = [];
  const COLORS = ["#ff2d2d","#ffb800","#9945ff","#00b4ff","#00ffc8"];

  function resize() { c.width = innerWidth; c.height = innerHeight; }

  function spawn() {
    pts = [];
    const n = Math.min(Math.floor((c.width * c.height) / 14000), 160);
    for (let i = 0; i < n; i++) {
      pts.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        r: Math.random() * 1.8 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        a: Math.random() * 0.35 + 0.05,
        pulse: Math.random() * Math.PI * 2,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    const t = performance.now() * 0.001;
    pts.forEach(p => {
      const flicker = 0.5 + 0.5 * Math.sin(t * 1.5 + p.pulse);
      ctx.globalAlpha = p.a * flicker;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = c.width + 10;
      if (p.x > c.width + 10) p.x = -10;
      if (p.y < -10) p.y = c.height + 10;
      if (p.y > c.height + 10) p.y = -10;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  resize(); spawn(); draw();
  window.addEventListener("resize", () => { resize(); spawn(); });
}

// ─── Energy Cursor Trail ───
function initCursorTrail() {
  const COLORS = ['#ff2d2d','#ffb800','#9945ff','#00b4ff','#00ffc8','#ff2d2d','#ffb800','#9945ff'];
  const N = 8;
  const dots = [];

  for (let i = 0; i < N; i++) {
    const el = document.createElement('div');
    el.className = 'cursor-dot';
    const size = 7 - i * 0.7;
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.background = COLORS[i];
    el.style.opacity = (0.6 - i * 0.06).toFixed(2);
    el.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(el);
    dots.push({ el, x: -100, y: -100 });
  }

  let mx = -100, my = -100;
  document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

  function tick() {
    dots.forEach((dot, i) => {
      const prev = i === 0 ? { x: mx, y: my } : dots[i - 1];
      dot.x += (prev.x - dot.x) * (0.35 - i * 0.02);
      dot.y += (prev.y - dot.y) * (0.35 - i * 0.02);
      dot.el.style.left = dot.x + 'px';
      dot.el.style.top = dot.y + 'px';
    });
    requestAnimationFrame(tick);
  }
  tick();
}

// ─── Thor Lightning Strike ───
function initLightning() {
  const canvas = document.getElementById('lightning-canvas');
  const flash  = document.getElementById('lightning-flash');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let fired = false;

  function resizeL() { canvas.width = innerWidth; canvas.height = innerHeight; }
  resizeL();
  window.addEventListener('resize', resizeL);

  // Recursive branching bolt
  function bolt(ctx, x1, y1, x2, y2, spread, depth) {
    if (depth === 0) return;
    const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * spread;
    const my = (y1 + y2) / 2 + (Math.random() - 0.5) * spread * 0.5;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(mx, my);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = `rgba(255,255,255,${0.1 + depth * 0.15})`;
    ctx.lineWidth = depth * 0.8;
    ctx.shadowBlur = 12 + depth * 6;
    ctx.shadowColor = depth > 2 ? '#fff' : '#7dd3fc';
    ctx.stroke();
    if (Math.random() < 0.45) {
      bolt(ctx, mx, my, mx + (Math.random()-0.5)*200, my + 60 + Math.random()*80, spread*0.5, depth-1);
    }
    bolt(ctx, x1, y1, mx, my, spread*0.55, depth-1);
    bolt(ctx, mx, my, x2, y2, spread*0.55, depth-1);
  }

  function strike() {
    canvas.classList.add('strike');
    // Flash
    flash.classList.add('flashing');
    setTimeout(() => flash.classList.remove('flashing'), 700);

    // Draw main bolt top→bottom from random x
    const x = canvas.width * (0.3 + Math.random() * 0.4);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bolt(ctx, x, 0, x + (Math.random()-0.5)*120, canvas.height, 200, 6);

    // Second bolt after 120ms
    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const x2 = canvas.width * (0.2 + Math.random() * 0.6);
      bolt(ctx, x2, 0, x2 + (Math.random()-0.5)*80, canvas.height*0.8, 150, 5);
      // Electrify the 2026 header
      const block = document.getElementById('phase-2026');
      if (block) {
        block.classList.add('electrified');
        setTimeout(() => block.classList.remove('electrified'), 3000);
      }
    }, 120);

    // Fade canvas out
    setTimeout(() => {
      canvas.classList.remove('strike');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 800);
  }

  // Trigger once when 2026 phase scrolls in
  const target = document.getElementById('phase-2026');
  if (!target) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !fired) {
        fired = true;
        strike();
        obs.disconnect();
      }
    });
  }, { threshold: 0.15 });
  obs.observe(target);
}

// ─── Thanos Snap Disintegration ───
function snapDisintegrate(card, onDone) {
  const snapCanvas = card.querySelector('.snap-canvas');
  if (!snapCanvas) { onDone && onDone(); return; }

  const rect = card.getBoundingClientRect();
  snapCanvas.width  = rect.width;
  snapCanvas.height = rect.height;
  const ctx = snapCanvas.getContext('2d');

  // Sample pixel colors from the card's computed style regions
  // Build grid of colored particles
  const cols = Math.floor(rect.width / 6);
  const rows = Math.floor(rect.height / 6);
  const particles = [];
  const SNAP_COLORS = ['#9945ff','#7b2ff7','#c084fc','#e9d5ff','#ffb800','#ff2d2d'];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (Math.random() > 0.55) continue; // sparse
      particles.push({
        x: c * 6 + Math.random() * 4,
        y: r * 6 + Math.random() * 4,
        size: Math.random() * 3 + 1,
        color: SNAP_COLORS[Math.floor(Math.random() * SNAP_COLORS.length)],
        vx: (Math.random() * 4 + 1) * (Math.random() > 0.3 ? 1 : -0.3),
        vy: (Math.random() - 0.6) * 3,
        alpha: 1,
        decay: 0.012 + Math.random() * 0.025,
        delay: Math.random() * 0.4,
      });
    }
  }

  card.classList.add('snapping');
  let start = null;

  function animate(ts) {
    if (!start) start = ts;
    const elapsed = (ts - start) / 1000;
    ctx.clearRect(0, 0, snapCanvas.width, snapCanvas.height);

    let alive = 0;
    particles.forEach(p => {
      if (elapsed < p.delay) { alive++; return; }
      p.vy += 0.06; // gravity
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;
      if (p.alpha <= 0) return;
      alive++;
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    if (alive > 0) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, snapCanvas.width, snapCanvas.height);
      card.classList.remove('snapping');
      onDone && onDone();
    }
  }
  requestAnimationFrame(animate);
}

function snapAssemble(card) {
  card.classList.add('assembling');
  setTimeout(() => card.classList.remove('assembling'), 700);
}

// Override toggleWatched to add snap effects
function toggleWatchedWithSnap(num, card) {
  if (watched.has(num)) {
    // Un-watch: assemble
    watched.delete(num);
    card.classList.remove('watched');
    snapAssemble(card);
    save();
    refreshProgress();
  } else {
    // Watch: snap to dust then mark watched — progress updates AFTER state applied
    snapDisintegrate(card, () => {
      watched.add(num);
      card.classList.add('watched');
      snapAssemble(card);
      save();
      refreshProgress();
    });
  }
}

// ─── Infinity Gauntlet Tracker ───
const STONE_PHASES = {
  'fox': 'fox', 'sony-legacy': 'sony-legacy',
  'infinity': 'infinity', 'defenders': 'defenders',
  'multiverse': 'multiverse',
  'phase56': 'phase56',
  // These two share the mind stone
  'sony-verse': 'phase56', '2026': 'phase56',
};

let celebrationFired = false;

function refreshProgress() {
  const n = watched.size;
  const pct = Math.round((n / TOTAL) * 100);

  // Old tracker (hidden but keep IDs working)
  const tf = document.getElementById('tracker-fill');
  if (tf) tf.style.width = pct + '%';
  const ts = document.getElementById('tracker-stat');
  if (ts) ts.textContent = `${n} / ${TOTAL}`;
  const tp = document.getElementById('tracker-pct');
  if (tp) tp.textContent = pct + '%';

  // Gauntlet stat
  const gs = document.getElementById('gauntlet-stat');
  if (gs) gs.textContent = `${n} / ${TOTAL}`;

  // Per-phase stone fills
  // Aggregate watched counts for shared stones
  const stoneWatched = {};
  const stoneTotals  = {};

  Object.entries(WATCH_DATA).forEach(([phase, data]) => {
    const stonePhase = STONE_PHASES[phase] || phase;
    if (!stoneTotals[stonePhase]) stoneTotals[stonePhase] = 0;
    stoneTotals[stonePhase] += data.items.length;
    const done = data.items.filter(i => watched.has(i.num)).length;
    stoneWatched[stonePhase] = (stoneWatched[stonePhase] || 0) + done;
  });

  // Update phase counters in UI
  Object.entries(WATCH_DATA).forEach(([phase, data]) => {
    const el = document.getElementById('cnt-' + phase);
    if (!el) return;
    const done = data.items.filter(i => watched.has(i.num)).length;
    el.textContent = `${done}/${data.items.length}`;
  });

  // Update stones
  const stoneEls = document.querySelectorAll('.stone');
  stoneEls.forEach(stoneEl => {
    const phase = stoneEl.dataset.phase;
    const fillEl = stoneEl.querySelector('.stone__fill');
    if (!fillEl) return;
    const total = stoneTotals[phase] || 0;
    const done  = stoneWatched[phase] || 0;
    const stonePct = total > 0 ? (done / total) * 100 : 0;
    fillEl.style.width = stonePct + '%';
    if (stonePct >= 100) {
      stoneEl.classList.add('lit');
    } else {
      stoneEl.classList.remove('lit');
    }
  });

  // Check for full gauntlet
  if (n >= TOTAL && !celebrationFired) {
    celebrationFired = true;
    setTimeout(triggerSnapCelebration, 600);
  }
}

// ─── Snap Celebration ───
function triggerSnapCelebration() {
  const overlay = document.getElementById('snap-celebration');
  const cc = document.getElementById('celebration-canvas');
  if (!overlay) return;

  overlay.classList.add('visible');
  if (cc) {
    cc.width = innerWidth; cc.height = innerHeight;
    const ctx = cc.getContext('2d');
    const particles = [];
    const COLS = ['#9945ff','#ffb800','#ff2d2d','#00b4ff','#10b981','#fff'];
    for (let i = 0; i < 300; i++) {
      particles.push({
        x: cc.width / 2, y: cc.height / 2,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 18,
        r: Math.random() * 4 + 2,
        color: COLS[Math.floor(Math.random() * COLS.length)],
        alpha: 1, decay: 0.012 + Math.random() * 0.01,
      });
    }
    function drawCel() {
      ctx.clearRect(0, 0, cc.width, cc.height);
      let alive = 0;
      particles.forEach(p => {
        p.vy += 0.25;
        p.x += p.vx; p.y += p.vy;
        p.alpha -= p.decay;
        if (p.alpha <= 0) return;
        alive++;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      if (alive > 0) requestAnimationFrame(drawCel);
    }
    requestAnimationFrame(drawCel);
  }

  document.getElementById('celebration-close')?.addEventListener('click', () => {
    overlay.classList.remove('visible');
  });
}

// ─── Doctor Strange Portal ───
function initPortal() {
  const canvas = document.getElementById('portal-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeP() { canvas.width = innerWidth; canvas.height = innerHeight; }
  resizeP();
  window.addEventListener('resize', resizeP);

  function openPortal(onComplete) {
    canvas.classList.add('active');
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const maxR = Math.hypot(cx, cy) * 1.1;

    // Sparks flying in a sling-ring circle
    const sparks = [];
    const N = 120;
    for (let i = 0; i < N; i++) {
      const angle = (i / N) * Math.PI * 2;
      sparks.push({
        angle,
        r: 5 + Math.random() * 40, // radial offset from ring
        ringR: 80,                   // initial ring radius
        speed: 0.04 + Math.random() * 0.06,
        size: Math.random() * 3 + 1,
        color: `hsl(${25 + Math.random() * 30}, 100%, ${60 + Math.random() * 30}%)`,
        trail: [],
        alpha: 1,
      });
    }

    let startTime = null;
    const PHASE1 = 1200; // spark ring phase (ms)
    const PHASE2 = 600;  // expand to fill phase (ms)

    function draw(ts) {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (elapsed < PHASE1) {
        // Phase 1: sling-ring spinning sparks
        const t = elapsed / PHASE1;
        sparks.forEach(sp => {
          sp.angle += sp.speed;
          const currentR = 80 + t * 120; // ring expands slightly
          const sx = cx + Math.cos(sp.angle) * (currentR + sp.r * Math.sin(sp.angle * 3));
          const sy = cy + Math.sin(sp.angle) * (currentR + sp.r * Math.cos(sp.angle * 2));
          sp.trail.push({ x: sx, y: sy });
          if (sp.trail.length > 6) sp.trail.shift();

          // Draw trail
          sp.trail.forEach((pt, idx) => {
            ctx.globalAlpha = (idx / sp.trail.length) * 0.7 * (1 - t * 0.4);
            ctx.fillStyle = sp.color;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, sp.size * (idx / sp.trail.length), 0, Math.PI * 2);
            ctx.fill();
          });
        });

        // Orange ring glow
        ctx.globalAlpha = 0.6 * (1 - t * 0.2);
        ctx.beginPath();
        ctx.arc(cx, cy, 80 + t * 120, 0, Math.PI * 2);
        ctx.strokeStyle = '#ff8c00';
        ctx.lineWidth = 3 + t * 4;
        ctx.shadowBlur = 20 + t * 30;
        ctx.shadowColor = '#ff6a00';
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Dark portal interior growing
        ctx.globalAlpha = t * 0.85;
        ctx.fillStyle = 'rgba(0,0,0,0.95)';
        ctx.beginPath();
        ctx.arc(cx, cy, (80 + t * 120) * 0.88, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);

      } else if (elapsed < PHASE1 + PHASE2) {
        // Phase 2: expand portal to full screen
        const t = (elapsed - PHASE1) / PHASE2;
        const eased = 1 - Math.pow(1 - t, 3); // ease out cubic
        const r = 200 + eased * (maxR - 200);

        ctx.globalAlpha = 1;
        ctx.fillStyle = 'rgba(0,0,0,0.97)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Cut out the "portal window" as a reveal
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';

        // Ring edge glow
        ctx.strokeStyle = `rgba(255,138,0,${1 - t})`;
        ctx.lineWidth = 4;
        ctx.shadowBlur = 40;
        ctx.shadowColor = '#ff6a00';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;

        requestAnimationFrame(draw);
      } else {
        // Done — hide canvas and scroll
        canvas.classList.remove('active');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        onComplete && onComplete();
      }
    }
    requestAnimationFrame(draw);
  }

  // Hook to CTA button
  const cta = document.getElementById('enter-btn');
  if (cta) {
    cta.addEventListener('click', (e) => {
      e.preventDefault();
      openPortal(() => {
        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
}

// ─── DOOMSDAY Letter Scatter ───
function initLetterScatter() {
  const titleEl = document.getElementById('hero-title-main');
  if (!titleEl) return;

  const text = titleEl.textContent;
  titleEl.textContent = '';
  titleEl.style.display = 'inline-block';

  // Per-letter random drift params (set once)
  const letters = text.split('').map((ch, i) => {
    const span = document.createElement('span');
    span.textContent = ch;
    span.className = 'doom-letter';
    // Unique drift for each letter
    span.dataset.dx  = ((Math.random() - 0.5) * 300).toFixed(1);   // horizontal scatter
    span.dataset.dy  = (-80 - Math.random() * 200).toFixed(1);      // always upward
    span.dataset.rot = ((Math.random() - 0.5) * 60).toFixed(1);     // rotation degrees
    span.dataset.del = (i / text.length * 0.4).toFixed(3);           // stagger 0→0.4
    titleEl.appendChild(span);
    return span;
  });

  const hero = document.getElementById('hero');
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const heroH = hero ? hero.offsetHeight : window.innerHeight;
      // raw 0→1 over first heroH pixels of scroll
      const raw = Math.min(1, window.scrollY / (heroH * 0.7));

      letters.forEach(span => {
        const delay = parseFloat(span.dataset.del);
        // Per-letter progress starts later based on delay
        const p = Math.max(0, Math.min(1, (raw - delay) / (1 - delay + 0.001)));
        const ease = p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p+2, 2)/2; // ease in-out quad

        const dx  = parseFloat(span.dataset.dx)  * ease;
        const dy  = parseFloat(span.dataset.dy)  * ease;
        const rot = parseFloat(span.dataset.rot) * ease;
        const scl = 1 - ease * 0.4;
        const alpha = 1 - ease;
        const blur = ease * 8;

        span.style.transform  = `translate(${dx}px, ${dy}px) rotate(${rot}deg) scale(${scl})`;
        span.style.opacity    = alpha;
        span.style.filter     = `blur(${blur}px)`;
      });

      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

// ─── Spider-Web Connectors ───
function initWebShooter() {
  const svg  = document.getElementById('web-svg');
  const tlEl = document.getElementById('timeline');
  if (!svg || !tlEl) return;

  // We draw webs when cards are revealed
  // Observe each card after buildTimeline
  const spineX = tlEl.offsetWidth / 2; // spine is at 50% width

  function shootWeb(card) {
    const tlRect   = tlEl.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    // Positions relative to the SVG (which fills the timeline)
    const tlScrollTop = tlEl.getBoundingClientRect().top;
    const svgRect = svg.getBoundingClientRect();

    const cardMidY = cardRect.top - svgRect.top + cardRect.height / 2;
    const isRight  = card.matches(':nth-child(even)');

    // Spine x in SVG coords
    const sx = svg.getBoundingClientRect().width / 2;

    // Card connection point
    const cx = isRight
      ? cardRect.left - svgRect.left        // left edge of even cards
      : cardRect.right - svgRect.left;      // right edge of odd cards
    const cy = cardMidY;

    // Control point (bulge toward the card's far side for web curve)
    const cpx = (sx + cx) / 2 + (isRight ? -40 : 40);
    const cpy = cy - 20;

    // Draw the path
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const length = Math.hypot(cx - sx, cy) + 50;
    path.setAttribute('d', `M ${sx} ${cy} Q ${cpx} ${cpy} ${cx} ${cy}`);
    path.setAttribute('class', 'web-line');
    path.setAttribute('stroke-dasharray', length);
    path.setAttribute('stroke-dashoffset', length);
    svg.appendChild(path);

    // Anchor dot at spine
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', sx);
    dot.setAttribute('cy', cy);
    dot.setAttribute('r', 3);
    dot.setAttribute('class', 'web-dot');
    svg.appendChild(dot);

    // Trigger shoot animation
    requestAnimationFrame(() => {
      path.classList.add('shoot');
      dot.classList.add('visible');
    });
  }

  // Hook into the reveal observer — shoot web when card becomes revealed
  const obs = new MutationObserver(mutations => {
    mutations.forEach(m => {
      if (m.type === 'attributes' && m.attributeName === 'class') {
        const el = m.target;
        if (el.classList.contains('revealed') && !el.dataset.webShot) {
          el.dataset.webShot = '1';
          // Small delay so card is in its final position
          setTimeout(() => shootWeb(el), 80);
        }
      }
    });
  });

  // Observe all cards for class changes
  function observeCards() {
    document.querySelectorAll('.card').forEach(card => {
      obs.observe(card, { attributes: true });
    });
  }

  // Cards don't exist yet at init time — observe after a tick
  setTimeout(observeCards, 200);
}



// ─── Reality Tear Dividers ───
function initTears() {
  const phases = document.querySelectorAll('.phase-block');

  phases.forEach((block) => {
    const phase = block.dataset.phase;
    const tear = document.createElement('div');
    tear.className = 'phase-tear';
    tear.dataset.tear = phase;

    // Build jagged SVG path across the full width
    const W = 1000; // SVG viewBox width
    const H = 60;
    const points = [];
    const steps = 28;
    let x = 0;
    let y = H / 2;

    points.push(`M 0 ${y}`);
    for (let i = 1; i <= steps; i++) {
      x = (i / steps) * W;
      // Jagged vertical oscillation — bigger spikes at random intervals
      const spike = Math.random() > 0.75 ? 18 : 7;
      y = H / 2 + (Math.random() - 0.5) * spike * 2;
      points.push(`L ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    points.push(`L ${W} ${H / 2}`);
    const d = points.join(' ');

    // Spark dots at 4 random tear vertices
    const sparkDots = [0.18, 0.42, 0.67, 0.88].map(t => {
      const sx = (t * W).toFixed(1);
      const sy = (H / 2 + (Math.random() - 0.5) * 12).toFixed(1);
      return `<circle class="tear-spark" cx="${sx}" cy="${sy}" r="3" fill="currentColor" style="animation-delay:${(Math.random()*1.5).toFixed(2)}s"/>`;
    }).join('');

    tear.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
        <path class="tear-glow" d="${d}"/>
        <path class="tear-line" d="${d}"/>
        ${sparkDots}
      </svg>
    `;

    // Insert BEFORE the phase block
    block.parentNode.insertBefore(tear, block);

    // IntersectionObserver to trigger crack animation
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          tear.classList.add('visible');
          obs.unobserve(tear);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(tear);
  });
}



// ─── Boot ───
document.addEventListener("DOMContentLoaded", () => {
  initJarvisSplash();
  buildTimeline();
  refreshProgress();
  initSearch();
  initFilters();
  initBulkActions();
  initReveal();
  initVoid();
  initCursorTrail();
  initLightning();
  initPortal();
  initLetterScatter();
  initTears();
  initParallax();
  initMinigame();
  tickCountdown();
  setInterval(tickCountdown, 1000);
});

// ─── JARVIS SPLASH ───
function initJarvisSplash() {
  const splash = document.getElementById('jarvis-splash');
  if (!splash) return;

  const canvas = document.getElementById('jv-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, rafId, radarAngle = 0, hexAlpha = 0, ringAlpha = 0, dismissed = false;
  const blips = [];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  // ── Canvas drawing ──
  function drawHexGrid() {
    const R = 38, rh = R * Math.sqrt(3);
    ctx.strokeStyle = `rgba(0,180,255,${hexAlpha * 0.11})`;
    ctx.lineWidth = 0.5;
    for (let row = -1; row * rh < H + rh; row++) {
      for (let col = -1; col * R * 1.5 < W + R * 1.5; col++) {
        const cx = col * R * 1.5, cy = row * rh + (col % 2 ? rh / 2 : 0);
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
          i === 0 ? ctx.moveTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R)
                  : ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
        }
        ctx.closePath(); ctx.stroke();
      }
    }
  }

  function drawRings(t) {
    const cx = W / 2, cy = H / 2;
    const base = Math.min(W, H) * 0.38;
    if (ringAlpha <= 0) return;

    // Outer ring — CW slow, with ticks
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(t * 0.25);
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2, end = a + Math.PI / 10 * 1.6;
      ctx.strokeStyle = `rgba(0,180,255,${ringAlpha * 0.65})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(0, 0, base, a, end); ctx.stroke();
    }
    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * Math.PI * 2, big = i % 5 === 0;
      const inner = base - (big ? 10 : 4);
      ctx.strokeStyle = `rgba(0,180,255,${ringAlpha * (big ? 0.8 : 0.3)})`;
      ctx.lineWidth = big ? 1 : 0.5;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * inner, Math.sin(a) * inner);
      ctx.lineTo(Math.cos(a) * base,  Math.sin(a) * base);
      ctx.stroke();
    }
    ctx.restore();

    // Mid ring — CCW dashed
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(-t * 0.55);
    ctx.strokeStyle = `rgba(0,210,255,${ringAlpha * 0.4})`;
    ctx.lineWidth = 1; ctx.setLineDash([10, 5]);
    ctx.beginPath(); ctx.arc(0, 0, base * 0.68, 0, Math.PI * 2); ctx.stroke();
    ctx.setLineDash([]); ctx.restore();

    // Inner ring — CW fast, gold arcs
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(t * 1.4);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2, end = a + Math.PI / 6 * 1.4;
      ctx.strokeStyle = `rgba(255,184,0,${ringAlpha * 0.55})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(0, 0, base * 0.4, a, end); ctx.stroke();
    }
    ctx.restore();

    // Crosshair
    ctx.strokeStyle = `rgba(0,180,255,${ringAlpha * 0.35})`;
    ctx.lineWidth = 0.5;
    const cl = base * 0.08;
    ctx.beginPath();
    ctx.moveTo(cx - cl, cy); ctx.lineTo(cx + cl, cy);
    ctx.moveTo(cx, cy - cl); ctx.lineTo(cx, cy + cl);
    ctx.stroke();

    // Pulsing core
    const pulse = Math.sin(t * 4) * 0.5 + 0.5;
    ctx.fillStyle = `rgba(0,210,255,${ringAlpha * (0.5 + pulse * 0.5)})`;
    ctx.shadowBlur = 14; ctx.shadowColor = '#00b4ff';
    ctx.beginPath(); ctx.arc(cx, cy, 3 + pulse * 2, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0;
  }

  function drawRadar(t) {
    if (ringAlpha <= 0) return;
    const cx = W / 2, cy = H / 2, r = Math.min(W, H) * 0.38;
    radarAngle += 0.022;
    // Fading sweep trail
    for (let i = 0; i < 35; i++) {
      const a = radarAngle - (i / 35) * (Math.PI * 0.55);
      ctx.fillStyle = `rgba(0,180,255,${(1 - i / 35) * ringAlpha * 0.12})`;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r * 0.97, a, a + 0.055);
      ctx.closePath(); ctx.fill();
    }
    // Sweep line
    ctx.strokeStyle = `rgba(0,210,255,${ringAlpha * 0.85})`;
    ctx.lineWidth = 1.5;
    ctx.shadowBlur = 6; ctx.shadowColor = '#00cfff';
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(radarAngle) * r * 0.96, cy + Math.sin(radarAngle) * r * 0.96);
    ctx.stroke(); ctx.shadowBlur = 0;

    // Blips
    blips.forEach((b, idx) => {
      b.alpha -= 0.003;
      if (b.alpha <= 0) { blips.splice(idx, 1); return; }
      ctx.fillStyle = `rgba(0,255,180,${b.alpha * ringAlpha})`;
      ctx.shadowBlur = 6; ctx.shadowColor = '#00ffb4';
      ctx.beginPath(); ctx.arc(cx + b.x, cy + b.y, 3, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
    });
    if (Math.random() < 0.012) {
      const angle = Math.random() * Math.PI * 2, dist = Math.random() * r * 0.85;
      blips.push({ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, alpha: 0.9 });
    }
  }

  let lastT = 0;
  function frame(ts) {
    if (!lastT) lastT = ts;
    const dt = (ts - lastT) / 1000; lastT = ts;
    const t = ts / 1000;

    ctx.clearRect(0, 0, W, H);
    hexAlpha  = Math.min(1, hexAlpha  + dt * 0.6);
    ringAlpha = Math.min(1, ringAlpha + dt * 0.5);

    drawHexGrid();
    drawRings(t);
    drawRadar(t);

    if (!dismissed) rafId = requestAnimationFrame(frame);
  }
  rafId = requestAnimationFrame(frame);

  // ── ASCII art ──
  const ART = [
    '        ▄█████████████████▄        ',
    '      ▄████▀▀▀▀▀▀▀▀▀▀▀▀████▄      ',
    '     ████   ▄▄▄▄▄▄▄▄▄▄▄  ████     ',
    '    ████  ████         ████ ████   ',
    '    ████  ██  ▄▄▄  ▄▄▄  ██  ████  ',
    '    ████  ██  ███  ███  ██  ████  ',
    '    ████  ████         ████ ████   ',
    '     ████  ▀▀▀▀▀▀▀▀▀▀▀▀▀  ████    ',
    '      ████▄▄▄         ▄▄▄████      ',
    '        ▀▀█████████████████▀▀      ',
  ].join('\n');

  const asciiEl = document.getElementById('jv-ascii');
  let charIdx = 0;
  function typeAscii() {
    if (charIdx <= ART.length) {
      asciiEl.textContent = ART.slice(0, charIdx);
      charIdx++;
      setTimeout(typeAscii, 11);
    }
  }

  // ── Boot terminal ──
  const LINES = [
    '> J.A.R.V.I.S. PROTOCOL FRIDAY v8.2 — ONLINE',
    '> LOADING MULTIVERSE INTELLIGENCE DATABASE...',
    '> SCANNING 94 KNOWN TIMELINES ACROSS 8 PHASES',
    '> THREAT DETECTED: DOOM, VICTOR VON — LATVERIA',
    '> CROSS-REFERENCING INFINITY STONE CHRONOLOGY...',
    '> WATCHER CANDIDATES: 94 TITLES CONFIRMED',
    '> DOOMSDAY COORDINATES LOCKED — DEC 18 2026',
    '> INITIATING WATCH ORDER BRIEFING SEQUENCE...',
  ];
  const STATUS = ['BOOT','LOADING','SCANNING','THREAT LOCK','CROSS-REF','CONFIRMED','LOCKED','READY'];
  const termEl = document.getElementById('jv-terminal');
  const statusEl = document.getElementById('jv-status-txt');

  function typeLine(lineIdx, charPos, span) {
    if (lineIdx >= LINES.length) {
      setTimeout(() => {
        document.getElementById('jv-reveal')?.classList.add('visible');
        setTimeout(dismiss, 2200);
      }, 400);
      return;
    }
    const line = LINES[lineIdx];
    if (!span) {
      span = document.createElement('span');
      span.className = 'line';
      termEl.appendChild(span);
      statusEl.textContent = STATUS[lineIdx] || 'READY';
    }
    if (charPos <= line.length) {
      span.textContent = line.slice(0, charPos);
      setTimeout(() => typeLine(lineIdx, charPos + 1, span), 22);
    } else {
      setTimeout(() => typeLine(lineIdx + 1, 0, null), 320);
    }
  }

  // ── Side panel hex data ──
  function hexLine() {
    return Array.from({length:8}, () => Math.floor(Math.random()*256).toString(16).padStart(2,'0').toUpperCase()).join(' ');
  }
  function fillPanel(el) {
    el.textContent = Array.from({length:40}, hexLine).join('\n');
  }
  const pl = document.getElementById('jv-pl'), pr = document.getElementById('jv-pr');
  fillPanel(pl); fillPanel(pr);
  setInterval(() => { fillPanel(pl); fillPanel(pr); }, 120);

  // ── Dismiss ──
  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    cancelAnimationFrame(rafId);
    splash.classList.add('dismiss');
    document.body.style.overflow = '';
    splash.addEventListener('transitionend', () => splash.remove(), { once: true });
  }

  // ── Sequence ──
  document.body.style.overflow = 'hidden';
  setTimeout(() => splash.classList.add('active'), 80);
  setTimeout(typeAscii, 400);
  setTimeout(() => typeLine(0, 0, null), 2000);
  splash.addEventListener('click', dismiss);
  setTimeout(dismiss, 8500); // auto-dismiss at 8.5s
}


// ─── INFINITY TRIAL MINIGAME ───
function initMinigame() {
  const canvas = document.getElementById('game-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const STONE_DEFS = [
    { name:'POWER',   color:'#9945ff', glow:'rgba(153,69,255,0.6)'  },
    { name:'SPACE',   color:'#00b4ff', glow:'rgba(0,180,255,0.6)'   },
    { name:'REALITY', color:'#ff2d2d', glow:'rgba(255,45,45,0.6)'   },
    { name:'SOUL',    color:'#ff8a00', glow:'rgba(255,138,0,0.6)'   },
    { name:'TIME',    color:'#10b981', glow:'rgba(16,185,129,0.6)'  },
    { name:'MIND',    color:'#ffb800', glow:'rgba(255,184,0,0.6)'   },
  ];

  let W, H, state = 'idle', animId;
  let player, stones, enemies, particles, rings;
  let lives, collected, startTime, bestTime;
  let mx = 0, my = 0;

  bestTime = parseFloat(localStorage.getItem('infinity-best') || 'Infinity');
  updateBestDisplay();

  function updateBestDisplay() {
    const el = document.getElementById('best-time');
    if (el) el.textContent = isFinite(bestTime) ? bestTime.toFixed(2) + 's' : '—';
  }

  function resize() {
    const cont = canvas.parentElement;
    W = canvas.width  = cont.clientWidth;
    H = canvas.height = Math.min(480, Math.round(cont.clientWidth * 0.52));
  }

  function hex(ctx, x, y, r, angle = 0) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = angle + (i / 6) * Math.PI * 2;
      i === 0 ? ctx.moveTo(x + Math.cos(a)*r, y + Math.sin(a)*r)
              : ctx.lineTo(x + Math.cos(a)*r, y + Math.sin(a)*r);
    }
    ctx.closePath();
  }

  function initState() {
    const cx = W/2, cy = H/2;
    player = { x:cx, y:cy, r:9, trail:[], inv:0, blink:true };
    stones = STONE_DEFS.map((def, i) => {
      const a = (i/6)*Math.PI*2 + 0.4;
      const d = H * 0.28 + Math.random()*H*0.1;
      return { ...def, x: cx+Math.cos(a)*d, y: cy+Math.sin(a)*d, r:11, a:Math.random()*Math.PI*2, done:false };
    });
    enemies = [0,1,2].map(i => {
      const sides = [[W/2,10],[W-10,H/2],[W/2,H-10]];
      const [ex,ey] = sides[i];
      return { x:ex, y:ey, vx:0, vy:0, r:13, spd:0.7+i*0.2, phase:Math.random()*Math.PI*2, pts:[] };
    });
    particles = []; rings = [];
    lives = 3; collected = 0; startTime = Date.now();
  }

  function addParticles(x, y, color, n=20) {
    for (let i=0; i<n; i++) {
      const a = Math.random()*Math.PI*2, s = 1.5+Math.random()*5;
      particles.push({ x, y, vx:Math.cos(a)*s, vy:Math.sin(a)*s,
        r:1.5+Math.random()*2.5, alpha:1, decay:0.018+Math.random()*0.015, color });
    }
  }

  function addRing(x, y, color) {
    rings.push({ x, y, r:0, maxR:80, alpha:1, color });
  }

  // ── Drawing ──
  function drawBg() {
    ctx.fillStyle = 'rgba(3,3,8,0.94)';
    ctx.fillRect(0,0,W,H);
    ctx.strokeStyle = 'rgba(255,255,255,0.025)';
    ctx.lineWidth = 0.5;
    for (let x=0; x<W; x+=36) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
    for (let y=0; y<H; y+=36) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
    // border pulse
    const t = Date.now()/1200;
    ctx.strokeStyle = `rgba(168,85,247,${0.12+Math.sin(t)*0.06})`;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(1,1,W-2,H-2);
  }

  function drawPlayer() {
    player.trail.forEach((pt,i) => {
      ctx.globalAlpha = (i/player.trail.length)*0.25;
      ctx.fillStyle = '#00b4ff';
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, player.r*(i/player.trail.length)*0.55, 0, Math.PI*2);
      ctx.fill();
    });
    ctx.globalAlpha = player.blink ? 1 : 0;
    ctx.shadowBlur = 18; ctx.shadowColor = player.inv > 0 ? '#ff4444' : '#00cfff';
    ctx.fillStyle = player.inv > 0 ? '#ff6666' : '#ffffff';
    ctx.beginPath(); ctx.arc(player.x, player.y, player.r, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle='#ffffff'; ctx.shadowBlur=0;
    ctx.beginPath(); ctx.arc(player.x, player.y, player.r*0.38, 0, Math.PI*2); ctx.fill();
    ctx.globalAlpha = 1;
  }

  function drawStones() {
    const t = Date.now();
    stones.forEach(s => {
      if (s.done) return;
      s.a += 0.018;
      const pulse = Math.sin(t/400 + s.a)*4;
      ctx.shadowBlur = 14+pulse; ctx.shadowColor = s.color;
      ctx.fillStyle = s.color;
      hex(ctx, s.x, s.y, s.r, s.a); ctx.fill();
      ctx.globalAlpha = 0.35; ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r*0.36, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha = 1; ctx.shadowBlur = 0;
    });
  }

  function drawEnemies() {
    enemies.forEach(e => {
      e.phase += 0.05;
      // particle trail
      if (Math.random() > 0.55) e.pts.push({ x:e.x+(Math.random()-.5)*14, y:e.y+(Math.random()-.5)*14, a:0.5 });
      e.pts = e.pts.filter(p => {
        p.a -= 0.06; ctx.globalAlpha=p.a;
        ctx.fillStyle='rgba(130,0,220,0.5)';
        ctx.beginPath(); ctx.arc(p.x,p.y,3,0,Math.PI*2); ctx.fill();
        return p.a > 0;
      });
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 10; ctx.shadowColor = '#7700cc';
      ctx.fillStyle = '#0d0020';
      // blob shape
      ctx.beginPath();
      for (let i=0;i<8;i++) {
        const a = (i/8)*Math.PI*2 + e.phase;
        const wobble = e.r + Math.sin(e.phase*3+i)*3;
        i===0 ? ctx.moveTo(e.x+Math.cos(a)*wobble, e.y+Math.sin(a)*wobble)
              : ctx.lineTo(e.x+Math.cos(a)*wobble, e.y+Math.sin(a)*wobble);
      }
      ctx.closePath(); ctx.fill();
      ctx.strokeStyle='#9900ff'; ctx.lineWidth=1.5; ctx.stroke();
      ctx.shadowBlur=0;
      // eyes
      ctx.fillStyle='#ff2222';
      ctx.beginPath(); ctx.arc(e.x-4,e.y-2,2,0,Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(e.x+4,e.y-2,2,0,Math.PI*2); ctx.fill();
    });
  }

  function drawParticles() {
    particles.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function drawRings() {
    rings.forEach(r => {
      ctx.globalAlpha = r.alpha;
      ctx.strokeStyle = r.color; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(r.x,r.y,r.r,0,Math.PI*2); ctx.stroke();
    });
    ctx.globalAlpha = 1;
  }

  function drawHUD() {
    // Lives
    ctx.font = `bold 15px monospace`;
    const hearts = '♦'.repeat(lives) + '◇'.repeat(3-lives);
    ctx.fillStyle = '#ff4455'; ctx.textBaseline='top'; ctx.textAlign='left';
    ctx.fillText(hearts, 14, 14);
    // Timer
    const secs = ((Date.now()-startTime)/1000).toFixed(1);
    ctx.fillStyle = '#ffb800'; ctx.textAlign='right';
    ctx.fillText(secs+'s', W-14, 14);
    ctx.textAlign='left';
    // Stone mini-HUD
    const totalW = 6*22, sx0 = W/2-totalW/2;
    STONE_DEFS.forEach((def,i) => {
      const done = stones[i]?.done;
      ctx.shadowBlur = done ? 10 : 0; ctx.shadowColor = def.color;
      ctx.fillStyle = done ? def.color : 'rgba(255,255,255,0.08)';
      hex(ctx, sx0+i*22+8, 20, 7, 0); ctx.fill();
      ctx.shadowBlur=0;
    });
    ctx.textBaseline='alphabetic';
  }

  function drawOverlay(title, sub, hint, color='#ffffff') {
    ctx.fillStyle='rgba(3,3,8,0.82)'; ctx.fillRect(0,0,W,H);
    ctx.textAlign='center'; ctx.textBaseline='middle';
    const fs = Math.min(44, W/14);
    ctx.font=`800 ${fs}px 'Syne',sans-serif`;
    ctx.fillStyle=color;
    ctx.fillText(title, W/2, H/2-36, W*0.88); // maxWidth prevents overflow
    ctx.font=`${Math.min(13,W/50)}px 'Share Tech Mono',monospace`;
    ctx.fillStyle='rgba(255,255,255,0.45)'; ctx.fillText(sub, W/2, H/2+10, W*0.88);
    ctx.fillStyle='#ffb800'; ctx.fillText(hint, W/2, H/2+46, W*0.88);
    ctx.textAlign='left'; ctx.textBaseline='alphabetic';
  }

  function spawnEnemy() {
    // Pick a random edge, biased away from player
    const edges = [
      [Math.random()*W, 0],
      [W, Math.random()*H],
      [Math.random()*W, H],
      [0, Math.random()*H],
    ];
    // Pick edge farthest from player
    const [ex, ey] = edges.reduce((best, pt) =>
      Math.hypot(pt[0]-player.x, pt[1]-player.y) > Math.hypot(best[0]-player.x, best[1]-player.y) ? pt : best
    );
    const newSpd = 0.6 + enemies.length * 0.15; // gets faster each spawn
    enemies.push({ x:ex, y:ey, vx:0, vy:0, r:13, spd:newSpd, phase:Math.random()*Math.PI*2, pts:[] });
    // Warning flash at spawn point
    addRing(ex, ey, '#ff4400');
    addParticles(ex, ey, '#ff6600', 10);
  }

  // ── Update ──
  function update() {
    // Player movement (lerp to mouse)
    player.x += (Math.max(player.r, Math.min(W-player.r, mx)) - player.x) * 0.13;
    player.y += (Math.max(player.r, Math.min(H-player.r, my)) - player.y) * 0.13;
    player.trail.push({x:player.x, y:player.y});
    if (player.trail.length > 14) player.trail.shift();
    if (player.inv > 0) { player.inv--; player.blink = Math.floor(player.inv/4)%2===0; }
    else player.blink = true;

    // Enemies
    const speedMult = 1 + collected*0.18;
    enemies.forEach(e => {
      const dx=player.x-e.x, dy=player.y-e.y, d=Math.hypot(dx,dy)||1;
      e.vx += (dx/d)*e.spd*speedMult*0.06; e.vy += (dy/d)*e.spd*speedMult*0.06;
      e.vx *= 0.94; e.vy *= 0.94;
      const spd=Math.hypot(e.vx,e.vy), cap=e.spd*speedMult*2.2;
      if (spd>cap){e.vx=e.vx/spd*cap; e.vy=e.vy/spd*cap;}
      e.x+=e.vx; e.y+=e.vy;
      if(e.x<e.r){e.x=e.r;e.vx=Math.abs(e.vx);}
      if(e.x>W-e.r){e.x=W-e.r;e.vx=-Math.abs(e.vx);}
      if(e.y<e.r){e.y=e.r;e.vy=Math.abs(e.vy);}
      if(e.y>H-e.r){e.y=H-e.r;e.vy=-Math.abs(e.vy);}
      // Hit player
      if (player.inv===0 && Math.hypot(e.x-player.x, e.y-player.y) < player.r+e.r) {
        lives--; player.inv=90;
        addParticles(player.x, player.y, '#ff4444', 18);
        if (lives<=0) { state='dead'; addParticles(player.x,player.y,'#ff4444',50); }
      }
    });

    // Stones
    stones.forEach(s => {
      if (s.done) return;
      const d = Math.hypot(s.x-player.x, s.y-player.y);
      if (d < 65) { // magnet
        const a = Math.atan2(player.y-s.y, player.x-s.x);
        s.x+=Math.cos(a)*3.5; s.y+=Math.sin(a)*3.5;
      }
      if (d < player.r+s.r) {
        s.done=true; collected++;
        addParticles(s.x, s.y, s.color, 32);
        addRing(s.x, s.y, s.color);
        spawnEnemy(); // each stone adds a new Outrider
        if (collected===6) {
          const t = (Date.now()-startTime)/1000;
          if (t < bestTime) { bestTime=t; localStorage.setItem('infinity-best',bestTime); updateBestDisplay(); }
          state='win';
          STONE_DEFS.forEach(def => addParticles(player.x,player.y,def.color,25));
        }
      }
    });

    // Particles
    particles = particles.filter(p => {
      p.x+=p.vx; p.y+=p.vy; p.vy+=0.08; p.alpha-=p.decay; return p.alpha>0;
    });

    // Rings
    rings.forEach(r => { r.r+=3; r.alpha=Math.max(0,1-r.r/r.maxR); });
    rings = rings.filter(r => r.alpha>0);
  }

  // ── Loop ──
  function loop() {
    drawBg();
    if (state==='playing') {
      update();
      drawRings(); drawParticles(); drawStones(); drawEnemies(); drawPlayer(); drawHUD();
    } else if (state==='idle') {
      drawOverlay('INFINITY TRIAL','Collect all 6 stones · Dodge the Outriders','CLICK TO BEGIN','#ffffff');
    } else if (state==='dead') {
      drawRings(); drawParticles();
      drawOverlay('SNAPPED','The Outriders caught you.','CLICK TO RETRY','#ff4444');
    } else if (state==='win') {
      const t=((Date.now()-startTime)/1000).toFixed(2);
      drawParticles(); drawRings();
      drawOverlay('GAUNTLET COMPLETE',`All 6 stones collected in ${t}s`,'CLICK TO PLAY AGAIN','#ffb800');
    }
    animId = requestAnimationFrame(loop);
  }

  // ── Input ──
  canvas.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mx=(e.clientX-r.left)*(W/r.width);
    my=(e.clientY-r.top)*(H/r.height);
  });

  canvas.addEventListener('click', () => {
    if (state!=='playing') { resize(); initState(); state='playing'; }
  });

  // ── Touch support ──
  canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    const r=canvas.getBoundingClientRect(), t=e.touches[0];
    mx=(t.clientX-r.left)*(W/r.width); my=(t.clientY-r.top)*(H/r.height);
  }, { passive:false });

  canvas.addEventListener('touchstart', () => {
    if (state!=='playing') { resize(); initState(); state='playing'; }
  });

  window.addEventListener('resize', () => { if(state==='playing') resize(); });

  resize();
  loop();
}




