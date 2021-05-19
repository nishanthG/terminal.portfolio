var terminal_text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum alias ratione velit aspernatur, accusantium iste recusandae praesentium ad, qui ipsam debitis fugiat est sunt distinctio voluptatem officia repellendus ipsa.";

function typeWriter(text, element, speed) {
  let index = -1;

  (function go() {
    if (++index < text.length) {
      element.innerHTML = element.innerHTML + text.charAt(index);
      setTimeout(go, speed);
    }
  })();
}

var warning = {
  enable: function () {
    var element = document.querySelector(".warning .alert");

    element.style.setProperty("display", "block");
  },
};

export function type() {
  typeWriter(terminal_text, document.querySelector(".terminal-text p"), 50);
  // setTimeout(warning.enable, 5000);
}
