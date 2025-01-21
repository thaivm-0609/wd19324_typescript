import './App.css'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';

const routeConfig = [
  { //router home
    path: '/', //khai báo url để truy cập vào chức năng đó
    element: <Home/>, //khai báo component được hiển thị ra
  },
  { //router detail
    path: '/detail/:id',
    element: <Detail/>
  },
  { //router register
    path: '/register',
    element: <Register/>,
  },
  { //router not found
    path: '*',
    element: <NotFound/>
  }
]

function App() {
  const router = useRoutes(routeConfig);

  return <div>{router}</div>
}

export default App
