/* ═══════════════════════════════════════════
   SIPAHI PORTFOLIO — Senior Features
   1. Ctrl+K Command Palette
   2. Page Transition Animation
   ═══════════════════════════════════════════ */

(function(){

/* ═══════ DETECT BASE PATH ═══════ */
const isSubpage = window.location.pathname.includes('/pages/');
const base = isSubpage ? '../' : '';
const pageBase = isSubpage ? '' : 'pages/';

/* ═══════════════════════════════════════════
   1. CTRL+K COMMAND PALETTE
   ═══════════════════════════════════════════ */
const commands = [
    {name:'Ana Sayfa', desc:'Hero, 3D Sipahi Logo, Projeler', keys:'ana, home, index', url: base+'index.html', icon:'🏠'},
    {name:'Projeler', desc:'Sipahi Microkernel, Cyber Stack, Jupiter Lend', keys:'proje, project, sipahi, cyber, jupiter, warlord', url: pageBase+'project.html', icon:'⚡'},
    {name:'Rust', desc:'Ferris, Ownership, Dil Karşılaştırması', keys:'rust, ferris, ownership, cargo, crab', url: pageBase+'rust.html', icon:'🦀'},
    {name:'Senaryo', desc:'Hava Savunma Simülasyonu, Rust vs C++', keys:'senaryo, scenario, hava, savunma, füze, missile, defense', url: pageBase+'scenario.html', icon:'🎯'},
    {name:'Hakkımda', desc:'Yetenekler, Timeline, Araçlar', keys:'hakkımda, about, skill, yetenek, timeline', url: pageBase+'about.html', icon:'👤'},
    {name:'Kitaplık', desc:'73M+ kelime, 35 Web Novel, Fiziksel Kitaplar', keys:'kitaplık, kitap, book, novel, mech touch, cultivation, okuma', url: pageBase+'books.html', icon:'📚'},
    {name:'İletişim', desc:'Form, GitHub, Code4rena, Immunefi', keys:'iletişim, contact, mail, github, form', url: pageBase+'contact.html', icon:'✉️'},
    {name:'GitHub', desc:'github.com/gzhno', keys:'github, git, repo', url:'https://github.com/gzhno', icon:'⌥', external:true},
    {name:'Code4rena', desc:'@Krul_Tepes', keys:'code4rena, c4, krul, audit', url:'https://code4rena.com/@Krul_Tepes', icon:'🛡️', external:true},
];

// Inject styles
const style = document.createElement('style');
style.textContent = `
/* PALETTE OVERLAY */
.cmd-overlay{position:fixed;inset:0;background:rgba(4,6,12,.7);backdrop-filter:blur(12px);z-index:99999;display:flex;align-items:flex-start;justify-content:center;padding-top:min(20vh,180px);opacity:0;visibility:hidden;transition:opacity .2s,visibility .2s}
.cmd-overlay.open{opacity:1;visibility:visible}
.cmd-overlay.open .cmd-box{transform:translateY(0) scale(1);opacity:1}

/* PALETTE BOX */
.cmd-box{width:min(580px,92vw);background:#0e1018;border:1px solid #1e2a40;border-radius:14px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.6),0 0 0 1px rgba(0,255,200,.05);transform:translateY(-12px) scale(.98);opacity:0;transition:transform .25s cubic-bezier(.16,1,.3,1),opacity .2s}

/* SEARCH INPUT */
.cmd-input-wrap{display:flex;align-items:center;padding:0 20px;border-bottom:1px solid #1a2236;gap:12px}
.cmd-input-icon{font-size:1rem;opacity:.3;flex-shrink:0}
.cmd-input{flex:1;background:none;border:none;color:#e0e4ec;font-family:'Outfit',sans-serif;font-size:.95rem;padding:16px 0;outline:none}
.cmd-input::placeholder{color:#3a4a68}
.cmd-kbd{font-family:'JetBrains Mono',monospace;font-size:.55rem;color:#3a4a68;border:1px solid #1e2a40;border-radius:4px;padding:2px 6px;flex-shrink:0}

/* RESULTS */
.cmd-results{max-height:340px;overflow-y:auto;padding:8px}
.cmd-results::-webkit-scrollbar{width:4px}
.cmd-results::-webkit-scrollbar-thumb{background:#1e2a40;border-radius:2px}
.cmd-item{display:flex;align-items:center;gap:14px;padding:10px 14px;border-radius:8px;cursor:pointer;transition:background .15s}
.cmd-item:hover,.cmd-item.active{background:rgba(0,255,200,.06)}
.cmd-item.active{outline:1px solid rgba(0,255,200,.15)}
.cmd-item-icon{font-size:1.1rem;width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:#111822;border:1px solid #1a2236;border-radius:8px;flex-shrink:0}
.cmd-item-text{flex:1;min-width:0}
.cmd-item-name{font-size:.85rem;font-weight:500;color:#e0e4ec}
.cmd-item-desc{font-size:.7rem;color:#3a4a68;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cmd-item-arrow{font-size:.8rem;color:#2a3a58;transition:transform .2s,color .2s}
.cmd-item:hover .cmd-item-arrow,.cmd-item.active .cmd-item-arrow{color:#00ffc8;transform:translateX(3px)}
.cmd-item-ext{font-family:'JetBrains Mono',monospace;font-size:.5rem;color:#3a4a68;letter-spacing:1px}

/* FOOTER */
.cmd-footer{padding:10px 20px;border-top:1px solid #1a2236;display:flex;gap:16px;justify-content:center}
.cmd-footer-item{font-family:'JetBrains Mono',monospace;font-size:.55rem;color:#2a3a58;display:flex;align-items:center;gap:5px}
.cmd-footer-key{border:1px solid #1a2236;border-radius:3px;padding:1px 5px;font-size:.5rem;color:#3a4a68}

/* NO RESULTS */
.cmd-empty{padding:32px;text-align:center;color:#3a4a68;font-size:.85rem}

/* HINT BADGE (bottom-right) */
.cmd-hint{position:fixed;bottom:32px;left:32px;z-index:100;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:#3a4a68;background:#0e1018;border:1px solid #1a2236;border-radius:6px;padding:5px 10px;display:flex;align-items:center;gap:6px;opacity:0;animation:cmdHintIn 1s ease 2s forwards;pointer-events:none}
@keyframes cmdHintIn{to{opacity:.6}}
.cmd-hint-key{border:1px solid #2a3a58;border-radius:3px;padding:1px 5px;color:#4a5a78}

/* ═══════ PAGE TRANSITION ═══════ */
.page-transition{position:fixed;inset:0;z-index:99998;pointer-events:none;display:flex}
.pt-bar{flex:1;background:#00ffc8;transform:scaleY(0);transform-origin:bottom}
.page-fade{animation:pageFadeIn .4s ease forwards}
@keyframes pageFadeIn{from{opacity:0}to{opacity:1}}
`;
document.head.appendChild(style);

// Build palette DOM
const overlay = document.createElement('div');
overlay.className = 'cmd-overlay';
overlay.innerHTML = `
<div class="cmd-box">
    <div class="cmd-input-wrap">
        <span class="cmd-input-icon">🔍</span>
        <input class="cmd-input" type="text" placeholder="Sayfa ara..." autocomplete="off" spellcheck="false">
        <span class="cmd-kbd">ESC</span>
    </div>
    <div class="cmd-results"></div>
    <div class="cmd-footer">
        <span class="cmd-footer-item"><span class="cmd-footer-key">↑↓</span> Gezin</span>
        <span class="cmd-footer-item"><span class="cmd-footer-key">Enter</span> Git</span>
        <span class="cmd-footer-item"><span class="cmd-footer-key">Esc</span> Kapat</span>
    </div>
</div>`;
document.body.appendChild(overlay);

// Hint badge
const hint = document.createElement('div');
hint.className = 'cmd-hint';
hint.innerHTML = '<span class="cmd-hint-key">Ctrl</span>+<span class="cmd-hint-key">K</span> Hızlı arama';
document.body.appendChild(hint);

const input = overlay.querySelector('.cmd-input');
const results = overlay.querySelector('.cmd-results');
let activeIdx = 0;
let filtered = [...commands];

function render(list){
    filtered = list;
    activeIdx = 0;
    if(list.length === 0){
        results.innerHTML = '<div class="cmd-empty">Sonuç bulunamadı</div>';
        return;
    }
    results.innerHTML = list.map((c,i) => `
        <div class="cmd-item${i===0?' active':''}" data-idx="${i}">
            <div class="cmd-item-icon">${c.icon}</div>
            <div class="cmd-item-text">
                <div class="cmd-item-name">${c.name}</div>
                <div class="cmd-item-desc">${c.desc}</div>
            </div>
            ${c.external?'<span class="cmd-item-ext">EXTERNAL ↗</span>':''}
            <span class="cmd-item-arrow">→</span>
        </div>
    `).join('');

    results.querySelectorAll('.cmd-item').forEach(item => {
        item.addEventListener('click', () => navigate(+item.dataset.idx));
        item.addEventListener('mouseenter', () => {
            activeIdx = +item.dataset.idx;
            updateActive();
        });
    });
}

function updateActive(){
    results.querySelectorAll('.cmd-item').forEach((el,i) => {
        el.classList.toggle('active', i===activeIdx);
        if(i===activeIdx) el.scrollIntoView({block:'nearest'});
    });
}

function open(){
    overlay.classList.add('open');
    input.value = '';
    render(commands);
    setTimeout(() => input.focus(), 50);
}

function close(){
    overlay.classList.remove('open');
    input.blur();
}

function navigate(idx){
    const cmd = filtered[idx];
    if(!cmd) return;
    close();
    if(cmd.external){
        window.open(cmd.url, '_blank');
    } else {
        transitionTo(cmd.url);
    }
}

// Search
input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if(!q){ render(commands); return; }
    const list = commands.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q) ||
        c.keys.toLowerCase().includes(q)
    );
    render(list);
});

// Keyboard
document.addEventListener('keydown', e => {
    // Open
    if((e.ctrlKey || e.metaKey) && e.key === 'k'){
        e.preventDefault();
        overlay.classList.contains('open') ? close() : open();
        return;
    }
    if(!overlay.classList.contains('open')) return;
    // Close
    if(e.key === 'Escape'){ close(); return; }
    // Navigate
    if(e.key === 'ArrowDown'){
        e.preventDefault();
        activeIdx = (activeIdx + 1) % filtered.length;
        updateActive();
    }
    if(e.key === 'ArrowUp'){
        e.preventDefault();
        activeIdx = (activeIdx - 1 + filtered.length) % filtered.length;
        updateActive();
    }
    if(e.key === 'Enter'){
        e.preventDefault();
        navigate(activeIdx);
    }
});

// Click overlay to close
overlay.addEventListener('click', e => {
    if(e.target === overlay) close();
});


/* ═══════════════════════════════════════════
   2. PAGE TRANSITION ANIMATION
   ═══════════════════════════════════════════ */

// Fade in on load
document.body.classList.add('page-fade');

function transitionTo(url){
    // Create transition bars
    const trans = document.createElement('div');
    trans.className = 'page-transition';
    const barCount = 6;
    for(let i = 0; i < barCount; i++){
        const bar = document.createElement('div');
        bar.className = 'pt-bar';
        bar.style.transition = `transform .35s cubic-bezier(.76,0,.24,1) ${i * 0.04}s`;
        trans.appendChild(bar);
    }
    document.body.appendChild(trans);

    // Trigger animation
    requestAnimationFrame(() => {
        trans.querySelectorAll('.pt-bar').forEach(bar => {
            bar.style.transform = 'scaleY(1)';
        });
    });

    // Navigate after animation
    setTimeout(() => {
        window.location.href = url;
    }, 350 + barCount * 40 + 100);
}

// Intercept all internal links
document.addEventListener('click', e => {
    const link = e.target.closest('a');
    if(!link) return;
    const href = link.getAttribute('href');
    if(!href) return;
    // Skip external links, anchors, javascript
    if(href.startsWith('http') || href.startsWith('#') || href.startsWith('javascript') || href.startsWith('mailto') || link.target === '_blank') return;
    e.preventDefault();
    transitionTo(href);
});

/* ═══════════════════════════════════════════
   3. GSAP SCROLL ANIMATIONS
   ═══════════════════════════════════════════ */

// Load GSAP + ScrollTrigger dynamically
function loadScript(src, callback){
    const s = document.createElement('script');
    s.src = src; s.onload = callback;
    document.head.appendChild(s);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js', function(){
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js', function(){
        if(typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);

        // DON'T touch .fade-in elements — pages handle their own visibility
        // GSAP only adds BONUS animations on top

        // Stagger children of grids (cards appear one by one)
        document.querySelectorAll('.stats-row, .tools-grid, .features, .users-grid').forEach(grid => {
            const children = Array.from(grid.children);
            if(children.length < 2) return;
            children.forEach((child, i) => {
                gsap.from(child, {
                    y: 20,
                    scale: 0.97,
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: child,
                        start: 'top 92%',
                        toggleActions: 'play none none none'
                    }
                });
            });
        });

        // Section headers slide from left
        document.querySelectorAll('.section-header').forEach(header => {
            gsap.from(header, {
                x: -40,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: header,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Badge pop-in
        document.querySelectorAll('.badge, .principle').forEach((badge, i) => {
            gsap.from(badge, {
                scale: 0.5,
                duration: 0.35,
                delay: i * 0.05,
                ease: 'back.out(2)',
                scrollTrigger: {
                    trigger: badge.parentElement,
                    start: 'top 88%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Timeline items slide from left
        document.querySelectorAll('.tl-event, .te, .rt-item').forEach((item, i) => {
            gsap.from(item, {
                x: -30,
                duration: 0.6,
                delay: i * 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Table rows alternate sides
        document.querySelectorAll('.compare-table tbody tr').forEach((row, i) => {
            gsap.from(row, {
                x: i % 2 === 0 ? -15 : 15,
                duration: 0.4,
                delay: i * 0.04,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: row,
                    start: 'top 93%',
                    toggleActions: 'play none none none'
                }
            });
        });
    });
});

})();
