
const listaGaleria = document.querySelectorAll("div.gallery");
const listaBotoes = document.querySelectorAll('.botao');
let vigente = 1;
listaGaleria[vigente].style.display = "block";
listaBotoes[vigente].className += " on";

// proximo_slide(vigente);

for(let i=0; i < listaBotoes.length; i++ ){    
    let botao = listaBotoes[i];
    botao.onclick  =  function(){
         listaGaleria[vigente].style.display = "none";
         listaBotoes[vigente].className = listaBotoes[vigente].className.replace (" on","");
         
         listaGaleria[i].style.display = "block";
         botao.className += " on";
         vigente = i;
    }
}

// while()
// setTimeout(proximo_slide, 3000);


function proximo_slide(){
    let slide_atual;
    for(let i=0; i < listaGaleria.length; i++ ){ 
        if(listaGaleria[i].style.display === "block"){  
            slide_atual = i;
            listaGaleria[slide_atual].style.display = "none";
            listaBotoes[slide_atual].className  = listaBotoes[slide_atual].className.replace (" on","");
            slide_atual = slide_atual + 1;
            if(slide_atual >= listaBotoes.length) {slide_atual = 0;};               
            listaGaleria[slide_atual].style.display = "block";
            listaBotoes[slide_atual].className  +=" on" ;
            break;
        }
    };
}

function clicou(){
    for(let i=0; i < listaBotoes.length; i++ ){    
        let botao = listaBotoes[i];


    return true
     }
}