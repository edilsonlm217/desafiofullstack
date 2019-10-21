# O que é este projeto
A aplicação que imaginei permite ao usuário pesquisar por todos os tópicos dentro do stackoverflow utilizando como paramentro uma tag de interesse. A apresentação desse conteúdo é realizada por meio de cards, onde são apresentadas as seguintes informações:
	- O avatar do autor do tópico
	- O título da pergunta
	- O indice de aceitação do tópico
	- ...e sua pontuação (score)
  
# Como esta aplicação foi construída
Apesar do desafio ter solicitado a criação de uma API GraphQL, esta aplicação está rodando sobre uma API Rest que foi construída utilizando NodeJS. Conforme solicitado essa API trabalha como interface entre a API do StackOverflow e o frontend dessa aplicação.

O frontend foi construido interiamente utilizando Javascript e utilizando como principal biblioteca o ReactJS.



# Como rodar estre projeto.

## Instale Yarn
https://yarnpkg.com/lang/en/

## Baixando e instalando a aplicação. 
Crie uma pasta local em seu computador e chame-a de "desafiofullstack". Baixe as pastas backend e frontend para dentro dela.
Após o download, navegue até a pasta "desafiofullstack" através de um terminal.

## Rodando o backend
Navegue até a pasta backend com seu terminal.
Primeiramente, execute o comando "yarn" para instalação das dependencias do projeto. Aguarde a finalização.
Em seguida, rode o comando "yarn dev" e pronto. Já temos o backend rodando.

## Rodando o frontend
Por o frontend para todar consiste basciamente dos mesmos steps, no entando o comando yarn a ser utilizado não é o mesmo.
Navegue até a pasta frontend com seu terminal.
Primeiramente, execute o comando "yarn" para instalação das dependencias do projeto. Aguarde a finalização.
Em seguida, rode o comando "yarn start" e pronto. Já teremos o frontend rodando.

O navegador será inicializado automaticamente no endereço http://localhost:3000
No entando, a aplicação encontra-se no endereço http://localhost:3000/search

Se o navegador não for iniciado automaticamente, digite em seu browser o endereço http://localhost:3000/search

