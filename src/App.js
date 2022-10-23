import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ABOUT from './component/ABout/ABOUT';
import Inventory from './component/Inventory/Inventory';
import Main from './component/Layout/Main';
import Login from './component/Login/Login';
import Order from './component/Order/Order';
import Products from './component/Products/Products';
import Resister from './component/Resister/Resister';
import Shipping from './component/Shipping/Shipping';
import { loadCartandProduct } from './Loder/LoadCart&Product';
import PriveteRoutes from './Routes/PriveteRoutes';
 
 

function App() {
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader:()=> fetch('products.json'),
        element:<Products></Products>

      },
      {
        path:'shop',
        loader:()=> fetch('products.json'),
        element:<Products></Products>
      },
      {
        path:'login',
        loader:()=> fetch('products.json'),
        element: <Login></Login>
      },
      {
        path:'resister',
        loader:()=> fetch('products.json'),
        element:<Resister></Resister>
      },
      {
        path:'order',
        loader:()=> loadCartandProduct(),
        element:<Order></Order>
      },
      {
        path:'invertoey',
        element:<Inventory></Inventory>
      },
      {
        path:'shipping',
        element:<PriveteRoutes><Shipping></Shipping></PriveteRoutes>
      },
      {
        path:'about',
        element: <ABOUT></ABOUT>,
      },

    ]
  }
])


  return (
    <div>
         <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
