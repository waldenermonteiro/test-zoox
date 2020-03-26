# test-zoox

### Tecnologias

A API do sistema é feita em Adonisjs.Essa API possui algumas bibliotecas já instaladas e configuradas:

*  [Swagger](https://swagger.io/ "Swagger") - Projeta APIs com a especificação OpenAPI (OAS), e valida seu design em tempo real.!
* [Mongodb](https://www.mongodb.com/ "Mongodb") - Banco de dados distribuído, baseado em documentos e de propósito geral.

Já no front, é utilizado o Vuejs:
* [Vue](https://br.vuejs.org/ "Vue") - Framework  Javascript Progressivo que trabalha com componentes.
### Documentação da API
Como foi descrito acima, na api é utilizado o swagger para a documentação, o endereço é : http://127.0.0.1:3333/docs/
### Instalação do Mongodb

O mongodb está em um container docker, para executá-lo, acesse a pasta Back do projeto.Depois execute o seguinte comando:
```sh
 sudo docker-compose up -d
```
Pronto, ele já estará em pleno funcionamento, no link : http://localhost:8080/ ou http://localhost:8081/.

usuário:jrmonteiro,
senha: teste123

### Instalação do Adonis

Antes de instalar o adonisjs, baixe e instale o Node.js. Node.js 8.10 ou superior é obrigatório nesse projeto.

Depois, instale o adonisjs globalmente.

```sh
 npm i -g @adonisjs/cli
```
E agora execute este para baixar todos os pacotes (na pasta Back do projeto):
```sh
 npm i
```
Para executar a API, pode tanto utilizar o adonis global ou com o npx, como é mostrando no exemplo abaixo: (lembrando, sempre executar esse comando na pasta Back)
```sh
 npx adonis serve --dev 
```
### Instalação do Vue

No Vue será apenas necessário baixar os pacotes:
```sh
 npm i
```
E depois executar o projeto, mas desta vez na pasta front:
```sh
 npm run serve
```
```
License
----

MIT
