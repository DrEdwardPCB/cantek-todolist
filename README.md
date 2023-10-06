# CANTEK-TODO

this repository is a todo list assignment for cantek Oct 2023 web development course

## motivation

**short answer**: this is an assignment
**long answer**: this will be used for capstone project as a demo repo and POC for some of the frontend libs

## some other details

<details>
<summary>cantek assignment requirement</summary>

### Objective:

To get a better understanding of your current level in React, Develop a to-do list application using Vite, React, and TypeScript. Ensure correct typing for all variables and props. Your application should allow users to add, update, delete, and view tasks. The tasks should persist in local storage so that they remain available upon page refreshes.

### Application Requirements:

#### Project Setup:

-   Create a new React application using Vite.
-   You may use any styling approach of your choice.

#### Core Features:

-   Implement an input field for users to enter task titles.
-   Implement an 'Add' button to add new tasks to the list.
-   Display the list of tasks.
-   Implement functionality to update a task's title.
-   Implement functionality to delete a task from the list.
-   When there are no tasks, display a message "No todos found".
-   Store and retrieve tasks from local storage to ensure they persist across browser sessions.

#### Component Structure:

-   Structure your application using multiple components, ensuring proper passing of props between them. For example, you may have components like TodoList, TodoItem, AddTodo, etc.

#### TypeScript:

-   Define types/interfaces for the props and state where necessary. Ensure every component and function is correctly typed.

#### Submission:

-   Push your code to a GitHub repository.
-   Ensure your README file explains how to run the application and - demonstrates the functionality of your application also host the application and provide the link in the repo’s about section (top right).
    Provide the link to your GitHub repository for evaluation.

Your approach to styling, state management, and component structure is up to you, but ensure your code is clean, well-commented, and demonstrates a good understanding of React and TypeScript concepts.

</details>

<details>
<summary>View template README</summary>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
</details>
<hr/>

## Getting started

### pre-requisite

-   node installed (v16+)
-   npm installed
-   terminal installed
-   git installed

### running the application

-   this step assume you have clone the repo
    open the terminal at project root

```shell
# dev
npm install
npm run dev
## you suppose see website running on http://localhost:5173

# preproduction
npm install
npm run build
npx serve -s -p 8080 dist
```

### live demo

[demo here!](https://bright-pothos-4bdb82.netlify.app/)

## specification

## tech used

bundler used:

-   vite

framework used:

-   react

libs used:

-   usehooks-ts
-   react-beautiful-dnd
-   mui
-   tailwindcss
-   daisyUI
-   uuid
-   react-hook-form
-   react-router-dom
-   lodash

the unmentioned are either dependencies of libs or housekeeping

## hirachy

```shell
src
|-pages
| |- contain pages
|-hooks
| |- contains logical hooks
|-components
  |- contains ui components
```

## how to use

### 1. add item

to add item, simply click the top right add button, fill in the form, click submit, then the item will be added to the todo list
![alt text](/img/add1.png)
![alt text](/img/add2.png)
![alt text](/img/add3.png)

### 2. move item to different stage

in a todo list you often have different stages, you can freely drag and drop item to different stages. multiple items are also supported
![alt text](/img/move1.png)
![alt text](/img/move2.png)

### 3. item menu

each item would have a menu, covering moving to different stages, update and delete. simply click the button on the top right of the todo item to access the menu of that item
![alt text](/img/menu.png)

### 4. update item

by clicking at the update button on the item menu, you can update the title and description of an item
![alt text](/img/update.png)

### 5. delete item

by clicking at the delete button on the item menu, you will be prompt to confirm item deletion, click confirm to remove the item
![alt text](/img/delete.png)

### misc function

-   **storage**: item are persist at localStorage, unless clearing the browser localstorage, it shall persist
-   **stages toggle**:, you can toggle which stage will be shown to fit your use case
-   **filter**: the filter allows filter of item via title
-   **no item notice**: when there is no item, no item in todo list will pop up

## enhancement and limitation

### limitation

-   filter can only filter on title
-   upon turn off stages, the relative move to stage button is not switched off
-   localstorage only has 5MB size
-   no collaboration is allowed

### enhancement

-   use a backend server to persist the stage to overcome a 5MB limit
-   implement opensearch for searching and filtering
-   implement websocket and user id to allow sharing across multiple people within group

## difficulties encountered

-   debug why dnd not working
    -   useEffect would render twice in react strict mode which dnd is heavily rely on
-   get over eslint
    -   in my past experience, we will ocassionally turn off some eslint rules to facilitate development speed, but this time without modifying eslint rules, it will require more study of what each rule is about, what problem are they trying to solve and why they are important.
