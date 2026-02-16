![Imagem do logotipo PizzaShop e duas telas da página inicial da aplicação](.github/cover-pizzashop.png)

# 🍕 PizzaShop

O **PizzaShop** é um dashboard robusto para administração e gerenciamento de pedidos de delivery. Desenvolvido durante o curso de Desenvolvimento Full Stack da **Rocketseat**, o projeto foca em fornecer métricas detalhadas e controle total sobre o fluxo de pedidos de um restaurante.

A aplicação utiliza estratégias de cache para otimizar requisições, reduzindo o consumo de recursos da API e elevando a performance da experiência do usuário. Além disso, conta com uma suíte completa de testes unitários e E2E.

---

## ✨ Tecnologias

O projeto foi construído com o que há de mais moderno no ecossistema React:

* **Core:** React 18, TypeScript, Vite.
* **Data Fetching:** TanStack Query (React Query) & Axios.
* **Forms & Validation:** React Hook Form & Zod.
* **Styling:** Tailwind CSS & Radix UI (via Shadcn/UI).
* **Charts:** Recharts.
* **Testing:** Playwright (E2E) & Vitest.

---

## 📋 Funcionalidades

- **Gestão de Perfil:** Registro e atualização das informações do restaurante.
- **Controle de Pedidos:** Listagem, aprovação, envio, conclusão e cancelamento de pedidos.
- **Detalhamento:** Visualização completa dos itens do pedido e dados do cliente.
- **Business Intelligence:** Dashboards com métricas de desempenho e gráficos de faturamento.
- **Confiabilidade:** Testes automatizados para garantir o funcionamento das regras de negócio.

---

## 🔧 Instalação e Execução

### 1. Requisitos Prévios
Certifique-se de ter a API do projeto rodando. Você pode acessá-la aqui:  
🔗 - [https://github.com/rocketseat-education/pizzashop-api](https://github.com/rocketseat-education/pizzashop-api)

### 2. Clonar e Instalar
```bash
# Clonar o repositório
git clone [https://github.com/KaikMcpe12/pizzashop.git](https://github.com/KaikMcpe12/pizzashop.git)

# Acessar a pasta
cd pizzashop

# Instalar dependências
npm install

```

### 3. Configuração de Variáveis

Crie os arquivos `.env.local` e `.env.test` na raiz do projeto:

```env
VITE_API_URL="http://localhost:3333"
VITE_ENABLE_API_DELAY=false

```

### 4. Rodar o Projeto

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Rodar testes unitários
npm run test

# Rodar testes E2E
npm run test:e2e

```

---

## 🔑 Acesso ao Painel

1. Acesse: `http://localhost:5173/sign-in`
2. Utilize o e-mail: `admin@admin.com`
3. **Fluxo de Login:** A aplicação utiliza **Magic Links**. Após solicitar o login, verifique o **terminal da API**, copie a URL gerada e cole no seu navegador.

---
