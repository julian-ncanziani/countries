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
    <div className="App">
      <p>Countries app</p>
      <RouterProvider router={router}/>
    
    </div>
  );
}

export default App;
