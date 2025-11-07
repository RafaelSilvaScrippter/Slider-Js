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
    this.widthImg = document.querySelectorAll("[data-img]");
    this.indexClicado = 0;
    this.innerWidthImg = this.widthImg[0].clientWidth;
    this.proximo = this.proximo.bind(this);
    this.anterior = this.anterior.bind(this);
    this.arrastarMouse = this.arrastarMouse.bind(this);
    this.moverSlideArrastando = this.moverSlideArrastando.bind(this);
    this.arrastarMouse = this.arrastarMouse.bind(this);
    this.soltar = this.soltar.bind(this);
    this.segurando = false;
  }

  navegarImg() {
    this.listaNavegacao.forEach((img, index) => {
      img.addEventListener("click", () => {
        this.indexClicado = index;
        this.moverSlider();
      });
    });
  }

  arrastarMouse(event) {
    console.log(event.x);
    this.containerUl.style.transform = `translateX(-${event.x}px)`;
  }

  moverSlideArrastando(event) {
    event.preventDefault();
    this.segurando = true;
    if (this.segurando) {
      this.containerUl.addEventListener("mousemove", this.arrastarMouse);
    }
  }

  imagemAoCentrolDaTela() {
    this.widthImg.forEach((img) => {
      img.classList.remove("ativo");
      this.widthImg[this.indexClicado].classList.add("ativo");
    });
  }

  addClasse() {
    console.log(this.widthImg[this.indexClicado].getBoundingClientRect().left);
  }

  moverSlider() {
    this.containerUl.style.transform = `translateX(-${
      this.innerWidthImg * this.indexClicado + 220
    }px)`;
    this.imagemAoCentrolDaTela();
  }

  anterior() {
    if (this.indexClicado > 0) {
      this.indexClicado -= 1;
      this.moverSlider();
    }
  }

  proximo() {
    if (this.indexClicado < this.listaNavegacao.length - 1) {
      this.indexClicado += 1;
      this.moverSlider();
    }
  }

  botaoClick() {
    this.dataProximo.addEventListener("click", this.proximo);
    this.dataAnterior.addEventListener("click", this.anterior);
  }

  dragSlide() {
    this.containerUl.addEventListener("mousedown", this.moverSlideArrastando);
    this.containerUl.addEventListener("mouseup", this.soltar);
    this.containerUl.addEventListener("mouseleave", this.soltar);
  }

  soltar() {
    this.segurando = false;
    this.containerUl.removeEventListener("mousemove", this.arrastarMouse);
  }

  init() {
    this.botaoClick();
    this.navegarImg();
    this.dragSlide();
  }
}

export default Slider;
