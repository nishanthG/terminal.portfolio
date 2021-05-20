export function typeWriter(text, element, speed) {
  let index = -1;

  (function go() {
    if (++index < text.length) {
      element.innerHTML = element.innerHTML + text.charAt(index);
      setTimeout(go, speed);
    }
  })();
}