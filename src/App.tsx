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
    <div className="App  min-h-screen min-w-screen bg-zinc-100">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
