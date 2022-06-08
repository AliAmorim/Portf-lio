function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i, ){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 160 * i)
    

  });
}
const titulo = document.querySelector('.descricao');
typeWrite(titulo);
