const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

const getRandomColor = () => {
  return `rgb(
    ${getRandomNumber(255)},
    ${getRandomNumber(255)},
    ${getRandomNumber(255)}
    )`;
};

const normalizeTime = time => {
  return time < 10 ? `0${time}` : time;
};

const normalizeDay = value => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[value];
};

class Clock {
  constructor(mountPoint = document.querySelector("body")) {
    this.mountPoint = mountPoint;
    this.activeMode = 0;
  }

  init() {
    this.render();
    this.attachEvents();
    this.setColors();
    this.renderTime();
    this.startTime();
    this.startStageInterva();
  }

  render() {
    this.conteiner = document.createElement("div");
    this.content = document.createElement("h1");
    this.conteiner.style.background = getRandomColor();

    this.conteiner.classList.add("clock");
    this.content.classList.add("clock__content");

    this.conteiner.appendChild(this.content);
    this.mountPoint.appendChild(this.conteiner);
  }

  setColors() {
    const color = getRandomColor();
    this.conteiner.style.background = color;
    this.content.style.color = color;
  }

  renderTime() {
    let content;
    switch (this.activeMode) {
      case 0:
        content = this.getFull();
        break;
      case 1:
        content = this.getShrot();
        break;
      case 2:
        content = this.getDate();
        break;
      default:
        content = this.getFull();
    }
    this.content.textContent = content;
  }

  getFull() {
    const currentDate = new Date();

    const h = normalizeTime(currentDate.getHours());
    const m = normalizeTime(currentDate.getMinutes());
    const s = normalizeTime(currentDate.getSeconds());

    return `${h}:${m}:${s}`;
  }

  getShrot() {
    const currentDate = new Date();

    const h = normalizeTime(currentDate.getHours());
    const m = normalizeTime(currentDate.getMinutes());

    return `${h}:${m}`;
  }

  getDate() {
    const currentDate = new Date();

    const date = normalizeTime(currentDate.getDate());
    const day = normalizeDay(currentDate.getDay());
    const year = normalizeTime(currentDate.getFullYear());

    return `${date}/${day}/${year}`;
  }

  startTime() {
    clearInterval(this.timeIntervalId);
    this.timeIntervalId = setInterval(() => this.renderTime(), 500);
  }

  startStageInterva() {
    setInterval(() => this.switchMode(), 5000);
  }

  attachEvents() {
    this.conteiner.addEventListener("click", () => {
      this.switchMode();
    });
  }

  increaseMode() {
    if (this.activeMode + 1 < 3) {
      this.activeMode++;
    } else {
      this.activeMode = 0;
    }
  }

  switchMode() {
    this.increaseMode();
    this.renderTime();
    this.setColors();
  }
}
