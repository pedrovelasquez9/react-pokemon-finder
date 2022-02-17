# React project template using Context API

## Description

This is a project template for developing React applications implementing react Context and Reducer hooks as a main state manager and JS fetch API for data fetching.

## Project structure

- src/
  - assets/
    - images/
    - styles/
  - components/
    - App/
    - Data/
    - ErrorMessage/
    - ListItem/
    - Loading/
  - services/
  - store/
  - utils/

Each visual component has their respective .jsx and .css files in order to associate them easily.

The **Context/Reducer** store implementation is located in the store/ directory where the Store.jsx file exports the Provider tag used as a global container inside the App.jsx component render method.

## Main component

The main view component is located in the components/Data/ directory and is the one that calls the fetch function defined in the services/ directory in order to bring the Pokemon data to the application and render it.

## How to run

Clone this repository and run the following commands:

- **npm install**
- **npm run dev**

## Additional information

This project is build using **Vite 2.8.0** and **React 17.0.2**.

This template project has been build and its structure defined live in [Programación en español](https://my.bio/prog-es) [Twitch channel](https://www.twitch.tv/programacion_en_esp)
