import './App.css'
import { Navbar } from "../../Components/Navbar/Navbar.jsx";
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home/Home.jsx';
import { MyListPage } from '../MyListPage/MyListPage.jsx';
import { NotFound } from '../NotFound/NotFound.jsx';
import { PeListsProvider } from '../../Context/Context';

const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-lists', element: <NotFound/> },
    { path: '/my-lists/:id', element: <MyListPage/> },
    { path: '/create-list', element: <NotFound/> },
    { path: '/sign-in', element: <NotFound/> },
    { path: '/*', element: <NotFound/> },
  ])

  return routes;
}

const App = () => {
  return (
    <PeListsProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </PeListsProvider>
  )
}

export default App
