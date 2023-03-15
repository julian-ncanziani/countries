import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';

//componentes
import Home from './pages/Home';
import Landing from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/home',
    element: <Home/>,
    children: []
  }
]);

function App() {
  return (
    <div className="App  h-screen w-screen bg-slate-300">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
