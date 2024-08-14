import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Display from './components/Display';
import { content, categories } from './content/content';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

// Vytvoření dynamických cest
const routes = categories.map(category => ({
  path: `/${category}`,
  element: (
    <App>
      {content
        .filter(item => item.category.includes(category))
        .map((element, index) => (
          <Display key={index} workModel={element} />
        ))}
    </App>
  )
}));

routes.unshift({
  path: "/",
  element: (
    <App>
      {content.map((element, index) => (
        <Display key={index} workModel={element} />
      ))}
    </App>
  )
});

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);