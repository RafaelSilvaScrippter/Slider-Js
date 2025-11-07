class Slider {
  constructor(
    listaNavegacao,
    containerPai,
    containerUl,
    dataProximo,
    dataAnterior
  ) {
    this.listaNavegacao = document.querySelectorAll(listaNavegacao);
    this.containerPai = document.querySelector(containerPai);
    this.containerUl = document.querySelector(containerUl);
    this.dataProximo = document.querySelector(dataProximo);
    this.dataAnterior = document.querySelector(dataAnterior);
    this.widthImg = document.querySelector("[data-img]");
    this.indexClicado = 1;
    this.innerWidthImg = this.widthImg.clientWidth;
    this.proximo = this.proximo.bind(this);
  }

  moverSlider() {
    console.dir(this.widthImg);
    this.containerUl.style.transform = `translateX(-${
      this.innerWidthImg * this.indexClicado + 220
    }px)`;
  }

  anterior() {}

  proximo() {
    if (this.indexClicado < this.listaNavegacao.length - 1) {
      this.indexClicado += 1;
      this.moverSlider();
    }
  }

  botaoClick() {
    this.dataProximo.addEventListener("click", this.proximo);
    this.dataAnterior.addEventListener("click", this.anterior());
  }

  init() {
    this.botaoClick();
  }
}

export default Slider;
