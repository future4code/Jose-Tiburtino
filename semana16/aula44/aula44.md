## Table utilizada para o exercício

```sh
CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

## Exercício 1

A) FLOAT - Declara o salário pois representa um número e não uma tabela inteira.
VARCHAR(255) - Aceita até 255 caracteres.
PRIMARY KEY - A coluna receberá os dados que são identificadores únicos daquela tabela.
NOT NULL - O campo é requirido, deve ser preenchido.
DATE - Aceita informações em formato de data.
VARCHAR(6) - Aceita até 6 caracteres.

B) SHOW DATABASE nos mostra todos os bancos de dados disponíveis.
SHOW TABLES nos mostra as tabelas disponíveis e criadas.

C) O DESCRIBE nos mostra as informações de cada coluna, como por exemplo, o type, se são ou não NULL e também a coluna PRIMARY KEY.

## Exercício 2

A)

```sh
INSERT INTO Actor (id,name,salary,birth_date, gender)
VALUES (
"002",
"Glória Pires",
1200,
"1963-08-23",
"female"
);
```

B)

```sh
Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMÁRIA'.
```

Como o próprio erro já diz, o ID é unico pois deixamos o mesmo como PRIMARY KEY.

C)

```sh
Código de erro: 1136. A contagem das colunas não corresponde à contagem do valor na linha 1
```

Temos várias colunas e somente algumas foram explicitadas assim causando o erro.

Correção para o erro acima.

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

D)

```sh
Código de erro: 1364. O campo 'name' não tem um valor padrão.
```

Definimos o name como NOT NULL, oque quer dizer que o campo tem que ser preenchido ou irá dar erro.

Correção.

```sh
INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Tibiano",
  400000,
  "1949-04-18",
  "male"
);
```

E)

```sh
Código de erro: 1292. Valor incorreto da data: '1950' para a coluna 'birth_date' na linha 1
```

O valor deve ser tipo DATE com o formato YYYY/MM/DD em string.

F) Criação de mais 2 atores.

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007",
  "vmcm1000",
  300000,
  "1939-03-19",
  "male"
);
```

## Exercício 3

A)

```sh
SELECT * FROM Actor WHERE gender="female";
```

B)

```sh
SELECT salary FROM Actor WHERE name="Tony Ramos";
```

C)

```sh
SELECT * FROM Actor WHERE gender="invalid";
```

Todas as seções da tabela vieram como NULL;

D)

```sh
SELECT id,name,salary FROM Actor WHERE salary>=500000;
```

E)

```sh
Código de erro: 1054. Desconhecido coluna 'nome' em 'fields'.
```

O erro aconteceu pois a nossa coluna se chama name e não nome.

Correção.

```sh
SELECT id, name from Actor WHERE id = "002"
```

## Exercício 4

```sh
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

A) Está retornando os nomes que começa com A ou J e salários acima de 300000.

B)

```sh
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
```

C)

```sh
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%"
```

D)

```sh
SELECT * FROM
WHERE (name LIKE "%a%" or name LIKE "%A%" or name LIKE "%G%" or name LIKE "%g%") AND salary BETWEEN 350000 AND 900000
```

## Exercício 5

A)

```sh
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

B)

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
```

C)

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
```

D)

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);
```

E)

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004",
  "Tropa de Elite",
  "O capitão da força especial da Polícia Militar do Rio de Janeiro treina dois recrutas novatos para que possam sucedê-lo.",
  "2007-10-05",
  10
);
```

## Exercício 6

A)

```sh
SELECT id, title, rating FROM Movie WHERE id="004"
```

B)

```sh
SELECT * FROM Movie WHERE title="Doce de mãe"
```

C)

```sh
SELECT id, title, synopsis FROM Movie WHERE rating>=7
```

## Exercício 7

A)

```sh
SELECT * FROM Movie WHERE title LIKE "%vida%"
```

B)

```sh
SELECT * FROM Movie WHERE title LIKE "%elite%" OR synopsis LIKE "%elite%"
```

C)

```sh
SELECT * FROM Movie WHERE release_Date < "2021-03-22"
```

D)

```sh
SELECT * FROM Movie WHERE release_Date < "2021-03-22" AND (title LIKE "%elite%" or synopsis LIKE "%elite%") and rating>7;
```
