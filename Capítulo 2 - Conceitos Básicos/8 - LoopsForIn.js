/*
    Loops for-in são usados para iterar objetos que não sejam arrays. Realizar
    um loop for-in tambpem é chamado de enumeração.

    Tecnicamente, você também pode usar o loop for-in em arrays (porque no
    JavaScript arrays também são objetos), mas não é recomendado. Isso pode
    levar a erros lógicos caso o objeto array já tenha sido expandido com
    funcionalidades personalizadas. Além disso, a ordem (a sequência) de listagem
    das propriedades não está garantida em um loop for-in. Então, é preferível
    usar loops for normais com arrays e loops for-in com objetos.

    É importante usar o método hasOwnProperty() quando for iterar propriedades
    de um objeto para excluir propriedades que tenham sido herdadas por meio da
    cadeia de protótipos.

    Considere o seguinte exemplo:
*/

    // o objeto
    var man = {
        hands: 2,
        legs: 2,
        heads: 1
    };

    // em algum outro lugar no código
    // um método foi adicionado a todos os objetos
    if (typeof Object.getPrototypeOf.clone === "undefined") {
        Object.prototype.clone = function () {};
    }

/*
    Nesse exemplo nós temos um objeto simples chamado man, usando um objeto 
    literal. Em algum lugar antes ou depois da definição de man, o protótipo 
    de Object foi expandido com um método útil denominado clone(). A cadeia 
    de protótipos é "viva" (live), o que significa que todos os objetos 
    automaticamente ganham acesso ao novo método. Para evitar que o método clone()
    surja quando enumerarmos man, você precisará chamar hasOwnProperty() para 
    filtrar as propriedades de protótipo. Falhar em realizar a filtragem poderá
    resultar no surgimento da função clone(), que é um comportamento indesejável
    em quase todos os cenários:
*/

    // 1.
    // loop for-in
    for (var i in man) {
        if (man.hasOwnProperty(i)) { //filtro
            console.log(i, ":", man[i]);
        }
    }

    /*
    resultado no console
    hands : 2
    legs : 2
    heads : 1
    */

    // 2.
    // antipadrão:
    // loop for-in sem a verificação de hasOwnProperty()
    for (var i in man) {
        console.log(i, ":", man[i]);
    }

    /*
    resultado no console
    hands : 2
    legs : 2
    heads : 1
    clone : function() 
    */

/*
    Outro padrão for que utiliza hasOwnProperty() ocorre quando chamamos o método
    a partir de Object.prototype, assim:     
*/

    for (var i in man) {
        if (Object.prototype.hasOwnProperty.call(man, i)) { // filtro
            console.log(i, ":", man[i]);
        }
    }

/*
    O benefício disso é que você pode evitar colisões de nomeação no caso de o
    objeto man ter redefinido hasOwnProperty. Além disso, para evitar longas
    cadeias de propriedades que vão até Object, você pode usar uma variável local
    para "alocá-las":
*/

    var i,
    hasOwn = Object.prototype.hasOwnProperty;

    for (i in man) {
        if(hasOwn.call(man, i)) { // filtro
            console.log(i, ":", man[i]);
        }
    }

/*
    Uma variante de formatação (que não passa no JSLint) evita um par de chaves
    e coloca o if na mesma linha. O benefício disso é que a declaração do loop 
    pode ser lida como um pensamento completo ("para cada elemento que tenha
    uma propriedade particular X, faça algo com X"). Também existe menos endetação
    até chegar ao propósito principal do loop:
*/

    // Aviso: não passa no JSLint
    var i,
        hasOwn = Object.prototype.hasOwnProperty;
    for (i in man) if (hasOwn.call(man, i)) { // filtro
        console.log(i, ":", man[i]);
    }