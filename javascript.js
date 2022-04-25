(function() {

    window.Codificar = Codificar
    window.Decodificar = Decodificar
    window.Copiar = Copiar
    
    var entrada = document.querySelector('#entrada')
    var salida = document.querySelector('#salida')
    var info = document.querySelector('.sec-salida-info')
    var doll = document.querySelector('.imageDoll')
    var botonCopy = document.querySelector('.botonCopy')
   var response = document.querySelector('.response')
   var firstMessage = document.querySelector('.firstMessage')
   var secondMessage = document.querySelector('.secondMessage')

    function Copiar(){
      navigator.clipboard.writeText(salida.textContent) //aca copio el resultado de salida.textContent, una variante seria igualar salida.textContent con entrada.value asi se reemplazaria el valor automáticamente y en todo caso mostrar al user un mensaje de que el texto fue copiado 
      /*  entrada.value = salida.textContent */
    }
    
    function Coder(palabra) {
      var retorno = ''
      for (var letra of palabra) { //aqui cada letra de la o las palabras , se pasaran como parametro a Codificador()
       retorno += Codificador(letra);//retorno va a tener los valores de lo que devuelva Codificador(letra) 
      }
     return retorno; //hago un return de retorno para despues poder mostrar en pantalla el resultado (en la funcion Codificar())
    }
 
    function Codificador(letra) { //Codificador tendra como parametro cada letra, y evaluara si cumple el case, si cumple hará el return correspondiente, sino, devolverá lo mismo que le llego por parametro.

      switch(letra){
      case 'e' : return 'enter';
      case 'i' : return 'imes';
      case 'a' : return 'ai';
      case 'o' : return 'ober';
      case 'u' : return 'ufat';
      default  : return letra;
      }
    }
    function Codificar() {
      var textoIngresado = entrada.value //tomo el valor de entrada (lo que ingresa el usuario) y lo seteo a la variable textoIngresado
      if (textoIngresado === '') { 
        firstMessage.textContent = 'Primero debes ingresar una frase o texto para encriptar';
        secondMessage.textContent = '';
      } else {
        info.style.display = 'none' //cambio el display para que no se muestre y que si se vea lo que me llega por textContent, cuando textoIngresado no es string vacio
        doll.style.display = 'none' // este para que no se vea la imagen del muñeco
        botonCopy.style.display = 'grid'//este para que aparezca el boton de copiar
        response.style.display = 'flex'
        salida.textContent = Coder(textoIngresado) //a salida le hago una igualdad con coder para que se muestren en el sitio los resultados de las funciones Coder()  y Codificador(), el retorno de Coder será lo que se muestre
      }
    }
    
    function Decodificador(textoCodificado) { //se le entrega por parametro textoCodificado esto ocurre en la funcion Decodificar();
      var textoDecodificado = '' //crea una variable textoDecoficado que contendra los resultados de esta funcion
      for (var letra = 0; letra < textoCodificado.length;) {
        switch(textoCodificado[letra]) { //por cada letra del textoCodificado se hacen case y comprobaciones if
         
        case 'e':
         
        if (textoCodificado[letra + 4] === 'r') { textoDecodificado +=  'e'; letra += 5 }
          else { return false } // aprovechamos la info que tenemos ya que sabemos que si la letra final de la palabra es r , significa que es enter y por lo tanto es la letra e , la cual seteamos a textoDecodificado y por ultimo le damos a letra el valor 5 porque la palabra enter tiene 5 letras. Lo mismo se repite con cada una de las letras, letra al ser 5 ya pasará a comprobar esa posicion, y el programa continuara.
          break
        case 'i':

          if (textoCodificado[letra + 3] === 's') { textoDecodificado += 'i'; letra += 4 }
          else { return false }
          break
        case 'a':

          if (textoCodificado[letra + 1] === 'i') { textoDecodificado += 'a'; letra += 2 }
          else { return false }
          break
        case 'o':

           if (textoCodificado[letra + 3] === 'r') { textoDecodificado += 'o'; letra += 4 }
           else { return false }
          break
        case 'u':
           
           if (textoCodificado[letra + 3] === 't') { textoDecodificado += 'u'; letra += 4 }
           else { return false }
          break
        default:
            textoDecodificado += textoCodificado[letra++]
        }
      }
      return textoDecodificado
    }
    
    function Decodificar() {
 
      var textoCodificado = entrada.value //igualo el valor de entrada.value, ya que en este caso el user esta ingresando texto codificado 
    
      if (textoCodificado === '') {
        firstMessage.textContent = 'Primero debes ingresar una frase o texto encriptado';
        secondMessage.textContent = '';//que desaparezca segundo mensaje
      }

      else {
        let textoDecodificado = Decodificador(textoCodificado)//caso contrario hace una igualdad entre el resultado de decodificar() y textoDecodificado.
        if (textoDecodificado === false) {
        salida.textContent = 'Error: Debes colocar una frase o texto encriptado' 
        } else {
          salida.textContent = textoDecodificado //aqui igualo textoDecodificado con salida.textContent, para que se muestre al usuario los valores correspondientes.
        }
        info.style.display = 'none'//cambio el display para que no se muestre y que si se vea lo que me llega por textContent
        doll.style.display = 'none' // este para que no se vea la imagen del muñeco
        botonCopy.style.display = 'grid'//este para que aparezca el boton de copiar
        response.style.display = 'flex'//respuesta en flex
      }
    }
  
    }())
    