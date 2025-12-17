# Requisitos da API para Sistema de Biblioteca

## Visão Geral

API RESTful para gerenciamento de biblioteca universitária, desenvolvida com AdonisJS.

---

## Requisitos Funcionais

### 1. Gestão de Livros

A API deve permitir o cadastro, consulta, atualização e exclusão de livros. Cada livro possui título, ISBN (único), autor(es), editora, ano de publicação, edição, número de páginas, categoria, quantidade de exemplares disponíveis e localização na estante. O sistema deve suportar busca por título, autor, ISBN e categoria.

### 2. Gestão de Usuários

O sistema deve gerenciar três tipos de usuários: administradores, bibliotecários e leitores. Cada usuário possui nome, CPF (único), e-mail (único), telefone, endereço e data de cadastro. Leitores possuem ainda matrícula e curso.

### 3. Empréstimos

A API deve registrar empréstimos vinculando usuário e exemplar do livro. Cada empréstimo contém data de retirada, data prevista de devolução (configurável, padrão 14 dias) e data efetiva de devolução. O sistema deve impedir empréstimos quando não houver exemplares disponíveis ou quando o usuário tiver pendências (atrasos ou multas não pagas). Limite máximo de 3 livros simultâneos por leitor.

### 4. Devoluções e Multas

Ao registrar devolução, o sistema deve calcular automaticamente multas por atraso (valor diário configurável). Multas pendentes bloqueiam novos empréstimos.

---

## Estrutura de Endpoints

| Recurso | Endpoints |
|---------|-----------|
| Usuários | GET, POST /users — GET, PUT, DELETE /users/:id |
| Livros | GET, POST /books — GET, PUT, DELETE /books/:id — GET /books/search |
| Empréstimos | GET, POST /loans — GET /loans/:id — PUT /loans/:id/return |
| Multas | GET /fines — PUT /fines/:id/pay |

---

## Tecnologias e Padrões

O projeto utilizará AdonisJS 6 com Lucid ORM.

  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createLivroValidator)
    return payload
  }