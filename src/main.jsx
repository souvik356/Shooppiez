import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './components/Contact.jsx';
//import About from './components/About.jsx';
import Body from './components/Body.jsx';
import Error from './components/Error.jsx';
import Product from './components/Product.jsx';
import Cart from './components/Cart.jsx';
//import Grocery from './components/Grocery.jsx';

const Grocery = lazy(() => import('./components/Grocery.jsx'));
const About = lazy(() => import('./components/About.jsx'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/product/:prodId',
        element: <Product />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h2>Loading.....</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path:'/cart',
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
