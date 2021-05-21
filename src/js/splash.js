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

export function allert() {
    warning.enable();
}