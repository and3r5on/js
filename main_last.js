
const listaGaleria = document.querySelectorAll("div.gallery");
const listaBotoes = document.querySelectorAll('.botao');
var vigente = 0;
listaGaleria[vigente].style.display = "block";
listaBotoes[vigente].className += " on";

// proximo_slide(vigente);

for(let i=0; i < listaBotoes.length; i++ ){    
    let botao = listaBotoes[i];
    botao.onclick  = function(){
         listaGaleria[vigente].style.display = "none";
         listaBotoes[vigente].className = listaBotoes[vigente].className.replace (" on","");
         
         listaGaleria[i].style.display = "block";
         botao.className += " on";
         vigente = i;
    }
}

function proximo_slide(vigente){
    listaGaleria[vigente].style.display = "none";
    listaBotoes[vigente].className  = listaBotoes[vigente].className.replace (" on","");
    vigente += 1;
    if(vigente => listaBotoes.length) {vigente = 0;};

    listaGaleria[vigente].style.display = "block";
    listaBotoes[vigente].className += " on";
    setTimeout(proximo_slide(vigente), 9000);
    }
    // }




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