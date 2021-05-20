import { typeWriter } from "./typewriter.js";
import { create } from "./create.js";

var warning = {
  enable: function () {
    var element = document.querySelector(".warning .alert");
    element.style.setProperty("display", "block");
  },
  disable: function () {
    var element = document.querySelector(".warning .alert");
    element.style.setProperty("display", "none");
  },
};

function initiate() {
  create("p", ".info", "text-initiate");

  typeWriter(
    "Initiating connection: SUCCESS.",
    document.querySelector(".info .text-initiate"),
    60
  );
}

function message() {
  create("p", ".info", "text-ipv4");

  typeWriter(
    "connecting to IPv4 Address: 192.168.67.246: DONE.",
    document.querySelector(".info .text-ipv4"),
    50
  );
}

export function type() {
  var terminal_text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum alias ratione velit aspernatur, accusantium iste recusandae praesentium ad, qui ipsam debitis fugiat est sunt distinctio voluptatem officia repellendus ipsa.";

  typeWriter(terminal_text, document.querySelector(".terminal-text p"), 50);
  
  setTimeout(initiate, 5000);
  setTimeout(message, 8000);
  setTimeout(warning.enable, 12000);
}
