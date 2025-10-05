import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact'
import Error from './components/Error'
import RestMenu from './components/RestMenu';
import { Provider } from 'react-redux';
import appStore from './components/utils/appStore';
import Grocerry from './components/Grocerry';


const Cart = lazy(()=> import("./components/Cart"))



const App = () => {
  return (
    <div>
    <Provider store={appStore}>
        <Header/>
        <Outlet/>
        <Footer/>
        </Provider>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element: <Body/>
      },
 {
    path:"/about",
    element: <About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/Cart",
    element:<Suspense fallback={<h1>Loading...</h1>}><Cart/></Suspense>
  },
   {
    path:"/grocerry",
    element:<Grocerry/>
  },
  
  {
    path: "/restaurants/:id",
    element: <RestMenu/>
  }
    ],
     errorElement: <Error/>,
  }
 

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);