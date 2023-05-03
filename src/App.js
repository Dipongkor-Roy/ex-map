import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './Layoutes/NavBar';
import Topics from './components/pages/Topics';
import Statics from './components/pages/Statics';
import Blog from './components/pages/Blog';
import Notfound from './components/404Notfound/Notfound';
import Js from './components/Js/Js';

import ReactPage from './components/ReactPage/ReactPage';



function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<NavBar></NavBar>,
      children:[
        {
          path:'/',
          loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics></Topics>
        },
        {
          path:'/statics',
          element:<Statics></Statics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/javaScript',
          element:<Js></Js>
        },

        {
          path:'/topic/:topicId',
          loader:async({params})=>{
          return await fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element:<ReactPage></ReactPage>
        },
        
        // {
        //   path:'/css',
        //   element:<CssPage></CssPage>
        // },
        // {
        //   path:'/github',
        //   element:<Github></Github>
        // },
        
        
      ]
    },
    {
      path:'*',
      element:<Notfound></Notfound>
    }
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
 
    </div>
  );
}

export default App;
