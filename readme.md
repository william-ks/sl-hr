# Projeto MVC

Este projeto é uma aplicação web que segue o padrão MVC (Model-View-Controller) e utiliza Docker Compose para gerenciar o banco de dados MySQL. A aplicação é construída com Node.js e Express, e o gerenciamento de pacotes é feito com Yarn.

## Estrutura do Projeto

- **Model**: Define a estrutura dos dados e a lógica de interação com o banco de dados.
- **View**: Responsável pela apresentação dos dados ao usuário (pode usar templates ou um frontend separado).
- **Controller**: Gerencia a lógica de aplicação e a interação entre o Model e a View.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção de aplicações web em Node.js.
- **Yarn**: Gerenciador de pacotes para Node.js.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **Docker Compose**: Ferramenta para definir e gerenciar multi-containers Docker.

## Requisitos

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

## Configuração do Projeto

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. **Instale as dependências do projeto:**

   ```bash
   yarn install
   ```

3. **Configure o ambiente:**

- **Crie um arquivo `.env`** com as configurações do banco de dados
  ```dotenv
  DB_HOST=mysql
  DB_USER=root
  DB_PASSWORD=rootpassword
  DB_NAME=mydatabase
  ```

4. **Suba os Containers:**
   ```bash
   docker-compose up -d
   ```
5. **Execute as migrações e seed do banco de dados (se houver):**
   ```bash
   yarn sequelize-cli db:migrate
   yarn sequelize-cli db:seed:all
   ```
6. **Inicie o ambiente de desenvolvimento:**
   ```bash
   yarn dev
   ```

## Estrutura de Diretórios

    ````bash
    /src
        /controllers     # Controllers que definem a lógica de negócios
        /helpers         # Helpers e conexão do sequelize
        /models          # Modelos Sequelize que definem a estrutura de dados
        /public          # Arquivos estaticos servidos na aplicação
        /routes          # Rotas da aplicação
        /views           # Views ou templates
        app.js           # Configuração do App
    docker-compose.yml # Configuração do Docker Compose
    ```

---
