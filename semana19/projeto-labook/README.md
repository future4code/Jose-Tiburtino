# LaBook

## :memo: Funcionalidades

- Cadastro
- Login
- Criação de post
- Buscar post por ID
- Fazer amizade
- Desfazer amizade
- Ver todo o feed
- Curtir post
- Descurtir post
- Comentar post

## 💻 Documentação

Teste as rotas com a documentação, basta importar ela para seu postman.

[Postman - LaBook]()

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node
- Express
- Typescript
- Cors
- Knex
- MySQL
- Dotenv
- Jsonwebtoken

## 🚀 Como executar

- Instale as dependências com

```
npm install
```

- Crie um arquivo .env

```
touch .env
```

- Preencha o arquivo .env

```
DB_HOST = Coloque aqui seu endereço do banco de dados
DB_USER = Coloque aqui seu usuário
DB_PASSWORD = Coloque aqui sua senha
DB_SCHEMA = Coloque aqui o nome do banco de dados
JWT_KEY = Coloque aqui sua chave(aleatório)
JWT_EXPIRE_TIME = Coloque aqui o tempo que de expirar sua chave.
BCRYPT_COST = Coloque aqui um valor(O valor padrão é 12)
```

- Crie as tabelas com

```
npm run migrations
```

- Inicie o servidor com

```
npm run dev
```

## Desenvolvido por:

- [José Victor](https://www.linkedin.com/in/jose-victor-tf/)
