/*
    O JavaScript permite que você tenha multiplas declarações var em qualquer
    lugar dentro de uma função, e todas elas agirão como se as variáveis
    tivessem sido declaradas no topo da função. Esse comportamento é conhecido
    como hoisting (hasteamento). Isso pode levar a erros lógicos quando você
    usa uma variável e, então, declara-a mais adiante na função. No caso do
    JavaScript, contato que uma variável esteja no mesmo escopo (mesma função),
    ela é considerada declarada, mesmo quando ela é usada antes da declaração var.
    Dê uma olhada neste exemplo:
*/

// antipadrão
myname = "global";      // variável global
function func() {
    alert(myname)       // undefined
    var myname = "local";
    alert(myname);      // "local"  
}
func();

/*
    Nesse exemplo, você poderia esperar que o primeiro alert() exibisse "global"
    e o segundo exibisse "local". É uma expectativa razoável porque, no momento 
    do primeiro alert(), myname não havia sido declarada, portanto, a função 
    provavelmente deveria "enxergar" a variável mynam global. Mas não é assim
    que funciona. O primeiro alert() exibirá "undefined" porque myname é considerada
    declarada como uma variável local à função (apesar de a declaração vir depois).
    Todas as declarações de variável são hasteadas (hoisted) ao topo da função. 
    Portanto, para evitar esse tipo de confusão, é melhor declarar de antemão 
    todas as variáveis que você pretende usar.

    O trecho de código anterior comporta-se como se tivesse sido implementado dessa 
    maneira:
*/

myname = "global";      // variável global
function func() {
    var myname;         // o mesmo que -> var myname = undefined;
    alert(myname);      // "undefined"
    myname = "local";
    alert(myname);      // "local"  
}
func();