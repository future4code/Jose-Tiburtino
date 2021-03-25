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
