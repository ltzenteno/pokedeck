import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1 className="text-3xl font-bold underline">Home</h1>
  },
  {
    path: '/detail/:id',
    element: <h1 className="text-3xl font-bold underline">Detail</h1>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
