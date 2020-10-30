/*
    É surpreendentemente fácil criar globais involuntariamente por causa de duas
    características do JavaScript. Primeiro, você pode usar variáveis mesmo sem
    declará-las. E, segundo, o JavaScript possui a noção de globais implícitas,
    significando que qualquer variável não declarada torna-se uma propriedade
    do objeto global (acessível como qualquer outra variável global propriamente
    declarada). Considere o exemplo a seguir:
*/

function sum(x, y){
    // antipadrão: global implícita
    result = x + y;
    return result;
}

/*
    se quiser declarar variáveis que funcionem fora do escopo de declaração
    usa var (o livro é de 2010, entçao usa let no lugar de var que é sucesso)
*/

function sum(x, y){
    var result = x + y;
    return result;
}

/*
    Outro antipadrão que cria globais implícitas é encadear atribuições como parte de
    uma declaração var (ou let). No trecho de código a seguir, a é local, mas b 
    torna-se global, o que provavelmente não era a sua intenção:
*/

//antipadrão, não utilize
function foo() {
    var a = b = 0;
// ...
}

/*
    Se estiver se perguntando por que isso acontece é por causa da ordem de avaliação
    da direita para a esquerda. Primeiro, a expressão b = 0 é avaliada e, nesse caso, 
    b não está declarada. O valor de retorno dessa expressão é 0, que é atribuído à 
    nova variável local a, declarada com var. Em outras palavras, é como se você 
    tivesse digitado:
*/

var a = (b = 0);

/*
    Se você já havia declarado as variáveis, encadear atribuições está correto e 
    não cria globais inesperadas. 
    Exemplo:
*/

function foo() {
    var a, b;
    // ...
    a = b = 0; // ambas são locais
}

