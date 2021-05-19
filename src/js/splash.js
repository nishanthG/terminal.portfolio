var text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum alias ratione velit aspernatur, accusantium iste recusandae praesentium ad, qui ipsam debitis fugiat est sunt distinctio voluptatem officia repellendus ipsa.";

  let pointer = 0;

function typeWriter() {
    if (pointer < text.length) {
        document.querySelector(".terminal-text p").innerHTML += text.charAt(pointer);
        pointer++;
        setTimeout(typeWriter, 50);
      }
  }

export function type() {
  typeWriter();
}
