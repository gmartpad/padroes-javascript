/*
    Nos loops for você itera arrays ou objetos semelhantes a arrays, como 
    objetos arguments e HTMLCollection. O padrão usual de um loop for se
    parece com isso:
*/

// loop subótimo
for (var i = 0; i < myarray.length; i++) {
    // faça algo com myarray[i]
}

/*
    Uma desvantagem desse padrão é que o comprimento do array é acessado
    a cada iteração do loop. Isso pode reduzir a velocidade de seu código, 
    especialmente quando myarray não é um array, mas um objeto 
    HTMLCollection.

    HTMLCollections são objetos retornados por métodos DOM, como:
*/
        - document.getElementsByName()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
/*
    Também existem algumas outras HTMLCollections que foram introduzidas
    antes da norma DOM e que ainda estão em uso atualmente. Essas incluem
    (entre outras):
*/
    document.images
        //Todos os elementos IMG da página

    document.links
        //Todos os elementos A

    document.forms
        //Todos os formulários

    document.forms[0].elements
        //Todos os campos no primeiro formulário da página

/*

    O problema das coleções é que elas são consultas "vivas" do documento
    subjacente (a página HTML). Isso significa que toda vez que você acessa 
    propriedade length de qualquer coleção, você está consultando o DOM 
    "ao vivo", e operações DOM são dispendiosas em geral.

    É por isso que um padrão melhor para loops for seria alocar o comprimento
    do array (ou coleção) no qual está iterando, como mostra o exemplo a seguir:    

*/

for (var i = 0, max = myarray.length; i < max; i++) {
    // faça algo com myarray[i]
}

/*
    Dessa forma, você recupera o valor da propriedade length apenas uma vez 
    e usa-o durante todo o loop.

    Alocar o comprimento ao iterar HTMLCollection é mais rápido em todos os 
    navegadores - algo entre duas vezes mais rápido (Safari 3) e 190 vezes 
    mais rápido (IE7). (Para mais detalhes, consulte JavaScript de Alto 
    Desempenho, de Nicholas Zakas [Novatec].)
    
    Repare que quando sua intenção é modificar explicitamente a coleção dentro
    do loop (por exemplo, adicionando mais elementos DOM), provavelmente você vai
    querer que a propriedade length seja atualizada, e não constante.

    Seguindo o padrão var único, você também pode retirar a declaração var do
    loop e deixá-lo assim:
*/

function looper() {
    var i = 0,
        max,
        myarray = [];

    // ...

    for (i = 0, max = myarray.length; i < max; i++) {
        // faça algo com myarray[i]
    }
}

/*
    Esse padrão tem o benefício da consistência, porque você se mantém no padrão
    var único. Uma desvantagem disso é que fica um pouco mais difícil copiar e
    colar loops inteiros enquanto se refatora o código. Por exemplo, se estiver 
    copiando o loop de uma função para outra, você precisa ter certeza de que
    também está levando i e max para a nova função (e provavelmente apagá-las
    da função original, caso não sejam mais necessárias lá).

    Um último ajuste no loop seria substituir i++ por uma dessas expressões:
*/

    i = i + 1
    i += 1
/*
    O JSLint pede que você faça isso; a razão é que ++ e -- promovem "truques em
    excesso". Se discorda disso, você pode definir a opção plusplus do JSLint para 
    false (ela é true por padrão). Mais adiante no livro, o último padrão é usado:
    i += 1.
    
    Duas variantes do padrão for introduzem algumas micro-otimizações porque:

    - usam uma variável a menos (max);
    - contam até 0, que costuma ser mais rápido, porque é mais eficiente comparar 
      a 0 do que ao comprimento do array ou a qualquer outro valor diferente de 0.

    O primeiro padrão modificado é:

*/

    var i, myarray = [];
    for (i = myarray.length; i--;){
        // faça algo com myarray[i]
    }

/*
    E o segundo usa o loop while:
*/

    var myarray = [],
        i = myarray.length;

    while(i--){
        // faça algo com myarray[i]
    }

/*
    Isso são micro-otimizações que serão percebidas apenas em operações de 
    desempenho crítico. Além disso, o JSLint reclamará do uso de i--.
*/