/*
    Existe uma pequena diferença entre globais definidas implicitamente e
    as definidas explicitamente - a diferença está na capacidade de indefinir
    essas variáveis usando-se o operador delete:

    - variáveis globais criadas com var (criadas no programa e fora de qualquer
      função) não podem ser apagadas;

    - globais implícitas criadas sem var (independentemente de terem sido
      criadas dentro de funções) podem ser apagadas.

    Isso mostra que tecnicamente, globais implícitas não são variáveis de
    verdade, mas são propriedades do objeto global. Propriedades podem ser 
    apagadas com o operador delete, enquanto variáveis globais não podem:
*/

// define três globais
var global_var = 1;
global_novar = 2; // antipadrão
(function () {
    global_fromfunc = 3; // antipadrão
}());

// tentativas de exclusão

delete global_var;          // falso
delete global_novar;        // verdadeiro
delete global_fromfunc;     // verdadeiro

// testes das exclusões

typeof global_var;          // "number"
typeof global_novar;        // "undefined"
typeof global_fromfunc;     // "undefined"

/*
    No modo estrito da ES5, atribuições a variáveis não declaradas (como os dois
    antipadrões do exemplo anterior) irão gerar um erro.
*/
