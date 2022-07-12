window.onload = function () {
  chat.init();
  var phrase1 = new Audio("audios/phrase1.mp3");
  var phrase2 = new Audio("audios/phrase2.mp3");
  var phrase3 = new Audio("audios/phrase3.mp3");
  var phrase4 = new Audio("audios/phrase4.mp3");
  var phrase5 = new Audio("audios/phrase5.mp3");

  new WheelMenu("html", {
    size: 170,
    classes: "-dota-",
    pointerOffset: 8,
    borderWidth: 11,
    pointerSize: 80,
    Phrase: ["phrase1, phrase2, phrase3, phrase4, phrase5"],
    items: [
      "Приходить каждый день...",
      "Ты че лёг отдыхать...",
      "Work-Life-Balance...",
      "Твоя жизнь чья-то мечта...",
      "Чтобы перегореть...",
    ],
    onChange: function (value) {
      if (value === "Приходить каждый день...") {
        phrase2.pause();
        phrase2.currentTime = 0;
        phrase3.currentTime = 0;
        phrase4.currentTime = 0;
        phrase5.currentTime = 0;
        phrase3.pause();
        phrase4.pause();
        phrase5.pause();
        phrase1.play();
      } else if (value === "Ты че лёг отдыхать...") {
        phrase1.pause();
        phrase1.currentTime = 0;
        phrase3.currentTime = 0;
        phrase4.currentTime = 0;
        phrase5.currentTime = 0;
        phrase3.pause();
        phrase4.pause();
        phrase5.pause();
        phrase2.play();
      } else if (value === "Work-Life-Balance...") {
        phrase2.pause();
        phrase1.pause();
        phrase4.pause();
        phrase5.pause();
        phrase3.play();
        phrase2.currentTime = 0;
        phrase1.currentTime = 0;
        phrase4.currentTime = 0;
        phrase5.currentTime = 0;
      } else if (value === "Твоя жизнь чья-то мечта...") {
        phrase2.pause();
        phrase3.pause();
        phrase1.pause();
        phrase5.pause();
        phrase2.currentTime = 0;
        phrase3.currentTime = 0;
        phrase1.currentTime = 0;
        phrase5.currentTime = 0;
        phrase4.play();
      } else if (value === "Чтобы перегореть...") {
        phrase2.pause();
        phrase3.pause();
        phrase4.pause();
        phrase1.pause();
        phrase5.play();
        phrase2.currentTime = 0;
        phrase3.currentTime = 0;
        phrase4.currentTime = 0;
        phrase1.currentTime = 0;
      }
      chat.write("Aidar", value);
    },
  });
};
