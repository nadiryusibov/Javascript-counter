// start Javascript
var counter = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");

var count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    var styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "blue";
    }

    counter.textContent = count;
  });
});
