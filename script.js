import Slider from "./slider.js";

const sliderInit = new Slider(
  "[data-lista-navegacao]",
  "[data-container-pai]",
  "[data-container-ul-lista]",
  "[data-proximo]",
  "[data-anterior]"
);
sliderInit.init();
