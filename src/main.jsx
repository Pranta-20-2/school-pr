import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import DashBoard from './pages/DashBoard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,

      }
    ]
  },

]);
createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
