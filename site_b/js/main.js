/* ==========================================================================
   강남J비뇨기과 반응형 HTML 디자인 시안 — 방향 B (site_b/js/main.js)
   Vanilla JS 공통 인터랙션 (히어로 슬라이더, 공간 탭, 카운트업, 미디어 필터, 드로어, 모달)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  initStickyHeader();
  initHeroSlider();
  initMobileDrawer();
  initSpecialtyTabs();
  initSpaceGalleryTabs();
  initMediaFilter();
  initScrollRevealAndCounters();
  initFloatingTop();
  initClinicTabs();
  initConsultationForm();
  initKakaoModal();
});

/* 1. Sticky Header Scroll Shadow */
function initStickyHeader() {
  var header = document.querySelector('.site-header');
  if (!header) return;
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* 2. Fullscreen Editorial 3-Slide Fade Hero Slider */
function initHeroSlider() {
  var slider = document.querySelector('[data-hero-slider]');
  if (!slider) return;

  var slides = slider.querySelectorAll('.hero-slide');
  var dots = slider.querySelectorAll('.hero-dot');
  var counterCurrent = slider.querySelector('[data-hero-current]');
  var progressFill = slider.querySelector('[data-hero-progress]');
  var prevBtn = slider.querySelector('[data-hero-prev]');
  var nextBtn = slider.querySelector('[data-hero-next]');
  var toggleBtn = slider.querySelector('[data-hero-toggle]');
  var pauseIcon = slider.querySelector('[data-icon-pause]');
  var playIcon = slider.querySelector('[data-icon-play]');

  var current = 0;
  var total = slides.length;
  var isPlaying = true;
  var timer = null;
  var intervalMs = 6000;

  function goTo(index) {
    current = (index + total) % total;
    slides.forEach(function (slide, idx) {
      slide.classList.toggle('is-active', idx === current);
      slide.setAttribute('aria-hidden', idx === current ? 'false' : 'true');
    });
    dots.forEach(function (dot, idx) {
      var active = idx === current;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    if (counterCurrent) counterCurrent.textContent = '0' + (current + 1);
    if (progressFill) progressFill.style.width = ((current + 1) / total) * 100 + '%';
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(function () {
      goTo(current + 1);
    }, intervalMs);
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function updateToggleUI() {
    if (pauseIcon) pauseIcon.style.display = isPlaying ? 'block' : 'none';
    if (playIcon) playIcon.style.display = isPlaying ? 'none' : 'block';
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-label', isPlaying ? '슬라이드 일시정지' : '슬라이드 재생');
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      goTo(current - 1);
      if (isPlaying) startAuto();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      goTo(current + 1);
      if (isPlaying) startAuto();
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      isPlaying = !isPlaying;
      if (isPlaying) startAuto();
      else stopAuto();
      updateToggleUI();
    });
  }

  dots.forEach(function (dot, idx) {
    dot.addEventListener('click', function () {
      goTo(idx);
      if (isPlaying) startAuto();
    });
  });

  goTo(0);
  updateToggleUI();
  startAuto();
}

/* 3. Mobile Off-Canvas Accordion Drawer */
function initMobileDrawer() {
  var openBtn = document.querySelector('[data-drawer-open]');
  var closeBtn = document.querySelector('[data-drawer-close]');
  var drawer = document.getElementById('mobileDrawer');
  var backdrop = document.getElementById('drawerBackdrop');

  if (!drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.classList.add('is-locked');
    drawer.setAttribute('aria-hidden', 'false');
    if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    drawer.setAttribute('aria-hidden', 'true');
    if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
  }

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  var triggers = drawer.querySelectorAll('.drawer-acc-trigger');
  triggers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.drawer-acc-item');
      var isOpen = item.classList.contains('is-open');
      drawer.querySelectorAll('.drawer-acc-item').forEach(function (el) {
        el.classList.remove('is-open');
        var t = el.querySelector('.drawer-acc-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* 4. Main Page Specialty Interactive Tabs */
function initSpecialtyTabs() {
  var tabContainer = document.querySelector('[data-specialty-tabs]');
  if (!tabContainer) return;

  var specialties = {
    prostate: {
      title: '전립선 센터',
      desc: '전립선비대증의 표준 치료법인 홀렙(HoLEP)과 비절개 유로리프트(UroLift)부터 전립선염·전립선암·전립선통까지 단계별 정밀 진단과 맞춤 치료를 시행합니다.',
      thumb: '../assets/real-hospital/pc_01_hp_visual_08.jpg',
      alt: '강남J비뇨기과 수술센터 전경',
      links: [
        { label: '전립선 개요', href: './clinic_02.html#overview' },
        { label: '전립선비대증', href: './clinic_02.html#bph' },
        { label: 'HoLEP 시술', href: './clinic_02.html#holep' },
        { label: '유로리프트 (UroLift)', href: './clinic_02.html#urolift' },
        { label: '전립선염', href: './clinic_02.html#prostatitis' },
        { label: '전립선암 · 전립선통', href: './clinic_02.html#cancer' }
      ]
    },
    stone: {
      title: '요로결석 센터',
      desc: '갑작스러운 옆구리 통증과 혈뇨를 유발하는 요로결석의 원인·증상 분석부터 정밀 영상 진단, 체외충격파쇄석술(ESWL) 및 요관내시경 치료까지 신속하게 대응합니다.',
      thumb: '../assets/real-hospital/pc_01_hp_visual_15.jpg',
      alt: '강남J비뇨기과 독립 진료 복도',
      links: [
        { label: '요로결석 원인·증상', href: './qna_01.html#consultation' },
        { label: '요로결석 정밀 진단', href: './qna_01.html#consultation' },
        { label: '요로결석 치료 (ESWL/내시경)', href: './qna_01.html#consultation' },
        { label: '당일 진료 문의 · 예약', href: './qna_01.html#reservation' }
      ]
    },
    implant: {
      title: '음경임플란트 센터',
      desc: '보스턴사이언티픽 코리아(Boston Scientific Korea) 음경임플란트 프록터십(Proctorship) 교육기관으로서, 3S-DTC 원칙에 기반한 안전하고 정밀한 팽창형 보형물 수술을 집도합니다.',
      thumb: '../assets/real-hospital/pc_01_hp_visual_05.jpg',
      alt: '강남J비뇨기과 프라이빗 라운지',
      links: [
        { label: '음경임플란트 (AMS 700 LGX)', href: './qna_01.html#consultation' },
        { label: '전립선비대증 동시수술 (H-combi)', href: './clinic_02.html#holep' },
        { label: '의료진 수술 철학 (3S 원칙)', href: './hp_01.html' },
        { label: 'Meet the expert 수술상담', href: './qna_01.html#consultation' }
      ]
    },
    andrology: {
      title: '남성성형 센터',
      desc: '해부학적 근거와 3S(Safe·Simple·Speed) 수술 원칙을 바탕으로 귀두·음경 확대, 음경만곡증 교정, 음경 이물질 제거 및 함몰음경 교정을 프라이빗하게 시행합니다.',
      thumb: '../assets/real-hospital/pc_01_hp_visual_01.jpg',
      alt: '강남J비뇨기과 브랜드 월',
      links: [
        { label: '귀두확대술 · 음경굵기확대술', href: './qna_01.html#consultation' },
        { label: '음경길이연장술', href: './qna_01.html#consultation' },
        { label: '음경이물질제거 (DTC)', href: './qna_01.html#consultation' },
        { label: '음경만곡증 · 함몰음경', href: './qna_01.html#consultation' }
      ]
    },
    sexual: {
      title: '성기능장애 센터',
      desc: '발기부전 및 조루증의 원인을 객관적인 성기능검사로 정확히 감별하고, 약물·주사·수술적 요법 중 환자 상태에 가장 적합한 치료 계획을 수립합니다.',
      thumb: '../assets/real-hospital/pc_01_hp_visual_22.jpg',
      alt: '강남J비뇨기과 독립 개인진료실',
      links: [
        { label: '조루증이란 · 원인·진단', href: './qna_01.html#consultation' },
        { label: '조루증의 치료', href: './qna_01.html#consultation' },
        { label: '발기부전 · 성기능검사', href: './qna_01.html#consultation' },
        { label: '발기부전 치료', href: './qna_01.html#consultation' }
      ]
    },
    vasectomy: {
      title: '정관수술 센터',
      desc: '최소 국소 신경마취와 정교한 미세 술기를 적용한 무도정관수술 및 미세정관복원수술로 통증과 회복 부담을 낮춥니다.',
      thumb: '../assets/real-hospital/pc_01_hp_visual_08.jpg',
      alt: '강남J비뇨기과 수술실 입구',
      links: [
        { label: '정관수술 개요', href: './qna_01.html#consultation' },
        { label: '무도정관수술', href: './qna_01.html#consultation' },
        { label: '미세정관복원수술', href: './qna_01.html#consultation' },
        { label: '온라인 진료예약', href: './qna_01.html#reservation' }
      ]
    },
    circumcision: {
      title: '포경수술 센터',
      desc: '출혈과 조직 손상을 줄이는 레이저 포경수술 및 특수 슬리브 술기를 통해 안전하고 깔끔한 회복을 돕습니다.',
      thumb: '../assets/real-hospital/pc_01_hp_visual_03.jpg',
      alt: '강남J비뇨기과 4층 입구',
      links: [
        { label: '레이저 포경수술 안내', href: './qna_01.html#consultation' },
        { label: '수술 전후 주의사항 문의', href: './qna_01.html#consultation' }
      ]
    }
  };

  var buttons = tabContainer.querySelectorAll('.specialty-tab-btn');
  var panelEl = document.querySelector('.specialty-panel');
  var titleEl = document.getElementById('spTitle');
  var descEl = document.getElementById('spDesc');
  var thumbEl = document.getElementById('spThumb');
  var linksEl = document.getElementById('spLinks');

  function renderSpecialty(key, animate) {
    var data = specialties[key];
    if (!data) return;

    buttons.forEach(function (btn) {
      var active = btn.getAttribute('data-sp') === key;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    if (animate && panelEl) {
      panelEl.classList.remove('is-fading');
      void panelEl.offsetWidth;
      panelEl.classList.add('is-fading');
    }

    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (thumbEl) {
      thumbEl.src = data.thumb;
      thumbEl.alt = data.alt;
    }
    if (linksEl) {
      linksEl.innerHTML = data.links
        .map(function (item) {
          return (
            '<a class="specialty-proc-link" href="' + item.href + '">' +
            '<span>' + item.label + '</span>' +
            '<span class="arrow" aria-hidden="true">&rarr;</span>' +
            '</a>'
          );
        })
        .join('');
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      renderSpecialty(btn.getAttribute('data-sp'), true);
    });
  });

  renderSpecialty('prostate', false);
}

/* 5. Private Space Editorial Gallery Tabs (01 / 02 / 03) */
function initSpaceGalleryTabs() {
  var tabBar = document.querySelector('[data-space-tabs]');
  if (!tabBar) return;

  var spaces = {
    '01': {
      num: '01',
      title: '프라이버시를 지키는 5개의 독립 개인진료실',
      desc: '타 환자분과 마주치는 부담을 덜어드리기 위해 독립된 5개의 개인진료실을 운영합니다. 모든 진료 및 검사 과정에는 의사와 남자 간호사만 참여하며 전자차트 시스템으로 기록 보안을 철저히 유지합니다.',
      imgSm: '../assets/real-hospital/pc_01_hp_visual_22.jpg',
      altSm: '강남J비뇨기과 독립 개인진료실 내부',
      imgLg: '../assets/real-hospital/pc_01_hp_visual_15.jpg',
      altLg: '강남J비뇨기과 독립 진료실 복도'
    },
    '02': {
      num: '02',
      title: '자체 설계 · 첨단 멸균 시스템을 갖춘 전용 수술센터',
      desc: '두 대의 첨단 소독기계와 자외선 소독기가 자체 설치된 2개의 전용 수술방에서, 실시간 생체 활력증후 모니터링과 수술 중 음악요법(IOM)을 적용해 안전하고 쾌적한 수술을 진행합니다.',
      imgSm: '../assets/real-hospital/pc_01_hp_visual_08.jpg',
      altSm: '강남J비뇨기과 관계자 외 출입 제한 수술센터 입구',
      imgLg: '../assets/real-hospital/pc_01_hp_visual_10.jpg',
      altLg: '강남J비뇨기과 멸균 수술실 전경'
    },
    '03': {
      num: '03',
      title: '아늑하고 절제된 분위기의 프라이빗 라운지',
      desc: '사전 예약제 기반의 신속한 접수 창구와 편안한 대기 공간을 갖추고 있어 긴장감 없이 안정을 취하며 진료를 준비하실 수 있습니다. 건물 내 전용 지하 주차장도 완비되어 있습니다.',
      imgSm: '../assets/real-hospital/pc_01_hp_visual_03.jpg',
      altSm: '강남J비뇨기과 4층 프라이빗 입구',
      imgLg: '../assets/real-hospital/pc_01_hp_visual_05.jpg',
      altLg: '강남J비뇨기과 프라이빗 대기 라운지'
    }
  };

  var buttons = tabBar.querySelectorAll('.space-tab-btn');
  var spreadEl = document.getElementById('spaceSpread');
  var numEl = document.getElementById('spaceIndex');
  var titleEl = document.getElementById('spaceTitle');
  var descEl = document.getElementById('spaceDesc');
  var imgSmEl = document.getElementById('spaceImgSm');
  var imgLgEl = document.getElementById('spaceImgLg');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var key = btn.getAttribute('data-space');
      var data = spaces[key];
      if (!data) return;

      buttons.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', active ? 'true' : 'false');
      });

      if (spreadEl) {
        spreadEl.classList.remove('is-fading');
        void spreadEl.offsetWidth;
        spreadEl.classList.add('is-fading');
      }

      if (numEl) numEl.textContent = data.num;
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
      if (imgSmEl) {
        imgSmEl.src = data.imgSm;
        imgSmEl.alt = data.altSm;
      }
      if (imgLgEl) {
        imgLgEl.src = data.imgLg;
        imgLgEl.alt = data.altLg;
      }
    });
  });
}

/* 6. Media & Academic Archive Filter Tabs */
function initMediaFilter() {
  var filterBar = document.querySelector('[data-media-filter]');
  if (!filterBar) return;

  var buttons = filterBar.querySelectorAll('.media-filter-btn');
  var cards = document.querySelectorAll('.media-item-card[data-media-cat]');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.getAttribute('data-filter');
      buttons.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', active ? 'true' : 'false');
      });

      cards.forEach(function (card) {
        var show = cat === 'all' || card.getAttribute('data-media-cat') === cat;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });
}

/* 7. Scroll Reveal & Count-Up Metrics (With Blank-Preventing Safety Guards) */
function initScrollRevealAndCounters() {
  var revealEls = document.querySelectorAll('.reveal');
  var countEls = document.querySelectorAll('.count-num[data-count]');

  function animateCount(el) {
    if (el.getAttribute('data-counted') === '1') return;
    el.setAttribute('data-counted', '1');

    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 900;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(target * eased);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  function revealElement(el) {
    el.classList.add('is-visible');
    el.querySelectorAll('.count-num[data-count]').forEach(animateCount);
    if (el.matches('.count-num[data-count]')) animateCount(el);
  }

  if (revealEls.length) {
    document.documentElement.classList.add('js-reveal-ready');

    revealEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.96) {
        revealElement(el);
      }
    });

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
            revealElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

      revealEls.forEach(function (el) {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el);
        }
      });
    } else {
      revealEls.forEach(revealElement);
    }

    window.addEventListener('scroll', function () {
      revealEls.forEach(function (el) {
        if (!el.classList.contains('is-visible')) {
          var rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight + 60) {
            revealElement(el);
          }
        }
      });
    }, { passive: true });

    setTimeout(function () {
      revealEls.forEach(revealElement);
    }, 1400);
  } else {
    countEls.forEach(animateCount);
  }
}

/* 8. PC Floating Quick Menu TOP Button */
function initFloatingTop() {
  var topBtn = document.querySelector('[data-scroll-top]');
  if (!topBtn) return;
  topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* 9. Sub-Page Category Tabs (Prostate Center 7 Tabs + Hash Routing) */
function initClinicTabs() {
  var tabBar = document.querySelector('[data-clinic-tabs]');
  if (!tabBar) return;

  var buttons = tabBar.querySelectorAll('.sub-tab-btn');
  var panels = document.querySelectorAll('.clinic-panel');

  function activateTab(tabId, shouldScroll) {
    var matched = false;
    buttons.forEach(function (btn) {
      if (btn.getAttribute('data-tab') === tabId) matched = true;
    });
    if (!matched) tabId = buttons[0].getAttribute('data-tab');

    buttons.forEach(function (btn) {
      var active = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
      if (active && shouldScroll) {
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });

    panels.forEach(function (panel) {
      panel.classList.toggle('is-active', panel.id === 'panel-' + tabId);
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-tab');
      activateTab(id, true);
      if (history.replaceState) {
        history.replaceState(null, '', '#' + id);
      }
      var mainArea = document.getElementById('clinicMain');
      if (mainArea) {
        var topOffset = mainArea.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' });
      }
    });
  });

  function syncFromHash() {
    var hash = window.location.hash.replace('#', '');
    activateTab(hash || buttons[0].getAttribute('data-tab'), false);
  }

  window.addEventListener('hashchange', syncFromHash);
  syncFromHash();
}

/* 10. Consultation & Reservation Form */
function initConsultationForm() {
  var form = document.getElementById('clinicInquiryForm');
  if (!form) return;

  var modeBtns = document.querySelectorAll('[data-form-mode]');
  var modeInput = document.getElementById('inquiryMode');
  var reservationFields = document.getElementById('reservationOnlyFields');
  var submitBtnText = document.getElementById('submitBtnText');

  function setMode(mode) {
    if (mode !== 'consultation' && mode !== 'reservation') mode = 'reservation';
    if (modeInput) modeInput.value = mode;

    modeBtns.forEach(function (btn) {
      var active = btn.getAttribute('data-form-mode') === mode;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    if (reservationFields) {
      reservationFields.style.display = mode === 'reservation' ? 'grid' : 'none';
    }
    if (submitBtnText) {
      submitBtnText.textContent = mode === 'reservation' ? '온라인 진료예약 접수 (시안 목업)' : 'Meet the expert 수술상담 접수 (시안 목업)';
    }
  }

  modeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setMode(btn.getAttribute('data-form-mode'));
    });
  });

  setMode(window.location.hash === '#consultation' ? 'consultation' : 'reservation');

  var modal = document.getElementById('submitModal');
  var modalSummary = document.getElementById('modalSummary');
  var modalCloseBtns = document.querySelectorAll('[data-modal-close]');

  function openModal() {
    if (!modal) return;
    modal.classList.add('is-open');
    document.body.classList.add('is-locked');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('is-locked');
  }

  modalCloseBtns.forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;

    form.querySelectorAll('.form-group').forEach(function (g) {
      g.classList.remove('has-error');
    });

    var nameEl = document.getElementById('userName');
    var phoneEl = document.getElementById('userPhone');
    var categoryEl = document.getElementById('clinicCategory');
    var titleEl = document.getElementById('inquiryTitle');
    var contentEl = document.getElementById('inquiryContent');
    var agreeGeneral = document.getElementById('agreeGeneral');
    var agreeSensitive = document.getElementById('agreeSensitive');
    var dateEl = document.getElementById('reserveDate');
    var timeEl = document.getElementById('reserveTime');

    function markError(el) {
      valid = false;
      var group = el.closest('.form-group');
      if (group) group.classList.add('has-error');
    }

    if (!nameEl.value.trim()) markError(nameEl);
    if (!/^[0-9\-+\s]{9,16}$/.test(phoneEl.value.trim())) markError(phoneEl);
    if (!categoryEl.value) markError(categoryEl);
    if (modeInput.value === 'reservation' && !dateEl.value) markError(dateEl);
    if (!titleEl.value.trim()) markError(titleEl);
    if (!contentEl.value.trim()) markError(contentEl);

    var consentError = document.getElementById('consentErrorMsg');
    if (!agreeGeneral.checked || !agreeSensitive.checked) {
      valid = false;
      if (consentError) consentError.style.display = 'block';
    } else if (consentError) {
      consentError.style.display = 'none';
    }

    if (!valid) {
      var firstErr = form.querySelector('.has-error .form-control');
      if (firstErr) firstErr.focus();
      return;
    }

    var modeLabel = modeInput.value === 'reservation' ? '온라인 진료예약' : 'Meet the expert (수술상담)';
    var scheduleLine = modeInput.value === 'reservation'
      ? '<div><strong>희망 일시:</strong> ' + dateEl.value + ' ' + (timeEl.value || '') + '</div>'
      : '';

    if (modalSummary) {
      modalSummary.innerHTML =
        '<div><strong>접수 구분:</strong> ' + modeLabel + '</div>' +
        '<div><strong>성함 / 연락처:</strong> ' + escapeHtml(nameEl.value.trim()) + ' (' + escapeHtml(phoneEl.value.trim()) + ')</div>' +
        '<div><strong>진료 분야:</strong> ' + escapeHtml(categoryEl.options[categoryEl.selectedIndex].text) + '</div>' +
        scheduleLine +
        '<div><strong>동의 확인:</strong> 일반 개인정보 동의(필수) · 민감정보(건강정보) 별도 동의(필수) 완료</div>';
    }

    openModal();
    form.reset();
    setMode(modeInput.value);
  });
}

/* 11. KakaoTalk Quick Info Modal */
function initKakaoModal() {
  var triggers = document.querySelectorAll('[data-kakao-modal]');
  var modal = document.getElementById('kakaoModal');
  if (!modal || !triggers.length) return;

  var closeBtns = modal.querySelectorAll('[data-kakao-close]');
  var copyBtn = modal.querySelector('[data-copy-kakao]');

  triggers.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('is-open');
      document.body.classList.add('is-locked');
    });
  });

  function closeKakao() {
    modal.classList.remove('is-open');
    document.body.classList.remove('is-locked');
  }

  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', closeKakao);
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeKakao();
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard) {
        navigator.clipboard.writeText('gnjurology').then(function () {
          copyBtn.textContent = '복사 완료 (gnjurology)';
          setTimeout(function () {
            copyBtn.textContent = '카카오톡 ID 복사';
          }, 2000);
        });
      }
    });
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
