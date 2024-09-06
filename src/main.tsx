import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store';
import './index.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/detail/:name',
    element: <Detail />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>,
);
