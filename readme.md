## Como rodar o projeto

```bash
npm install
node ace migration:run
node ace serve --watch
```

## Endpoints – Livros

### Criar Livro

**POST** `/livros`

```json
{
  "titulo": "Clean Code",
  "isbn": "9780132350884",
  "categoria": "Programação",
  "exemplaresTotais": 5,
  "exemplaresDisponiveis": 5
}
```

### Listar Livros

**GET** `/livros`


### Buscar Livro

**GET** `/livros/buscar?titulo=clean`


## Endpoints – Usuários

### Criar Usuário

**POST** `/usuarios`

```json
{
  "nome": "João Silva",
  "cpf": "12345678900",
  "email": "joao@email.com",
  "telefone": "84999999999",
  "endereco": "Rua A",
  "tipo": "LEITOR",
  "matricula": "20231234",
  "curso": "Informática"
}
```

## Endpoints – Empréstimos

### Criar Empréstimo

**POST** `/emprestimos`

```json
{
  "usuarioId": 1,
  "livroId": 2
}
```

### Devolver Empréstimo

**PUT** `/emprestimos/1/devolver`

---

## Endpoints – Multas

### Listar Multas

**GET** `/multas`

---

### Pagar Multa

**PUT** `/multas/1/pagar`

---

## Códigos de Erro

* `400` – Dados inválidos
* `404` – Recurso não encontrado
* `409` – Regra de negócio violada