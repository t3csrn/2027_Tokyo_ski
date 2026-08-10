document.addEventListener('DOMContentLoaded', () => {
  initSnowflakes();
  initCountdown();
  initNavigation();
  initDateTabs();
  renderDailyItinerary("2027-01-24");
  initSkiGuideTab();
  initChecklistTab();
  initTokyoTab();
});

function initSnowflakes() {
  const container = document.getElementById('snowflake-container');
  if (!container) return;
  container.innerHTML = '';

  const flakeCount = 22; // 數量適中不卡頓

  for (let i = 0; i < flakeCount; i++) {
    const flake = document.createElement('div');
    flake.className = 'snowflake';

    const size = (Math.random() * 5 + 4) + 'px'; // 4px ~ 9px 精緻小雪粒
    const left = Math.random() * 100 + 'vw';
    const duration = (Math.random() * 6 + 8) + 's'; // 8s ~ 14s 慢速飄落
    
    // 🔥 關鍵修正：負數 animationDelay 讓動畫在載入時就處於播放中狀態
    // 徹底解決雪花卡在頂部等待飄落的狀況！
    const negativeDelay = - (Math.random() * 10) + 's'; 
    const opacity = Math.random() * 0.6 + 0.4;

    flake.style.width = size;
    flake.style.height = size;
    flake.style.left = left;
    flake.style.animationDuration = `${duration}, 3.5s`;
    flake.style.animationDelay = `${negativeDelay}, ${negativeDelay}`;
    flake.style.opacity = opacity;

    container.appendChild(flake);
  }
}

function initCountdown() {
  const targetDate = new Date('2027-01-24T18:00:00+09:00').getTime();
  
  function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById('countdown-timer').innerText = "旅程進行中！";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('countdown-timer').innerText = `${days} 天 ${hours} 時 ${mins} 分`;
  }

  updateTimer();
  setInterval(updateTimer, 60000);
}

function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      navBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function initDateTabs() {
  const bar = document.getElementById('date-tab-bar');
  bar.innerHTML = '';

  tripData.dates.forEach((d, idx) => {
    const btn = document.createElement('div');
    btn.className = `date-btn ${idx === 0 ? 'active' : ''}`;
    btn.setAttribute('data-date', d.key);
    btn.innerHTML = `<span class="week">${d.week}</span><span class="day">${d.dayNum}</span>`;

    btn.addEventListener('click', () => {
      document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDailyItinerary(d.key);
    });

    bar.appendChild(btn);
  });
}

function renderDailyItinerary(dateKey) {
  const data = tripData.itinerary[dateKey];
  const dateObj = tripData.dates.find(d => d.key === dateKey);

  document.getElementById('day-title').innerText = dateObj ? dateObj.title : '';
  document.getElementById('day-subtitle').innerText = data.subtitle || '';

  // 天氣 (純向量SVG，無Emoji)
  const weatherBox = document.getElementById('weather-card-container');
  if (data.weather) {
    weatherBox.innerHTML = `
      <div class="card" style="padding: 12px 16px; background: #eef6f9; border-color: #d0e3ed; display:flex; align-items:center; gap:8px;">
        <svg class="icon-svg-md" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg>
        <span style="font-size:0.85rem; color:#2c3e50;">預估氣溫：<strong>${data.weather.temp}</strong>｜雪況：<strong>${data.weather.condition}</strong></span>
      </div>
    `;
  } else {
    weatherBox.innerHTML = '';
  }

  // Ski Mode
  const skiBox = document.getElementById('ski-mode-container');
  if (data.isSkiDay && data.skiPlan) {
    skiBox.innerHTML = `
      <div class="card" style="background: linear-gradient(135deg, #eef6f9 0%, #fcf0f0 100%); border-color:#e2ebf1;">
        <h3 style="font-size:0.95rem; margin-bottom:8px; color:var(--primary); display:flex; align-items:center;">
          <svg class="icon-svg-md" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/></svg>
          SKI MODE 今日滑雪分組
        </h3>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.8rem;">
          <div style="background:#fff; padding:10px; border-radius:12px;"><strong>新手組：</strong>${data.skiPlan.beginner}</div>
          <div style="background:#fff; padding:10px; border-radius:12px;"><strong>老手組：</strong>${data.skiPlan.advanced}</div>
        </div>
      </div>
    `;
  } else {
    skiBox.innerHTML = '';
  }

  // Timeline
  const timelineEl = document.getElementById('day-timeline');
  timelineEl.innerHTML = '';
  if (data.timeline) {
    data.timeline.forEach(item => {
      const el = document.createElement('div');
      el.className = `timeline-item ${data.noTime ? 'no-time' : ''}`;
      
      const timeHtml = (data.noTime || !item.time) ? '' : `<div class="time">${item.time}</div>`;
      
      el.innerHTML = `
        ${timeHtml}
        <div class="title">${item.title}</div>
        <div class="desc">${item.desc}</div>
      `;
      timelineEl.appendChild(el);
    });
  }

  // 餐廳
  const restContainer = document.getElementById('restaurant-container');
  restContainer.innerHTML = '';
  if (data.restaurants && data.restaurants.length > 0) {
    let html = `<div class="card"><h2><svg class="icon-svg-md" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>美食推薦</h2><div class="restaurant-list">`;
    data.restaurants.forEach(r => {
      html += `
        <div class="restaurant-item">
          <h4>${r.name}</h4>
          <div><span class="tag">${r.type}</span></div>
          <p style="font-size:0.8rem; color:#64748b; margin-top:4px;">${r.note}</p>
        </div>
      `;
    });
    html += `</div></div>`;
    restContainer.innerHTML = html;
  }
}

function initSkiGuideTab() {
  const container = document.getElementById('ski-lunch-list');
  container.innerHTML = '';
  tripData.skiLunchList.forEach(r => {
    const el = document.createElement('div');
    el.className = 'restaurant-item';
    el.innerHTML = `
      <h4>${r.name} <span style="font-weight:normal; font-size:0.75rem; color:#64748b;">(${r.pos})</span></h4>
      <div><span class="tag">${r.type}</span><span class="tag">${r.price}</span></div>
      <p style="font-size:0.8rem; color:#64748b; margin-top:4px;">${r.note}</p>
    `;
    container.appendChild(el);
  });
}

function initChecklistTab() {
  renderDailyChecklist();
  renderPretripChecklistGrouped();

  const modal = document.getElementById('custom-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const cancelBtn = document.getElementById('modal-cancel-btn');
  const confirmBtn = document.getElementById('modal-confirm-btn');

  let pendingResetAction = null;

  // 開啟 Modal
  function showResetModal(title, desc, action) {
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    pendingResetAction = action;
    modal.classList.remove('hidden');
  }

  // 關閉 Modal
  function hideModal() {
    modal.classList.add('hidden');
    pendingResetAction = null;
  }

  cancelBtn.onclick = hideModal;

  confirmBtn.onclick = () => {
    if (pendingResetAction) {
      pendingResetAction();
    }
    hideModal();
  };

  // 每日滑雪清單重設
  const resetDailyBtn = document.getElementById('reset-daily-btn');
  if (resetDailyBtn) {
    resetDailyBtn.onclick = () => {
      showResetModal(
        '確定要重設每日裝備嗎？',
        '重設後今日已勾選的裝備將會全部清空。',
        () => {
          localStorage.removeItem('2027-daily-ski-checklist');
          renderDailyChecklist();
        }
      );
    };
  }

  // 行前準備清單重設
  const resetPretripBtn = document.getElementById('reset-pretrip-btn');
  if (resetPretripBtn) {
    resetPretripBtn.onclick = () => {
      showResetModal(
        '確定要重設行前準備嗎？',
        '重設後已勾選的行李備品將會全部清空。',
        () => {
          localStorage.removeItem('2027-pretrip-checklist');
          renderPretripChecklistGrouped();
        }
      );
    };
  }
}

function renderDailyChecklist() {
  const container = document.getElementById('daily-checklist-container');
  container.innerHTML = '';
  
  const storageKey = '2027-daily-ski-checklist';
  const savedState = JSON.parse(localStorage.getItem(storageKey) || '{}');

  let checkedCount = 0;
  const totalCount = tripData.dailyChecklistTemplate.length;

  tripData.dailyChecklistTemplate.forEach((itemText, idx) => {
    const itemId = `daily-${idx}`;
    const isChecked = !!savedState[itemId];
    if (isChecked) checkedCount++;

    const itemEl = document.createElement('div');
    itemEl.className = `check-item ${isChecked ? 'checked' : ''}`;
    itemEl.innerHTML = `
      <input type="checkbox" class="custom-checkbox" id="${itemId}" ${isChecked ? 'checked' : ''}>
      <label for="${itemId}">${itemText}</label>
    `;

    itemEl.querySelector('input').addEventListener('change', (e) => {
      savedState[itemId] = e.target.checked;
      localStorage.setItem(storageKey, JSON.stringify(savedState));
      renderDailyChecklist();
    });

    container.appendChild(itemEl);
  });

  const pct = Math.round((checkedCount / totalCount) * 100);
  document.getElementById('daily-progress-bar').style.width = `${pct}%`;
  document.getElementById('daily-progress-text').innerText = `${pct}% 完成 (${checkedCount}/${totalCount})`;

  const banner = document.getElementById('daily-complete-banner');
  if (checkedCount === totalCount && totalCount > 0) {
    banner.classList.remove('hidden');
  } else {
    banner.classList.add('hidden');
  }
}

// 渲染分區架構的行前準備清單
function renderPretripChecklistGrouped() {
  const container = document.getElementById('pretrip-checklist-container');
  container.innerHTML = '';

  const storageKey = '2027-pretrip-checklist';
  const savedState = JSON.parse(localStorage.getItem(storageKey) || '{}');

  let checkedCount = 0;
  let totalCount = 0;

  tripData.pretripChecklistGrouped.forEach(group => {
    const groupEl = document.createElement('div');
    groupEl.className = 'pretrip-cat-block';

    const titleEl = document.createElement('div');
    titleEl.className = 'pretrip-cat-title';
    titleEl.innerText = group.category;
    groupEl.appendChild(titleEl);

    group.items.forEach(item => {
      totalCount++;
      const isChecked = !!savedState[item.id];
      if (isChecked) checkedCount++;

      const itemEl = document.createElement('div');
      itemEl.className = `check-item ${isChecked ? 'checked' : ''}`;
      itemEl.innerHTML = `
        <input type="checkbox" class="custom-checkbox" id="${item.id}" ${isChecked ? 'checked' : ''}>
        <label for="${item.id}">${item.text}</label>
      `;

      itemEl.querySelector('input').addEventListener('change', (e) => {
        savedState[item.id] = e.target.checked;
        localStorage.setItem(storageKey, JSON.stringify(savedState));
        renderPretripChecklistGrouped();
      });

      groupEl.appendChild(itemEl);
    });

    container.appendChild(groupEl);
  });

  const pct = totalCount === 0 ? 0 : Math.round((checkedCount / totalCount) * 100);
  document.getElementById('pretrip-progress-bar').style.width = `${pct}%`;
  document.getElementById('pretrip-progress-text').innerText = `${pct}% 完成 (${checkedCount}/${totalCount})`;
}

/* 8. 東京頁籤渲染 (好吃好玩推薦 + 抱石館) */
function initTokyoTab() {
  // 渲染東京好吃好玩推薦列表
  const spotsContainer = document.getElementById('tokyo-spots-list');
  if (spotsContainer && tripData.tokyoSpots) {
    spotsContainer.innerHTML = '';
    tripData.tokyoSpots.forEach(spot => {
      const el = document.createElement('div');
      el.className = 'restaurant-item';
      el.innerHTML = `
        <h4>${spot.name} <span class="tag">${spot.area}</span></h4>
        <div style="margin-top:2px;"><span class="tag" style="background:#f1f5f9; color:#475569;">${spot.cat}</span></div>
        <p style="font-size:0.8rem; color:#64748b; margin-top:6px; line-height:1.4;">${spot.desc}</p>
      `;
      spotsContainer.appendChild(el);
    });
  }

  // 渲染抱石館列表
  const boulderingContainer = document.getElementById('bouldering-list');
  if (boulderingContainer && tripData.boulderingSites) {
    boulderingContainer.innerHTML = '';
    tripData.boulderingSites.forEach(b => {
      const el = document.createElement('div');
      el.className = 'restaurant-item';
      el.innerHTML = `
        <h4>${b.name} <span class="tag">${b.area}</span></h4>
        <p style="font-size:0.8rem; color:#64748b; margin-top:4px;">${b.feature}</p>
      `;
      boulderingContainer.appendChild(el);
    });
  }
}
