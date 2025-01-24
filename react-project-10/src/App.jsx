import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamsComp from './components/ParamsComp';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import PageNotFound from './components/PageNotFound';
 
// Creating Routes
// it contains array of routes(link/path/url)
const router = createBrowserRouter([
  {
    path:"/",
    // element: <Home/>
    element: 
    <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path:"/about",
    element: 
    <div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path:"/dashboard",
    element: 
    <div>
      <Navbar/>
      <Dashboard/>
    </div>,
    // Creating Nested Routes 
    // IMP POINTS...
    // 1.) no / in path /courses wrong only courses 
    // 2.) An Outlet must be used in Parent Route to render their Child Route 
    children:[
      {
        path:'courses',
        element:<Courses/>
      },
      {
        path:'mock-tests',
        element:<MockTest/>
      },
      {
        path:'reports',
        element:<Reports/>
      }
    ]
  },
  {
    path:"/student/:id",
    element: 
    <div>
      <Navbar/>
      {/* parmeters ka use bhi seekh liya */}
      <ParamsComp/>
    </div>
  },
  // if any route we acc. which is not defined will display this route data 
  {
    path:'*',
    element: <PageNotFound/>
  }
]);
function App() {
  return (
    <div>
      {/* jo bhi routes create kre unka context providing to application
      app. ko batane ke liye we use routerprovider */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
