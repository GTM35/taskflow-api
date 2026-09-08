# TaskFlow API

API REST para gerenciamento de projetos e tarefas, construída com Node.js puro. O projeto utiliza o módulo HTTP nativo, roteamento manual e arquivos JSON como persistência local.

## Sobre o projeto

O TaskFlow API foi desenvolvido como um projeto prático para consolidar fundamentos de Node.js, incluindo:

- criação de um servidor HTTP sem framework;
- organização da aplicação por rotas, controllers, middlewares e utilitários;
- relacionamento entre tarefas e projetos;
- operações de criação, consulta, atualização e remoção;
- persistência de dados em arquivos JSON.

## Tecnologias

- Node.js 18.11 ou superior;
- JavaScript com ES Modules;
- `node:http`;
- `node:fs/promises`;
- arquivos JSON como banco de dados local.

O projeto não possui dependências externas.

## Estrutura

```text
.
├── src/
│   ├── server.js
│   ├── controller/
│   │   ├── projects/
│   │   │   ├── create.js
│   │   │   ├── index.js
│   │   │   ├── remove.js
│   │   │   └── update.js
│   │   └── tasks/
│   │       ├── create.js
│   │       ├── index.js
│   │       ├── remove.js
│   │       ├── update.js
│   │       └── updateStatus.js
│   ├── database/
│   │   ├── dbProjects.js
│   │   ├── dbProjects.json
│   │   ├── dbTasks.js
│   │   └── dbTasks.json
│   ├── middlewares/
│   │   ├── jsonHandler.js
│   │   └── routeHandler.js
│   ├── routes/
│   │   ├── index.js
│   │   ├── projects.js
│   │   └── tasks.js
│   └── utils/
│       ├── extractQueryParams.js
│       └── parseRoutePath.js
├── package.json
└── README.md
```

## Como executar

### Pré-requisitos

Instale o [Node.js](https://nodejs.org/) versão 18.11 ou superior.

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O servidor será iniciado em:

```text
http://localhost:3333
```

Também é possível iniciar diretamente com:

```bash
node src/server.js
```

## Endpoints

### Projetos


| Método  | Rota            | Descrição             |
| -------- | --------------- | ----------------------- |
| `POST`   | `/projects`     | Cria um projeto         |
| `GET`    | `/projects`     | Lista todos os projetos |
| `PUT`    | `/projects/:id` | Atualiza um projeto     |
| `DELETE` | `/projects/:id` | Remove um projeto       |

### Tarefas


| Método  | Rota                | Descrição                            |
| -------- | ------------------- | -------------------------------------- |
| `POST`   | `/tasks`            | Cria uma tarefa vinculada a um projeto |
| `GET`    | `/tasks`            | Lista todas as tarefas                 |
| `PUT`    | `/tasks/:id`        | Atualiza uma tarefa                    |
| `PATCH`  | `/tasks/:id/status` | Atualiza o status de uma tarefa        |
| `DELETE` | `/tasks/:id`        | Remove uma tarefa                      |

## Payloads

### Criar projeto

`POST /projects`

```json
{
  "name": "Landing Page",
  "description": "Atualização da página inicial do produto",
  "owner": "Maria"
}
```

O `id` do projeto é gerado automaticamente.

### Criar tarefa

`POST /tasks`

```json
{
  "title": "Implementar hero section",
  "description": "Criar banner com CTA e textos principais",
  "responsible": "João",
  "priority": "high",
  "status": "open",
  "project_id": "94"
}
```

O `project_id` deve corresponder a um projeto existente. O `id_task` é gerado automaticamente.

### Atualizar projeto

`PUT /projects/:id`

```json
{
  "name": "Landing Page atualizada",
  "description": "Nova descrição do projeto",
  "owner": "João"
}
```

### Atualizar tarefa

`PUT /tasks/:id`

```json
{
  "priority": "low",
  "responsible": "Ana"
}
```

### Atualizar status

`PATCH /tasks/:id/status`

```json
{
  "status": "closed"
}
```
## Persistência

Os dados são armazenados localmente nos arquivos:

- `src/database/dbProjects.json`;
- `src/database/dbTasks.json`.
