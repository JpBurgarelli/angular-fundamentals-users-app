# 📝 Documentação - Angular Test

## 🎯 Visão Geral
Implementação de uma aplicação Angular que consome a API JSONPlaceholder para exibir e gerenciar uma lista de usuários com funcionalidades de busca em tempo real e visualização detalhada.

## 🚀 Funcionalidades Implementadas

### Core Features
- ✅ Listagem de usuários da API JSONPlaceholder
- ✅ Visualização detalhada de usuários em modal
- ✅ Busca em tempo real
- ✅ Interface responsiva
- ✅ Tratamento de erro simples


### Extras Implementados
- ✅ Loading spinner durante carregamento (simulado pelo setTimeOut())
- ✅ Paginação local entre home, usuários e localizacao
- ✅ Feedback visual para erros de API
- ✅ Compoenentes extras para melhorarar a UI

## 🛠 Tecnologias Utilizadas
- Angular 
- TypeScript
- SCSS
- Angular Material
- RxJS

## 📦 Estrutura do Projeto

```bash
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── userCard/
│   │   │   ├── userModal/
│   │   │   └── userSearch/
│   │   ├── models/
│   │   │   └── user.model.ts
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── location/
│   │   │   └── users/
│   │   ├── services/
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── style/
│   │   └── colors.scss
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
```

## 🚦 Instruções de Execução

```bash
# Instalação
- Possuir o node e npm instalados

- npm install

- npm install -g @angular/cli

#inicar Projeto
- ng serve
```


