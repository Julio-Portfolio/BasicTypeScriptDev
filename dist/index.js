"use strict";
//para um arquivo ts funcionar  precisamos converte ele usando o comando
// npx tsc src/index.ts no caso ele vai converter para  linguagem js e assim poder ser usado pelo node.ks
// para não ter que ficar toda vez fazendo isto podemos gerar um script
//ou
// podemos já deixar tudo pré configurado no proprio typescript 
//usando o comando npx tsc --init ele ira criar um arquivo de configuração
//
function main() {
    let myEmail = "julio@gmail.com";
    console.log(myEmail);
}
main();
