// Inspired by James Bridle's brilliant welcome.js:
// https://github.com/stml/welcomejs
(function () {
  if (!window.console) {
    return;
  }

  var i = 0;

  if (!i) {
    setTimeout(function () {
      console.log("%c👋 Hiiiiiii!", "font: 3em sans-serif; line-height: 1.7;");
      console.log(
        "%cThanks for dropping by!",
        "font: 1.25 sans-serif; line-height: 1.7;"
      );
      console.log(
        "%cAs you are looking under the hood you may want to checkout out the repo on GitHub: https://github.com/tedlittledale/portfolio2021",
        "font: 1.25 sans-serif; line-height: 1.7;"
      );
    }, 1);
    i = 1;
  }
})();
