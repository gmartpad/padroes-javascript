/*
Todo ambiente JavaScript possui um objeto global acessível quando se utiliza a declaração this fora de qualquer função. Toda variável global que você cria torna-se
uma propriedade do objeto global. Em navegadores, por conveniência, existe uma
propriedade adicional do objeto global chamada window, que (normalmente) aponta
para o objeto global em si. O trecho de código a seguir mostra como criar e acessar
uma variável global em um ambiente de navegador:
*/

myglobal = "hello";             // antipadrão
console.log(myglobal);          // "hello"
console.log(window.myglobal);   // "hello"
console.log(window["myglobal"]);// "hello"
console.log(this.global);       // "hello"