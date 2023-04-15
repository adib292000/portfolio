import './styles/base.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Container from './components/container/container';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import Work from './pages/work';
import About from './pages/about';
import Contact from './pages/contact';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Work />,
    },
    {
      path: "/work",
      element: <Work />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <div className="bg-lightest-blue">
      <Navbar />
      <Container >
        <RouterProvider router={router} />
        <Footer />
      </Container >
    </div>
  );
}

export default App;