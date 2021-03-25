## Exercício 1

Tabela utilizada no exercício:

```sql
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```

A) Foreign Keys são chaves primarias/estrangeiras relacionado a outra tabela.

B) Avaliação para os filmes:

```sql
INSERT INTO Rating
VALUES("a", "Ruim", 4, "001"),
	("b", "Relativamente ruim", 6 , "002"),
    ("c", "Relativamente bom", 7,"003"),
    ("d", "Ótimo", 10, "004"),
    ("e", "Horrível", 2, "005");
```

C) O erro acontece pois não reconheceu o ID na nossa tabela de referência, no caso a tabela Movie.

```sql
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-jose-ferreira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

D) Remoção da coluna rating na tabela Movie:

```sql
ALTER TABLE Movie DROP COLUMN rating;
```

E) Para fazer a remoção de um filme da tabela Movie antes precisamos deletar os filhos que são da tabela Rating.

```sql
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-jose-ferreira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

---

## Exercício 2:

A) Tabela sobre o elenco do filme que se relaciona com a tabela de movie e também a tabela de actor.

```sql
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

B)

```sql
INSERT INTO MovieCast
VALUES
("001","001"),
("001","002"),
("002","005"),
("004","004"),
("003","005"),
("004","006"),
("005", "002");
```

C) Caso não exista na tabela mãe, no caso Actor ou Movie, não nos deixa adicionar.

```sql
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-jose-ferreira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

D) Como estamos utilizando uma Foreign Key, não conseguimos fazer a remoção da tabela mãe.

```sql
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-jose-ferreira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

---

## Exercício 3:

```sql
SELECT * FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

A) O ON é a condição que se caso o id de Movie for igual ao id de Rating, ele irá filtrar e relacionar.

B)

```sql
SELECT Movie.title, Movie.id, Rating.rate from Movie JOIN Rating ON Movie.id = Rating.movie_id;
```

---

## Exercício 4:

A) Retorno de todos os filmes e suas avaliações:

```sql
SELECT Movie.title, Movie.id, Rating.rate, Rating.comment FROM Movie JOIN Rating ON Movie.id = Rating.movie_id;
```

B) Retorno todas as relações de elenco, junto com as informações do filme:

```sql
SELECT movie_id, Movie.title, actor_id FROM Movie JOIN MovieCast ON movie_id = MovieCast.movie_id;
```

C)

```sql
SELECT Movie.title, AVG(Rating.rate) FROM Movie LEFT JOIN Rating ON Movie.id = movie_id
GROUP BY(Movie.title);
```

---

## Exercício 5:

```sql
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

A) Na query acima, está unindo 3 tabelas, está unindo a primeira tabela com a segunda, e o resultado da primeira tabela juntamente com a terceira tabela.

B) Retorno do id, titulo do filme,id e nome do ator:

```sql
SELECT m.id AS movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

C) A query da erro pois está como _m,title_, existe uma vírgula onde não deveria.

```sql
Error Code: 1054. Unknown column 'm' in 'field list'
```

D) Retorno de todos os filmes com o nome de seus atores e suas avaliações:

```sql
SELECT m.id AS movie_id, m.title, r.rate AS rating, r.comment AS rating_coment, a.name as elenco FROM Movie m
LEFT JOIN Rating r ON r.movie_id = m.id
LEFT JOIN MovieCast mc ON mc.movie_id = m.id
JOIN Actor a ON a.id = mc.actor_id;
```

---

## Exercício 6:

A) Uma relação M:N, diversos filmes irão se relacionar com os óscar.

B)

```sql
CREATE TABLE Oscar (
		oscar_name VARCHAR(255) NOT NULL,
		movie_id VARCHAR(255),
        oscar_date DATE NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```

C)

```sql
INSERT INTO Oscar(oscar_name, oscar_date, movie_id)
VALUES("Óscar de melhor filme", "2020-02-20", "004"),
	("Óscar de melhor direto", "2020-02-20", "004"),
    ("Óscar de melhor direção", "2020-02-25", "002"),
    ("Óscar de melhor fotografia", "2020-02-25", "002"),
    ("Óscar de melhor efeito", "2018-05-20", "003"),
    ("Óscar de melhor design", "2017-03-21", "003");
```

D) Query para retorno de todos os filmes e seus óscar:

```sql
SELECT m.id AS movie_id, m.title AS movie_title,
o.oscar_name AS oscar_name,
o.oscar_date AS oscar_date FROM Movie m
LEFT JOIN Oscar o On o.movie_id = m.id;
```
