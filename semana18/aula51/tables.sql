CREATE TABLE User_Aula50 (
  id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

ALTER TABLE
  User_Aula50
ADD
  role ENUM("NORMAL", "ADMIN") DEFAULT("NORMAL");