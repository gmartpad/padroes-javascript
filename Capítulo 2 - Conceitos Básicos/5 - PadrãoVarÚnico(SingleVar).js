/*
    Usar uma declaração var no topo de suas funções é um padrão útil a se
    adotar. Ele tem os seguintes benefícios:

    - fornece um único lugar onde procurar todas as variáveis locais 
      necessárias à função;

    - previne erros lógicos quando uma variável é usada antes de ser definida
      (veja "Hoisting: o problema das declarações var espalhadas" na página
      29);

    - ajuda a lembrar de declarar as variáveis e, portanto, minimiza
      as globais;

    - significa menos código (tanto para escrever como para transmitir
      via cabo).

    O padrão var único se parece com isso:

*/

function func() {
    var a = 1,
        b = 2,
        sum = a + b,
        myobject = {},
        i,
        j;
    // corpo da função...
}

/*
    Você usa uma instrução var e declara múltiplas variáveis delimitadas
    por vírgulas. Também é uma boa prática inicializar a variável com um
    valor inicial no momento em que ela é declarada. Isso pode evitar
    erros lógicos (todas as variáveis declaradas, mas não inicializadas,
    são inicializadas com o valor undefined) e melhora a legibilidade
    do código. Quando você retornar ao código mais tarde, conseguirá ter uma
    ideia do uso pretendido de uma variável com base em seu valor inicial
    - por exemplo ela deveria ser um valor inteiro ou um objeto?

    Você também pode realizar alguma tarefa real no momento da declaração,
    como é o caso de sum = a + b no código anterior. Outro exemplo seria 
    quando se trabalha com referências DOM (Document Object Model, ou 
    Modelo de Objetos do Documento). Você pode atribuir referências DOM 
    e variáveis locais dentro da declaração única, como o código a seguir 
    demonstra:
*/

function updateElement() {
    var el = document.getElementById("result");
    style = el.style;

    // faça algo com el e style...
}