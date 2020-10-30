/*
    Nos navegadores, o objeto global está acessível de qualquer parte do código
    por meio da propriedade window (a menos que você tenha feito algo especial
    e inesperado, como declarar uma variável local chamada window). Mas em outros
    ambientes essa propriedade de conveniência pode ser qualquer outro nome (ou 
    até mesmo não estar disponível para o programador). Se precisar acessar o
    objeto global sem ter de codificar o identificador window, você pode fazer
    o seguinte, em qualquer nível de escopo de função aninhada:
*/

var global = (function(){
    return this;    
}());

/*
    Dessa forma você poderá sempre obter o objeto global, já que dentro de 
    funções que foram invocadas como funções (ou seja, não como construtores
    usando o new), this sempre aponta para o objeto global. Na verdade, isso
    não é mais assim no modo estrito do ECMAScript 5, então você precisará adotar
    um modo diferente quando seu código estiver no modo estrito. Por exemplo,
    se estiver desenvolvendo uma biblioteca, você pode encapsular o código da sua
    biblioteca em uma função imediata (discutida no capítulo 4) e então,
    a partir do escopo global, passar uma referência a this como um parâmetro
    da sua função imediata.
*/