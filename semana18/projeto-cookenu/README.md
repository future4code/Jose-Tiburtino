# Cookenu

## :memo: Funcionalidades

- Cadastro de usuários entre Normal e Admin
- Login de usuários
- Visualizar o próprio perfil
- Visualizar o perfil de outro usuário
- Criação de receitas
- Pegar alguma receita a partir do ID
- Seguir outro usuário cadastrado na rede
- Deixar de seguir um usuário
- Visualizar o feed de receitas
- Edição de receitas já existentes
- Remoção de receita
- Remoção de conta(Somente administradores podem fazer isso)
- Envio de email com uma nova senha caso o usuário esqueça.

## 💻 Documentação

Teste as rotas com a documentação, basta importar ela para seu postman.

[Postman - Cookenu]()

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node
- Express
- Typescript
- Cors
- Knex
- MySQL
- Dotenv
- Dayjs
- HandleBars
- Jsonwebtoken
- Nodemailer

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
JWT_EXPIRES_IN = Coloque aqui o tempo que de expirar sua chave.
BCRYPT_COST = Coloque aqui um valor(O valor padrão é 12)
```

- Crie as tabelas com

```
npm run table
```

- Inicie o servidor com

```
npm run dev
```

## Desenvolvido por:

- [José Victor](https://www.linkedin.com/in/jose-victor-tf/)
