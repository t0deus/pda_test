const locations = {
  plant: {
    code: "объект 04",
    title: "ЧАЭС",
    text: "Центральная точка зоны. Руины четвертого энергоблока и новый защитный конфайнмент остаются главным символом катастрофы.",
    danger: "92%",
    signal: "фон высокий",
    access: "закрыт",
    note: "Рекомендуется обходить сектор без защитного снаряжения.",
    task: "Оперативная сводка: сектор ЧАЭС под наблюдением"
  },
  pripyat: {
    code: "сектор п-01",
    title: "Припять",
    text: "Заброшенный город атомщиков: пустые проспекты, дворцы культуры, школы и колесо обозрения, которое стало знаком внезапно оборванной жизни.",
    danger: "76%",
    signal: "эхо города",
    access: "ограничен",
    note: "Внутри много закрытых дворов, стекла и провалов перекрытий.",
    task: "Оперативная сводка: Припять отмечена как тихий сектор"
  },
  forest: {
    code: "пятно р-17",
    title: "Рыжий лес",
    text: "Участок, принявший один из самых сильных радиоактивных следов после аварии. В легендах зоны это место звучит как предупреждение.",
    danger: "88%",
    signal: "почва шумит",
    access: "опасен",
    note: "Дозиметр здесь не успокаивается даже на открытой дороге.",
    task: "Оперативная сводка: Рыжий лес дает высокий фон"
  },
  cordon: {
    code: "рубеж к-12",
    title: "Кордон",
    text: "Южная граница, где начинаются нелегальные тропы, военные посты и первые разговоры о том, что внутри все иначе.",
    danger: "45%",
    signal: "слабый фон",
    access: "частичный",
    note: "Самый понятный вход в зону, но патрули ходят чаще обычного.",
    task: "Оперативная сводка: Кордон пригоден для входа"
  },
  bar: {
    code: "узел б-06",
    title: "Бар",
    text: "Относительно безопасная точка обмена новостями, припасами и слухами. Здесь усталые люди на время перестают быть мишенями.",
    danger: "39%",
    signal: "стабильно",
    access: "условный",
    note: "Лучшее место, чтобы переждать выброс и сверить слухи с картой.",
    task: "Оперативная сводка: Бар держит устойчивую связь"
  },
  swamps: {
    code: "низина б-22",
    title: "Болота",
    text: "Тяжелая, вязкая территория с плохой видимостью. Вода скрывает старые дороги, а туман делает расстояние обманчивым.",
    danger: "67%",
    signal: "помехи",
    access: "трудный",
    note: "Маршрут меняется после дождя, а вода скрывает старую технику.",
    task: "Оперативная сводка: болота дают сильные помехи"
  }
};

const records = {
  test: {
    state: "record damaged",
    title: "Испытание турбогенератора",
    text: "Ночная проверка режима выбега турбины привела к неустойчивому состоянию реактора РБМК-1000. После теплового разгона активная зона была разрушена, начался выброс радиоактивных материалов."
  },
  evacuation: {
    state: "partial transcript",
    title: "Эвакуация Припяти",
    text: "27 апреля 1986 года жителей Припяти вывезли автобусными колоннами. Людям сообщили взять документы и минимум вещей, но временная эвакуация стала началом долгого отсутствия дома."
  },
  liquidation: {
    state: "archive fragment",
    title: "Ликвидация последствий",
    text: "Пожарные, военные, инженеры, шахтеры и строители работали в условиях высокого радиационного риска. Их задача была остановить распространение загрязнения и закрыть разрушенный энергоблок."
  },
  exclusion: {
    state: "classified sector",
    title: "Зона отчуждения",
    text: "После аварии вокруг станции создали закрытую территорию. Заброшенные поселки, техника, леса и дороги стали частью большого периметра, где обычная жизнь сменилась режимом наблюдения."
  }
};

const factions = {
  stalkers: {
    status: "нейтрально",
    title: "Сталкеры",
    text: "Одиночки, проводники и охотники за редкими находками. Живут слухами, тайниками и осторожностью.",
    threat: "42%",
    zone: "кордон",
    image: "assets/faction-stalkers.png",
    alt: "Сталкеры в зоне"
  },
  bandits: {
    status: "враждебно",
    title: "Бандиты",
    text: "Грабят слабых, контролируют нелегальные маршруты и продают все, что удается вынести из опасных мест.",
    threat: "71%",
    zone: "склады",
    image: "assets/faction-bandits.png",
    alt: "Бандиты у склада"
  },
  military: {
    status: "контроль",
    title: "Военные",
    text: "Охраняют дороги, патрулируют периметр и перекрывают доступ туда, где каждый шаг может закончиться задержанием.",
    threat: "68%",
    zone: "периметр",
    image: "assets/faction-military.png",
    alt: "Военный блокпост"
  },
  freedom: {
    status: "переменно",
    title: "Свобода",
    text: "Сторонники открытой зоны. Считают, что ее нельзя запереть навсегда, и хотят изучать без диктата и запретов.",
    threat: "54%",
    zone: "север",
    image: "assets/faction-freedom.png",
    alt: "Лагерь Свободы"
  },
  duty: {
    status: "строго",
    title: "Долг",
    text: "Дисциплинированная сила, которая считает зону угрозой и стремится сдерживать ее любой ценой.",
    threat: "64%",
    zone: "бар",
    image: "assets/faction-duty.png",
    alt: "Бойцы Долга"
  },
  monolith: {
    status: "неизвестно",
    title: "Монолит",
    text: "Замкнутая группа у центра зоны. Их мотивы туманны, а присутствие ощущается как предупреждение.",
    threat: "96%",
    zone: "центр",
    image: "assets/faction-monolith.png",
    alt: "Монолит в темном зале"
  }
};

const tabTasks = {
  map: "Оперативная сводка: сектор ЧАЭС под наблюдением",
  archive: "Архивный статус: часть записей повреждена",
  relations: "Разведсводка: фракционные данные обновлены",
  anomalies: "Полевой справочник: активность аномалий нестабильна",
  gear: "Инвентарный статус: часть изображений утрачена",
  radio: "Радиоканал: частота 104.7 принимает обрывки связи"
};

const radioMessages = [
  "...сектор Р-17 закрыт, фон растет...",
  "...группа не вышла на связь после перехода через лес...",
  "...передайте бару: маршрут через болота нестабилен...",
  "...на частоте слышны посторонние сигналы...",
  "...у северного периметра замечено движение...",
  "...архивный файл поврежден, повторите запрос..."
];

const radiationLayer = document.querySelector("#radiationLayer");
const pdaScreen = document.querySelector(".pda-screen");
const powerButton = document.querySelector("#powerButton");
const screenOff = document.querySelector("#screenOff");
const screenBoot = document.querySelector("#screenBoot");
const screenRadiation = document.querySelector("#screenRadiation");
const screenCorruption = document.querySelector("#screenCorruption");
const soundToggle = document.querySelector("#soundToggle");
const soundText = soundToggle.querySelector(".sound-text");
const pdaTime = document.querySelector("#pdaTime");
const radiationPill = document.querySelector("#radiationPill");
const statusRadiation = document.querySelector("#statusRadiation");
const signalPill = document.querySelector("#signalPill");
const statusSignal = document.querySelector("#statusSignal");
const activeTask = document.querySelector("#activeTask");
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const shortcutButtons = document.querySelectorAll("[data-tab-shortcut]");
const mapPoints = document.querySelectorAll(".map-point");
const locationCode = document.querySelector("#locationCode");
const locationSignal = document.querySelector("#locationSignal");
const locationTitle = document.querySelector("#locationTitle");
const locationText = document.querySelector("#locationText");
const locationDanger = document.querySelector("#locationDanger");
const locationAccess = document.querySelector("#locationAccess");
const locationNote = document.querySelector("#locationNote");
const meter = document.querySelector(".meter span");
const fileButtons = document.querySelectorAll(".file-button");
const recordState = document.querySelector("#recordState");
const recordTitle = document.querySelector("#recordTitle");
const recordText = document.querySelector("#recordText");
const relationButtons = document.querySelectorAll(".relation-button");
const factionImage = document.querySelector("#factionImage");
const factionStatus = document.querySelector("#factionStatus");
const factionTitle = document.querySelector("#factionTitle");
const factionText = document.querySelector("#factionText");
const factionThreat = document.querySelector("#factionThreat");
const factionZone = document.querySelector("#factionZone");
const radioLog = document.querySelector("#radioLog");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const AudioContextClass = window.AudioContext || window.webkitAudioContext;

let audioContext;
let audioMaster;
let ambientBus;
let soundEnabled = false;
let radioIndex = 3;
let isPoweredOn = false;
let isBooting = false;
let radiationStarted = false;
let radiationLevel = 0.42;
let signalLevel = 31;

window.addEventListener("load", () => {
  updateClock();
  document.body.classList.add("pda-is-off");
});

window.setInterval(updateClock, 1000);
window.setInterval(updateTelemetry, 1800);
window.setInterval(addRadioMessage, 24000);

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

shortcutButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tabShortcut));
});

powerButton.addEventListener("click", () => {
  if (isBooting) {
    return;
  }

  if (isPoweredOn) {
    powerOffPda();
    return;
  }

  startBootSequence();
});

mapPoints.forEach((point) => {
  point.addEventListener("click", () => {
    if (!isPoweredOn) {
      return;
    }

    const nextLocation = locations[point.dataset.location];

    mapPoints.forEach((item) => item.classList.remove("active"));
    point.classList.add("active");

    locationCode.textContent = nextLocation.code;
    locationSignal.textContent = nextLocation.signal;
    locationTitle.textContent = nextLocation.title;
    locationText.textContent = nextLocation.text;
    locationDanger.textContent = nextLocation.danger;
    locationAccess.textContent = nextLocation.access;
    locationNote.textContent = nextLocation.note;
    activeTask.textContent = nextLocation.task;
    meter.style.setProperty("--value", nextLocation.danger);
    playMapTick();
  });
});

fileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isPoweredOn) {
      return;
    }

    const record = records[button.dataset.record];

    fileButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    recordState.textContent = record.state;
    recordTitle.textContent = record.title;
    recordText.textContent = record.text;
    triggerDataCorruption();
    playMapTick();
  });
});

relationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isPoweredOn) {
      return;
    }

    const faction = factions[button.dataset.faction];

    relationButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    factionStatus.textContent = faction.status;
    factionTitle.textContent = faction.title;
    factionText.textContent = faction.text;
    factionThreat.textContent = faction.threat;
    factionZone.textContent = faction.zone;
    factionImage.src = faction.image;
    factionImage.alt = faction.alt;
    playMapTick();
  });
});

soundToggle.addEventListener("click", async () => {
  if (!isPoweredOn) {
    return;
  }

  if (!AudioContextClass) {
    soundText.textContent = "Нет";
    soundToggle.setAttribute("aria-label", "Звук не поддерживается");
    return;
  }

  if (!audioContext) {
    createAudioGraph();
  }

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  soundEnabled = !soundEnabled;
  setSoundEnabled(soundEnabled);
});

function prepareStartupAudio() {
  if (!AudioContextClass) {
    return;
  }

  if (!audioContext) {
    createAudioGraph();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  if (!soundEnabled) {
    soundEnabled = true;
    setSoundEnabled(true, { tick: false });
  }
}

function startBootSequence() {
  isBooting = true;
  prepareStartupAudio();
  document.body.classList.remove("pda-is-off");
  document.body.classList.add("pda-is-booting");
  screenOff.classList.remove("active");
  screenBoot.classList.add("active");
  playStartupSound();
  playBootSequenceSound();

  window.setTimeout(() => {
    isBooting = false;
    isPoweredOn = true;
    document.body.classList.remove("pda-is-booting");
    document.body.classList.add("pda-is-on");
    screenBoot.classList.remove("active");
    triggerDataCorruption();
    updateTelemetry(true);

    if (!prefersReducedMotion && !radiationStarted) {
      radiationStarted = true;
      window.setTimeout(scheduleRadiationEvent, 2600);
    }
  }, 2800);
}

function powerOffPda() {
  isPoweredOn = false;
  isBooting = false;
  document.body.classList.remove("pda-is-on", "pda-is-booting");
  document.body.classList.add("pda-is-off");
  screenBoot.classList.remove("active");
  screenOff.classList.add("active");
  screenRadiation.classList.remove("is-active");
  screenCorruption.classList.remove("is-active");

  if (soundEnabled && audioContext) {
    soundEnabled = false;
    setSoundEnabled(false);
  }
}

function setActiveTab(tabName) {
  if (!isPoweredOn) {
    return;
  }

  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tab-${tabName}`);
  });

  activeTask.textContent = tabTasks[tabName] || tabTasks.map;
  triggerDataCorruption();
  playMapTick();

  if (tabName === "radio") {
    addRadioMessage();
  }
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  pdaTime.textContent = `${hours}:${minutes}`;
}

function updateTelemetry(force = false) {
  if (!isPoweredOn && !force) {
    return;
  }

  radiationLevel = clamp(radiationLevel + randomBetween(-0.045, 0.065), 0.26, 1.08);
  signalLevel = clamp(signalLevel + randomBetween(-3.8, 3.2), 18, 48);

  if (Math.random() > 0.88) {
    radiationLevel = clamp(radiationLevel + randomBetween(0.08, 0.16), 0.26, 1.18);
    signalLevel = clamp(signalLevel - randomBetween(2.5, 7.5), 12, 48);
  }

  if (Math.random() > 0.94) {
    signalLevel = clamp(signalLevel + randomBetween(4, 9), 12, 53);
  }

  statusRadiation.textContent = radiationLevel.toFixed(2);
  statusSignal.textContent = `${Math.round(signalLevel)}%`;
  setPillState(radiationPill, radiationLevel >= 0.92 ? "danger" : radiationLevel >= 0.72 ? "warning" : "normal");
  setPillState(signalPill, signalLevel <= 22 ? "danger" : signalLevel <= 30 ? "warning" : "normal");
}

function addRadioMessage() {
  if (!isPoweredOn) {
    return;
  }

  const time = pdaTime.textContent;
  const line = document.createElement("p");
  const marker = document.createElement("span");

  marker.textContent = time;
  line.append(marker, ` ${radioMessages[radioIndex % radioMessages.length]}`);
  radioLog.prepend(line);
  radioIndex += 1;

  while (radioLog.children.length > 8) {
    radioLog.lastElementChild.remove();
  }

  if (soundEnabled) {
    playRadioBlip();
  }
}

function scheduleRadiationEvent() {
  const delay = randomBetween(7000, 18000);

  window.setTimeout(() => {
    triggerRadiationEvent();
    scheduleRadiationEvent();
  }, delay);
}

function triggerRadiationEvent() {
  if (!isPoweredOn) {
    return;
  }

  const pulseX = `${randomBetween(18, 82)}%`;
  const pulseY = `${randomBetween(14, 86)}%`;
  const scanY = `${randomBetween(18, 82)}%`;
  const speckCount = Math.round(randomBetween(3, 8));

  radiationLayer.style.setProperty("--pulse-x", pulseX);
  radiationLayer.style.setProperty("--pulse-y", pulseY);
  radiationLayer.style.setProperty("--scan-y", scanY);
  radiationLayer.classList.remove("is-pulsing", "is-sweeping");
  void radiationLayer.offsetWidth;
  radiationLayer.classList.add("is-pulsing");
  triggerScreenRadiation();
  playRadiationSound();

  if (Math.random() > 0.42) {
    radiationLayer.classList.add("is-sweeping");
  }

  for (let index = 0; index < speckCount; index += 1) {
    window.setTimeout(createRadiationSpeck, randomBetween(0, 480));
  }

  window.setTimeout(() => {
    radiationLayer.classList.remove("is-pulsing", "is-sweeping");
  }, 1250);
}

function triggerScreenRadiation() {
  if (prefersReducedMotion) {
    return;
  }

  screenRadiation.classList.remove("is-active");
  void screenRadiation.offsetWidth;
  screenRadiation.classList.add("is-active");

  window.setTimeout(() => {
    screenRadiation.classList.remove("is-active");
  }, 950);
}

function triggerDataCorruption() {
  if (!isPoweredOn || prefersReducedMotion) {
    return;
  }

  screenCorruption.classList.remove("is-active");
  void screenCorruption.offsetWidth;
  screenCorruption.classList.add("is-active");

  window.setTimeout(() => {
    screenCorruption.classList.remove("is-active");
  }, 620);
}

function createRadiationSpeck() {
  const speck = document.createElement("span");

  speck.className = "rad-speck";
  speck.style.setProperty("--x", `${randomBetween(4, 96)}%`);
  speck.style.setProperty("--y", `${randomBetween(6, 94)}%`);
  speck.style.setProperty("--size", `${randomBetween(2, 6)}px`);
  speck.style.setProperty("--life", `${randomBetween(620, 1350)}ms`);
  speck.style.setProperty("--drift-x", `${randomBetween(-24, 24)}px`);
  speck.style.setProperty("--drift-y", `${randomBetween(-18, 18)}px`);

  radiationLayer.append(speck);
  speck.addEventListener("animationend", () => speck.remove(), { once: true });
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setPillState(element, state) {
  element.classList.toggle("is-warning", state === "warning");
  element.classList.toggle("is-danger", state === "danger");
}

function createAudioGraph() {
  audioContext = new AudioContextClass();
  audioMaster = audioContext.createGain();
  ambientBus = audioContext.createGain();

  audioMaster.gain.value = 0.0001;
  ambientBus.gain.value = 0.32;
  ambientBus.connect(audioMaster);
  audioMaster.connect(audioContext.destination);

  createDrone(38, "sine", 0.13, -8);
  createDrone(56, "triangle", 0.055, 5);
  createDrone(91, "sine", 0.035, -14);
  createAmbientNoise();

  const lfo = audioContext.createOscillator();
  const lfoGain = audioContext.createGain();
  lfo.type = "sine";
  lfo.frequency.value = 0.035;
  lfoGain.gain.value = 0.08;
  lfo.connect(lfoGain);
  lfoGain.connect(ambientBus.gain);
  lfo.start();
}

function createDrone(frequency, type, gainValue, detune) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.value = frequency;
  oscillator.detune.value = detune;
  gain.gain.value = gainValue;

  oscillator.connect(gain);
  gain.connect(ambientBus);
  oscillator.start();
}

function createAmbientNoise() {
  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();

  source.buffer = createNoiseBuffer(3);
  source.loop = true;
  filter.type = "lowpass";
  filter.frequency.value = 520;
  filter.Q.value = 0.7;
  gain.gain.value = 0.045;

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ambientBus);
  source.start();
}

function setSoundEnabled(enabled, options = {}) {
  const now = audioContext.currentTime;

  audioMaster.gain.cancelScheduledValues(now);
  audioMaster.gain.setTargetAtTime(enabled ? 0.58 : 0.0001, now, 0.42);
  soundToggle.classList.toggle("is-on", enabled);
  soundToggle.setAttribute("aria-pressed", String(enabled));
  soundToggle.setAttribute("aria-label", enabled ? "Выключить звук" : "Включить звук");
  soundText.textContent = enabled ? "Вкл" : "Выкл";

  if (enabled && options.tick !== false) {
    playMapTick();
  }
}

function playStartupSound() {
  if (!soundEnabled || !audioContext) {
    return;
  }

  const now = audioContext.currentTime;

  createBootNoiseBurst(now + 0.01, 0.18, 520, 0.07);
  createBootTone(now + 0.02, 96, 0.26, 0.16, "sawtooth", -9);
  createBootTone(now + 0.14, 620, 0.08, 0.045, "square", 4);
  createBootTone(now + 0.25, 880, 0.07, 0.04, "square", -6);
}

function playBootSequenceSound() {
  if (!soundEnabled || !audioContext) {
    return;
  }

  const now = audioContext.currentTime;
  const steps = [
    [0.36, 410, 0.08],
    [0.76, 520, 0.07],
    [1.18, 690, 0.08],
    [1.66, 350, 0.11],
    [2.18, 920, 0.1]
  ];

  createBootNoiseBurst(now + 0.48, 0.32, 1400, 0.028);
  createBootNoiseBurst(now + 1.38, 0.26, 2400, 0.024);

  steps.forEach(([offset, frequency, duration], index) => {
    createBootTone(now + offset, frequency, duration, index === steps.length - 1 ? 0.058 : 0.044, "square", index * 3);
  });
}

function createBootTone(at, frequency, duration, gainValue, type, detune = 0) {
  const oscillator = audioContext.createOscillator();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const targetFrequency = frequency < 140 ? frequency * 0.64 : frequency * 0.82;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, at);
  oscillator.frequency.exponentialRampToValueAtTime(targetFrequency, at + duration * 0.9);
  oscillator.detune.value = detune;
  filter.type = frequency < 140 ? "lowpass" : "bandpass";
  filter.frequency.value = frequency < 140 ? 420 : frequency * 1.8;
  filter.Q.value = frequency < 140 ? 0.8 : 7;
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(gainValue, at + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(audioMaster);
  oscillator.start(at);
  oscillator.stop(at + duration + 0.03);
}

function createBootNoiseBurst(at, duration, frequency, gainValue) {
  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();

  source.buffer = createNoiseBuffer(duration);
  filter.type = "bandpass";
  filter.frequency.value = frequency;
  filter.Q.value = 1.6;
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(gainValue, at + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioMaster);
  source.start(at);
  source.stop(at + duration + 0.02);
}

function playRadiationSound() {
  if (!soundEnabled || !audioContext) {
    return;
  }

  const now = audioContext.currentTime;
  const hiss = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const clickCount = Math.round(randomBetween(4, 9));

  hiss.buffer = createNoiseBuffer(0.32);
  filter.type = "bandpass";
  filter.frequency.value = 2600;
  filter.Q.value = 3.2;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.1, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);

  hiss.connect(filter);
  filter.connect(gain);
  gain.connect(audioMaster);
  hiss.start(now);
  hiss.stop(now + 0.34);

  for (let index = 0; index < clickCount; index += 1) {
    createGeigerClick(now + randomBetween(0.01, 0.72));
  }
}

function createGeigerClick(at) {
  const oscillator = audioContext.createOscillator();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();

  oscillator.type = "square";
  oscillator.frequency.value = randomBetween(1100, 3600);
  filter.type = "bandpass";
  filter.frequency.value = oscillator.frequency.value;
  filter.Q.value = 6;
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(randomBetween(0.06, 0.14), at + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + randomBetween(0.025, 0.055));

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(audioMaster);
  oscillator.start(at);
  oscillator.stop(at + 0.07);
}

function playMapTick() {
  if (!soundEnabled || !audioContext) {
    return;
  }

  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(420, now);
  oscillator.frequency.exponentialRampToValueAtTime(180, now + 0.08);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.045, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);

  oscillator.connect(gain);
  gain.connect(audioMaster);
  oscillator.start(now);
  oscillator.stop(now + 0.13);
}

function playRadioBlip() {
  if (!soundEnabled || !audioContext) {
    return;
  }

  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(760, now);
  oscillator.frequency.exponentialRampToValueAtTime(260, now + 0.18);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.055, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

  oscillator.connect(gain);
  gain.connect(audioMaster);
  oscillator.start(now);
  oscillator.stop(now + 0.25);
}

function createNoiseBuffer(duration) {
  const sampleRate = audioContext.sampleRate;
  const buffer = audioContext.createBuffer(1, Math.ceil(sampleRate * duration), sampleRate);
  const data = buffer.getChannelData(0);

  for (let index = 0; index < data.length; index += 1) {
    data[index] = Math.random() * 2 - 1;
  }

  return buffer;
}
