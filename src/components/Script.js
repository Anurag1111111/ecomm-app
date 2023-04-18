const Script = () => {
  return (function () {
    const heart = document.getElementById("heart");
    heart.addEventListener("click", function (ss) {
      heart.classList.toggle("red");
    });
  })();
};

export default Script;
