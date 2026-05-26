# Sistema de Gestão de Funcionários

Sistema web completo para gerenciamento de funcionários desenvolvido com arquitetura Full Stack utilizando Node.js, Express e MySQL no back-end e HTML, CSS e JavaScript no front-end.

O projeto implementa operações CRUD completas (Create, Read, Update e Delete), permitindo cadastrar, listar, editar e excluir funcionários através de uma interface moderna e responsiva.

---

# Objetivo do Projeto

O sistema foi desenvolvido com foco em:

- Praticar integração entre front-end e back-end
- Implementar uma API REST
- Trabalhar com banco de dados MySQL
- Aplicar arquitetura MVC
- Realizar manipulação de DOM com JavaScript
- Desenvolver comunicação assíncrona utilizando Fetch API

---

# Tecnologias Utilizadas

## Front-end

- HTML5
- CSS3
- JavaScript Vanilla

## Back-end

- Node.js
- Express.js
- MySQL
- mysql2
- dotenv
- cors

---

# Estrutura do Projeto

```bash
📁 projeto
│
├── public
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── img.jpg
│
├── config
│   └── db.js
│
├── controllers
│   └── funcionarioController.js
│
├── routes
│   └── funcionarioRoutes.js
│
├── .env
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# Arquitetura do Projeto

O sistema foi organizado utilizando o padrão MVC:

## Model
Responsável pela conexão e manipulação do banco de dados MySQL.

Arquivo:
```bash
config/db.js
```

---

## Controller
Responsável pela lógica de negócio da aplicação.

Arquivo:
```bash
controllers/funcionarioController.js
```

Funções implementadas:

- listarFuncionarios()
- inserirFuncionarios()
- atualizarFuncionario()
- excluirFuncionario()

---

## Routes
Responsável pelas rotas da API REST.

Arquivo:
```bash
routes/funcionarioRoutes.js
```

Rotas disponíveis:

| Método | Rota | Função |
|---|---|---|
| GET | /funcionarios | Listar funcionários |
| POST | /funcionarios | Inserir funcionário |
| PUT | /funcionarios/:id | Atualizar funcionário |
| DELETE | /funcionarios/:id | Excluir funcionário |

---

## View (Front-end)
Responsável pela interface do usuário.

Arquivos:
```bash
index.html
style.css
script.js
```

---

# Funcionalidades

## Cadastro de Funcionários
Permite inserir:

- Nome
- Cargo
- Salário

---

## Atualização de Funcionários
Os dados podem ser editados diretamente pela interface.

---

## Exclusão de Funcionários
Remoção de registros do banco de dados.

---

## Listagem Dinâmica
Todos os funcionários cadastrados são carregados automaticamente em uma tabela dinâmica.

---

## Interface Responsiva
O sistema possui adaptação para dispositivos móveis.

---

# Banco de Dados

## Criando o Banco

```sql
CREATE DATABASE empresa_db;
```

---

## Criando a Tabela

```sql
CREATE TABLE funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cargo VARCHAR(255) NOT NULL,
    salario DECIMAL(10,2) NOT NULL
);
```

---

# Configuração do Ambiente

## Arquivo .env

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=empresa_db
PORTA=3000
```

---

# Dependências do Projeto

## package.json

```json
"dependencies": {
  "cors": "^2.8.6",
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "mysql2": "^3.22.3"
}
```

---

# Instalação do Projeto

## 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

## 2. Instalar dependências

```bash
npm install
```

---

## 3. Configurar banco de dados

Criar:

- Banco `empresa_db`
- Tabela `funcionarios`

---

## 4. Configurar arquivo .env

Adicionar as credenciais do MySQL.

---

## 5. Executar servidor

```bash
node server.js
```

Servidor disponível em:

```bash
http://localhost:3000
```

---

# Funcionamento da API

## GET - Buscar Funcionários

```http
GET /funcionarios
```

Resposta:

```json
[
  {
    "id": 1,
    "nome": "João",
    "cargo": "Desenvolvedor",
    "salario": 3500
  }
]
```

---

## POST - Inserir Funcionário

```http
POST /funcionarios
```

Body:

```json
{
  "nome": "Maria",
  "cargo": "Analista",
  "salario": 4500
}
```

---

## PUT - Atualizar Funcionário

```http
PUT /funcionarios/1
```

Body:

```json
{
  "nome": "Maria Silva",
  "cargo": "Analista Senior",
  "salario": 6000
}
```

---

## DELETE - Excluir Funcionário

```http
DELETE /funcionarios/1
```

---

# Explicação dos Arquivos

## server.js

Responsável por:

- Inicializar o Express
- Configurar middlewares
- Definir rotas
- Liberar CORS
- Servir arquivos estáticos
- Iniciar o servidor

---

## db.js

Responsável pela conexão com o banco MySQL utilizando mysql2.

---

## funcionarioController.js

Responsável pelas operações CRUD:

- SELECT
- INSERT
- UPDATE
- DELETE

---

## funcionarioRoutes.js

Responsável pelo gerenciamento das rotas da API REST.

---

## script.js

Responsável por:

- Consumir a API
- Manipular DOM
- Atualizar tabela dinamicamente
- Enviar requisições HTTP
- Controlar edição e exclusão

---

## style.css

Responsável pelo design da aplicação:

- Layout responsivo
- Glassmorphism
- Gradientes
- Responsividade
- Estilização da tabela e formulários

---

## index.html

Estrutura principal da aplicação:

- Formulário
- Tabela
- Botões
- Layout da interface

---

# Conceitos Aplicados

- CRUD
- API REST
- Arquitetura MVC
- Fetch API
- JavaScript Assíncrono
- Express Middleware
- Integração Front-end e Back-end
- MySQL
- Modularização
- Responsividade
- Manipulação de DOM

---

# Melhorias Futuras

- Sistema de login
- Autenticação JWT
- Criptografia de senha
- Dashboard administrativo
- Pesquisa de funcionários
- Paginação
- Upload de imagens
- Deploy em nuvem
- Docker
- Validação de formulários
- Logs de sistema

---

# Autor

Desenvolvido por Matheus Montagnini.
