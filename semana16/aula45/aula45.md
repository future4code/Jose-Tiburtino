## Exercício 1

A) O Comando:

```sql
ALTER TABLE Actor DROP COLUMN salary;
```

Irá alterar a tabela **Actor** excluindo a coluna salary.

B)
O Comando:

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

Irá alterar a tabela **Actor** mudando o nome da coluna gender para sex mantendo a quantidade de 6 caracteres.

C)
O Comando:

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

Irá alterar a tabela **Actor** mudando somente a quantidade de 6 caracteres para 255 caracteres.

D)
Com o seguinte comando podemos alterar a coluna gender para que aceite até 100 caracteres.

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

---

## Exercício 2

A)

```sql
UPDATE Actor
SET name = "Tibiano", birth_date = "1999-02-24"
WHERE id = "006";
```

B)

```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

Voltando ao normal:

```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

C)

```sql
UPDATE Actor
SET name = "Susana Vieira", salary = 700000, birth_date = "1942-08-23", gender = "female"
WHERE id = "005";
```

D)
A query é executada porém nenhum resultado é demonstrado.

---

## Exercício 3

A)

```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

B)

```sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
```

---

## Exercício 4

A)

```sql
SELECT MAX(salary) from Actor;
```

B)

```sql
SELECT MIN(salary) from Actor WHERE gender = "female";
```

C)

```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

D)

```sql
SELECT SUM(salary) FROM Actor;
```

---

## Exercício 5

A) A query :

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

retorna a quantidade de atores com base em seu gênero.

B) A query:

```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

retorna somente o id e o nome dos atores em ordem decrescente alfabética.

C) A query:

```sql
SELECT * FROM Actor
ORDER BY salary ASC
```

retorna os atores ordernados pelo salário.

D) A query:

```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3
```

retorna os três maiores salários.

E) a query:

```sql
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

retorna a média de salário por gênero.

---

## Exercício 6:

A)
Novo paramêtro para a tabela Movie.

```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```

B)
Modificação da coluna rating da tabela Movie.

```sql
ALTER TABLE Movie MODIFY COLUMN rating FLOAT NOT NULL;
```

C)
Atualização de dois filmes com diferentes datas de reprodução.

```sql
UPDATE Movie SET playing_limit_date = "2021/03/30" WHERE id="001";
```

```sql
UPDATE Movie SET playing_limit_date = "2020/02/24" WHERE id="002";
```

D)

```sql
DELETE FROM Movie WHERE id = "001"
```

A query é executada porém nada é afetado pela mesma.

---

## Exercício 7:

A) Filmes com nota maior que 7.5:

```sql
SELECT * FROM Movie WHERE rating>7.5
```

B)
Média das avaliações dos filmes:

```sql
SELECT AVG(rating) from Movie;
```

C)
Filmes em cartaz:

```sql
SELECT COUNT(*) FROM Movie WHERE playing_limit_date >=  CURDATE();
```

D)
Quantidade de filmes que ainda irão lançar:

```sql
SELECT COUNT(*) FROM Movie WHERE release_date >  CURDATE();
```

E) Maior nota dos filmes:

```sql
SELECT MAX(rating) FROM Movie;
```

F) Menor nota dos filmes:

```sql
SELECT MIN(rating) FROM Movie;
```

---

## Exercício 8:

A) Filmes em ordem alfabética:

```sql
SELECT * FROM Movie
ORDER BY title ASC;
```

B) Filmes em ordem descrecente com o limite de 5:

```sql
SELECT * FROM Movie
ORDER BY title DESC
LIMIT 5;
```

C)
3 filmes mais recentes em cartaz:

```sql
SELECT * FROM Movie
WHERE playing_limit_date > CURDATE()
ORDER BY playing_limit_date DESC
LIMIT 3;
```

D)
3 filmes melhor avaliados:

```sql
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;
```
