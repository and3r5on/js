const listaGaleria = document.querySelectorAll("div.gallery");
const listaBotoes = document.querySelectorAll('.botao');
let vigente = 0;

listaGaleria[vigente].style.display = "block";

for(let i=0; i < listaBotoes.length; i++ ){    
    const botao = listaBotoes[i];
    botao.onclick  = function(){
         listaGaleria[vigente].style.display = "none";
         listaGaleria[i].style.display = "block";
         vigente = i;
    }
}



// alert( 'to aqui palhaço' );

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("gallery");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }



// function carregaImagem(button, n){
//     const listaGaleria = document.querySelectorAll("div.gallery");
//     listaGaleria[n].style.display = "none";
// }

// var listaImagens = document.querySelectorAll('.imagem_carrocel');