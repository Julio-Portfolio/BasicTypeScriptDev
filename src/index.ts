//para um arquivo ts funcionar  precisamos converte ele usando o comando
// npx tsc src/index.ts no caso ele vai converter para  linguagem js e assim poder ser usado pelo node.ks

// para não ter que ficar toda vez fazendo isto podemos gerar um script

//ou

// podemos já deixar tudo pré configurado no proprio typescript 
//usando o comando npx tsc --init ele ira criar um arquivo de configuração
//no arquivo de configuração iremos ter algumas configurações padrões sendo uma delas para criar 
//um diretorio chamado dist e la inserir os arquivos copilados .js

//Podemos tambem instalar um pacote que elimine tudo isto , onde ele já transforma o ts em js
//vamos usar o tsx , que faz com que o node.js rode os arquivos.TS para instalar como desenvolvimento
//vamos usar o comando npm i tsx -D
//vamos mudar os scripts para que tenha 2 versõs uma para DEV que irá rodar o .TS e outra que seria a distribuição


function main(){
    let myEmail:string="julio@gmail.com"
    console.log(myEmail);
}

main();