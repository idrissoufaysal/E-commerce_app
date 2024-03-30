import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ProductDetail from "./pages/productDetaille";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
         path:'/product/:id',
         element:<ProductDetail/>   
        }
      ],
    },
  ]);

 

  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
