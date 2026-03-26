# gzhno // Krul_Tepes — Security Researcher Portfolio

Smart contract güvenlik araştırmacısı ve bug bounty hunter kişisel portfolyo sitesi.

## Hakkında

Solana ve EVM ekosistemlerinde DeFi protokol güvenliği üzerine çalışıyorum. **Code4rena** ve **Immunefi** platformlarında bug bounty araştırmaları yapıyorum. Aynı zamanda RISC-V mimarisi üzerinde safety-critical bir gerçek zamanlı işletim sistemi çekirdeği — **Sipahi** — geliştiriyorum.

## Site Yapısı — 8 Sayfa

```
web_portfolio_template/
├── index.html                    # Ana sayfa — Three.js 3D Sipahi logo, particle morphing
├── README.md                     # Bu dosya
├── assests/
│   ├── css/
│   │   └── style.css             # Global stiller
│   ├── js/
│   │   ├── main.js               # Temel scriptler
│   │   └── senior.js             # Ctrl+K Command Palette, GSAP ScrollTrigger, sayfa geçişleri
│   └── img/                      # Görseller
└── pages/
    ├── project.html              # Sipahi mimari (Three.js Exploded View, D3.js Force Graph)
    ├── rust.html                 # Rust tanıtımı (Canvas Ownership animasyonu, Ferris)
    ├── scenario.html             # Hava savunma simülasyonu (AI video + HUD overlay)
    ├── about.html                # Hakkımda (Krul Tepes hero, Three.js Skill Sphere)
    ├── books.html                # Kitap Galaksisi (60K+ parçacık, Density Wave Theory)
    ├── contact.html              # İletişim formu + Three.js Rune Portal
    ├── covers/                   # Kitap kapak görselleri
    ├── defense.mp4               # AI-generated füze simülasyon videosu
    ├── ferris.png                # Rust maskotu Ferris görseli
    └── krul.png                  # Krul Tepes hero görseli
```

## Kullanılan Teknolojiler

| Teknoloji | Kullanım Alanı |
|-----------|---------------|
| **GPGPU Ping-Pong FBO** | Schrödinger PDE solver — 256×256 float texture, 15.7M hesaplama/sn, gerçek kuantum tünelleme (project) |
| **Three.js + GLSL** | 3D Sipahi logo (index), Kitap Galaksisi 60K parçacık (books), Holographic Exploded View (project), Rune Portal (contact), Skill Sphere (about) |
| **GLSL Shader Pipeline** | 20 shader: FBM noise 5 octave, Fresnel rim, Schrödinger finite difference, holographic scan-line, accretion disc, hex pattern, barrier field |
| **Orbital Mekanik** | Kepler polar denklemi, density wave theory, diferansiyel rotasyon, de Vaucouleurs profili (books) |
| **Kuantum Mekaniği** | Schrödinger denklemi (GPU çözüm), Born kuralı, Heisenberg belirsizliği, dalga fonksiyonu çökmesi, kuantum tünelleme, Bell state entanglement (project) |
| **D3.js** | Radial dependency tree + animated data flow particles (project) |
| **GSAP + ScrollTrigger** | Stagger animasyonlar, parallax, bounce efektleri (tüm sayfalar) |
| **Canvas 2D API** | Ownership animasyonu (rust), HUD simülasyonu (scenario), custom screen-space bloom (books) |
| **Video API** | AI-generated füze videosu arka plan (scenario) |
| **CSS Animations** | Keyframe animasyonlar, transitions, hover efektleri |
| **Google Fonts** | JetBrains Mono, Outfit, Cinzel |

## Sayfa Detayları

### index.html — Ana Sayfa
- **Three.js 3D Sipahi Logosu:** 4 katmanlı kernel mimarisi (oktahedron çekirdek, IPC torus halkaları, WASM halka, icosahedron kalkan), metalik material, 4 ışık kaynağı, mouse etkileşimi
- **Particle Morphing:** 500 parçacık dağınık küre ↔ "SİPAHİ" yazısı arasında morph döngüsü
- **Typing efekti:** Döngüsel metin animasyonu
- **Proje carousel:** 4 proje kartı, otomatik döngü + ok navigasyonu
- **Terminal animasyonu:** Gerçek zamanlı yazılan Sipahi kernel build çıktısı
- **Newsletter formu:** Validasyonlu e-posta abonelik

### pages/project.html — Projeler ⭐⭐
> *1,785 satır · 3 fizik motoru · 10 GLSL shader · GPGPU pipeline · 81K+ parçacık*

**Three.js Holographic Exploded View:** 4 katman GLSL holographic shader (Fresnel + scan-line + hex pattern), 1,600 orbital parçacık kabuğu, 300 veri akışı parçacığı, enerji halkaları, slider ile ayır/birleştir

**Quantum Cyber Field — GPGPU Schrödinger PDE Solver:** ⚛️

National Cyber Stack'in kuantum mekaniği görselleştirmesi. **İllüzyon değil, gerçek hesaplamalı fizik:**

GPGPU Ping-Pong FBO mimarisi:
```
Frame N:   FBO_A [ψ(t)]   → Schrödinger GLSL Solver → FBO_B [ψ(t+dt)]
Frame N+1: FBO_B [ψ(t+dt)] → Schrödinger GLSL Solver → FBO_A [ψ(t+2dt)]  ← SWAP
Her frame GPU→GPU, veri CPU'ya hiç dönmüyor.
```

Schrödinger PDE çözümü (GLSL finite difference):
```glsl
// 5-point stencil Laplacian
∇²Re(ψ) = (Re_x+ + Re_x- + Re_y+ + Re_y- - 4·Re) / dx²

// iℏ∂ψ/∂t = -ℏ²/(2m)·∇²ψ + V·ψ → split real/imaginary:
∂Re/∂t = +(ℏ/2m)·∇²Im - (V/ℏ)·Im
∂Im/∂t = -(ℏ/2m)·∇²Re + (V/ℏ)·Re
```

| Bileşen | Teknik |
|---------|--------|
| Dalga fonksiyonu | 256×256 Float32 texture, RGBA = Re,Im,V,\|ψ\|² |
| Kuantum tünelleme | Dalga paketi + potansiyel bariyer → PDE doğal çözümü |
| Çarpışma izleri | CERN CMS tarzı spiral tracks, fade-out |
| Dalga çökmesi | σ→0 Gaussian narrowing, eigenstate seçimi |
| Belirsizlik | Mouse proximity → ΔxΔp ≥ ℏ/2 canlı hesaplama |
| Dolanıklık | 7 Bell state çifti, Bezier parçacık akışı |
| Quantum foam | 1,500 sanal parçacık, ΔEΔt ≥ ℏ/2 flicker |

Hesaplama yükü: 256×256 grid × 4 substep/frame × 60fps = **15,728,640 PDE hesaplama/saniye**

**D3.js Radial Dependency Tree:** Hiyerarşik mimari ağaç, curved Bezier bağlantılar, animated data flow, hover vurgulama, core pulse

**National Cyber Stack:** 5 modül flow diagram + invariant kartları + doktrin bloğu

### pages/rust.html — Rust Programlama Dili
- **Ferris görseli:** Floating + glow animasyonu
- **Canvas Ownership Animasyonu:** 4 adımlı otomatik döngü (let → move → clone → drop), Stack/Heap kutuları, oklu bağlantılar
- **6 özellik kartı:** Bellek güvenliği, sıfır maliyetli soyutlama, korkusuz eşzamanlılık, Cargo, no_std, formal doğrulama
- **Dil karşılaştırma tablosu:** Rust vs C vs C++ vs Go vs Python, 7 metrik
- **Kimler kullanıyor:** Mozilla, AWS, Google, Microsoft, Linux Kernel, Solana
- **Tarihçe timeline:** 2006'dan Sipahi'ye

### pages/scenario.html — Hava Savunma Simülasyonu
- **AI-generated video arka plan:** Kling 2.6 ile üretilmiş füze savunma videosu
- **Askeri HUD overlay:** Scanlines, vignette, crosshair, köşe bilgileri, telemetri panelleri
- **Otomatik senaryo:** C++ RTOS fail (KERNEL PANIC) → Sipahi success — 1 kere oynuyor
- **Teknik karşılaştırma:** Rust vs C++ metrikleri, animasyonlu barlar
- **Savaş senaryosu timeline:** 5 adımlı balistik füze önleme zaman çizelgesi

### pages/about.html — Hakkımda
- **Full-screen Krul Tepes hero:** AI-generated görsel, kırmızı vignette, kan parçacıkları
- **"Gazihan ÖCBE // Krul_Tepes":** Cinzel font, gradient, animasyonlu unvanlar
- **Three.js Skill Sphere:** 28 yetenek, Fibonacci spiral dağılımı, 3D dönen küre, mouse ile döndür
- **Timeline:** Kırmızı→yeşil gradient, animasyonlu giriş
- **Skill barlar:** Kırmızı→yeşil gradient, scroll-triggered
- **17 araç, 6 kategoride interaktif filtre:** Formal Verification, Fuzzing, Observability, Testing, Security, Infra
- **Ticker:** Kayan metin bandı

### pages/books.html — Kitap Galaksisi ⭐
> *1,249 satır · 60,270 parçacık · 16 modül · 4 GLSL shader · 918 satır motor kodu*

Astrofizik araştırma seviyesinde bir galaksi simülasyonu. 73M+ kelime okuma koleksiyonunu etkileşimli bir spiral galaksi olarak görselleştiriyor. Her kitap galakside bir yıldız — büyüklüğü bölüm sayısına göre, rengi kategorisine göre, yörüngesi Density Wave Theory'ye göre hesaplanıyor.

**Bilimsel Temel — Density Wave Theory (Lin & Shu, 1964):**
- **Eliptik yörünge motoru:** Her yıldız Kepler elipsi üzerinde hareket eder, yörüngeler kademeli açıyla tilt edilerek spiral kollar oluşturulur. Galaksilerdeki spiral yapının gerçek açıklaması budur — yıldızlar spiral kolların içinden geçer, onlarla birlikte dönmez.
- **Eccentricity profili:** Bulge (e=0.1, dairesel) → Disk sınırı (e=0.6, eliptik) → Edge (e=0.3, tekrar dairesel) — gerçek galaksi gözlemlerine dayalı
- **Flat rotation curve:** İç bölge katı cisim rotasyonu, dış bölge düz eğri (dark matter etkisinin dolaylı kanıtı)
- **sech² dikey profil:** Disk kalınlığı merkeze yakın ince, dışa doğru artar

**Parçacık Dağılımı (60,270 toplam):**
| Katman | Parçacık | Teknik |
|--------|----------|--------|
| Ana disk | 30,000 | Exponential radial distribution + elliptical orbits |
| Spiral kol çekirdekleri | 8,000 | Tight arm-locked, 2 renk kimliği |
| Merkez bulge | 6,000 | de Vaucouleurs r^(1/4) yüzey parlaklığı profili |
| Toz şeritleri | 3,000 | Spiral kolların trailing edge'inde absorpsiyon |
| H-II bölgeleri | 440 | Yıldız oluşum alanları, sadece spiral kollarda |
| HII knot'lar | 40 | Parlak star-forming compact regions |
| Arka plan yıldızları | 12,000 | Spectral classification (O/B/A/F/G/K/M) |
| Nebula halos | ~830 | Diffuse emission, arm-specific coloring |

**Stellar Population Synthesis (Hertzsprung-Russell Diyagramı):**
- **O/B yıldızları** (%8): Mavi devler, çok parlak, kısa ömürlü — spiral kollarda yoğun
- **A yıldızları** (%10): Beyaz-mavi, sıcak
- **F/G yıldızları** (%22): Güneş tipi, sarı-beyaz
- **K yıldızları** (%20): Turuncu cüceler
- **M yıldızları** (%40): Kırmızı cüceler — evrendeki en yaygın yıldız tipi

**GLSL Shader Pipeline (4 custom shader):**
- **Core plasma shader:** FBM noise (4 octave), Fresnel rim lighting, temperature gradient (white-hot → cyan → blue)
- **Accretion disc shader:** Animated energy waves, procedural hot-spot generation
- **Vertex shader:** Per-particle size attenuation + camera distance scaling
- **Fragment shader:** Radial gradient alpha + color space management

**Gerçek Zamanlı Diferansiyel Rotasyon:**
Her frame'de 38,000+ yıldızın yörünge pozisyonu Kepler elips denklemi ile yeniden hesaplanır. İç yıldızlar hızlı, dış yıldızlar yavaş döner — galaksilerin spiral kollarını koruyan mekanizma budur.

**Custom Screen-Space Bloom:**
Downsample (0.2x) → Double Gaussian blur (6px + 14px) → Screen-blend composite — yıldızların etrafında gerçekçi ışık yayılma efekti

**Etkileşim:** Mouse sürükle-döndür, scroll zoom (6-50 birim), raycaster hover ile kitap bilgisi tooltip

**Custom Fizik Motorları — Kullanılan Teori, Yasa ve Matematiksel Yöntemler:**

| # | Tür | Adı | Kullanım |
|---|-----|-----|----------|
| 1 | **PDE** | **Schrödinger Denklemi** | `iℏ∂ψ/∂t = -ℏ²/2m·∇²ψ + Vψ` — GPGPU'da finite difference ile çözülüyor |
| 2 | Numerik | **5-Point Stencil Laplacian** | `∇²ψ = (ψ_x+ + ψ_x- + ψ_y+ + ψ_y- - 4ψ)/dx²` |
| 3 | Kural | **Born Kuralı** | `P(x) = \|ψ\|² = Re² + Im²` — her texelde hesaplanıyor |
| 4 | İlke | **Heisenberg Belirsizliği** | `ΔxΔp ≥ ℏ/2` — mouse etkileşimiyle canlı |
| 5 | Olgu | **Kuantum Tünelleme** | `T = e^(-2κL)` — PDE'nin doğal çözümü olarak |
| 6 | Durum | **Bell State Entanglement** | `\|Φ+⟩ = (\|00⟩+\|11⟩)/√2` — modül korelasyonu |
| 7 | Mimari | **Ping-Pong FBO** | `FBO_A→GPU→FBO_B→GPU→FBO_A` — veri CPU'ya dönmüyor |
| 8 | Teori | **Density Wave Theory (Lin & Shu, 1964)** | Spiral kol yapısı — yıldızlar yoğunluk dalgasından geçer |
| 9 | Yasa | **Kepler'in 1. Yasası** | Eliptik yörüngeler — `orbitPoint()` |
| 10 | Yasa | **Kepler'in 3. Yasası** | Diferansiyel rotasyon — `orbitalVelocity()` |
| 11 | Yasa | **de Vaucouleurs Yasası (1948)** | Bulge parlaklık profili — `r^(1/4)` |
| 12 | Yasa | **Newton Kütle Çekim** | Merkeze çekim — `F = GM/r²` |
| 13 | Teorem | **Box-Muller Dönüşümü** | Gaussian random — `gaussRandom()` |
| 14 | Profil | **Exponential Disc** | Yıldız yoğunluk dağılımı — `I(r) = I₀·e^(-r/h)` |
| 15 | Fizik | **Fresnel Denklemi (1823)** | Kenar parlaması — 5 shader'da kullanılıyor |
| 16 | Fizik | **FBM Noise (Mandelbrot)** | Türbülans texture — 5 octave noise |
| 17 | Sistem | **Hertzsprung-Russell Diyagramı** | Yıldız sınıflandırma — O/B/A/F/G/K/M oranları |
| 18 | Bağıntı | **Planck-Einstein** | `E = ℏω` — enerji kuantizasyonu |

**Toplam: 18 fizik/matematik formülü, 2 ayrı fizik motoru (astrofizik + kuantum), GPGPU pipeline**

**İstatistik Paneli:** 73M+ kelime · 36,000+ bölüm · 35 web novel · 27 fiziksel kitap — animasyonlu sayaç

**Kategori Filtreleme:** Cultivation (mor) · System/LitRPG (yeşil) · Fantasy/Sci-Fi (amber) · Dark/Anti-Hero (kırmızı)

### pages/contact.html — İletişim
- **Three.js Mystical Rune Portal:** GLSL shader enerji küresi, 3 dönen halka, 12 Elder Futhark rün sembolü, 150 spiral parçacık, dikey enerji ışınları, zemin ışık halkası
- **Gerçek zamanlı form validasyonu:** Blur tetiklemeli, karakter sayacı, konu dropdown
- **Loading spinner** ve toast bildirimi
- **İletişim kartları:** Hover animasyonlu

## Senior-Level Özellikler (senior.js)

- **Ctrl+K Command Palette:** Vercel/Linear tarzı arama paneli, fuzzy search, ok tuşları + Enter navigasyon, ESC kapatma
- **Sayfa Geçiş Animasyonu:** 6 yeşil bar aşağıdan yukarı, fade-in geçiş
- **GSAP ScrollTrigger:** Stagger grid animasyonları, section header parallax, badge bounce, timeline slide-in

## Sipahi Microkernel

Sipahi, robotik ve endüstriyel kontrol sistemleri için tasarlanan capability-based bir mikro çekirdek:

- **Katman 0 — Donanım:** RISC-V 64-bit, CLINT, PMP izolasyon, Watchdog Timer
- **Katman 1 — Çelik Çekirdek:** Heap-free, panic-free TCB. Preemptive RR scheduler, capability broker
- **Katman 2 — Sinir Sistemi:** Lock-free SPSC ring buffer ile zero-copy IPC, blackbox flight recorder
- **Katman 3 — Güvenli Bölge:** WASM sandbox (wasmi), no-float enforcement, cycle accounting
- **Formal Doğrulama:** Kani (panic-freedom) + Lean 4 (capability doğruluğu)

## National Cyber Stack

Sipahi üzerine inşa edilen 5 katmanlı sovereign siber savunma doktrini:

- **PRELUDE** — Early Sensing: ML bağımsız desen algılama
- **ORACLE** — Campaign Reasoning: Tekil olayları kampanya resmine dönüştürme
- **MANTIS** — Defensive Continuity: Graceful degradation, kademeli policy enforcement
- **ARES** — Counter-Pressure: M-of-N onaylı caydırıcılık
- **OBSIDIAN** — Evidence & Truth: Append-only, replay-safe kanıt zinciri

## Araç Kutusu (16 araç)

**Formal Verification:** Kani, Lean 4, TLA+, Miri, Loom
**Fuzzing & Mutation:** cargo-fuzz (libFuzzer), AFL++, cargo-mutants
**Observability:** eBPF + Flamegraph, RR (Record & Replay)
**Testing:** proptest/quickcheck, Insta, Criterion.rs, llvm-cov/grcov
**Security:** cargo-audit + cargo-deny, Clippy
**Infrastructure:** cross-rs

## Yerel Geliştirme

```bash
git clone https://github.com/KrulTepes40/web_portfolio_template.git
cd web_portfolio_template
# Tarayıcıda index.html'i aç
```

## İletişim

- **GitHub:** [KrulTepes40](https://github.com/KrulTepes40)
- **Code4rena:** @Krul_Tepes
- **Immunefi:** Krul_Tepes

## Lisans

MIT

---

## Teknik Özet

```
Toplam Satır:         5,649
Sayfa:                8
GLSL Shader:          20
THREE.js Objesi:      220+
Parçacık:             81,000+ (60K galaksi + 16K kuantum + 5K holographic)
Fizik Formülü:        18
GPU Hesaplama:        15,728,640 PDE/saniye (Schrödinger)
                      + 38,000 orbit/frame (Kepler)
GPGPU Pipeline:       Ping-Pong FBO, Float32 RGBA texture
Fizik Motorları:      2 (Astrofizik galaksi + Kuantum Schrödinger)
Kütüphane:            Three.js, D3.js, GSAP, Canvas 2D
Fizik Alanları:       Astrofizik, kuantum mekaniği, optik, kozmoloji
Referanslar:          Lin & Shu 1964, Kepler 1609, Newton 1687,
                      Schrödinger 1926, Heisenberg 1927, Born 1926,
                      de Vaucouleurs 1948, Fresnel 1823, Mandelbrot 1982
```

> *"Kodu kırmadan önce doğrulama şarttır."* — gzhno // Krul_Tepes
