import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ABOUT from './component/ABout/ABOUT';
import Inventory from './component/Inventory/Inventory';
import Main from './component/Layout/Main';
import Order from './component/Order/Order';
import Products from './component/Products/Products';
import { loadCartandProduct } from './Loder/LoadCart&Product';
 
 

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
        path:'order',
        loader:()=> loadCartandProduct(),
        element:<Order></Order>
      },
      {
        path:'invertoey',
        element:<Inventory></Inventory>
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
