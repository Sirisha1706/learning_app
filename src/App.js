import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";
import Page404 from './pages/misc/Page404/Page404';

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      errorElement: <Page404/>,
      element: <Nav />,
      children: [
        { path: "", element: <Hero /> },
        {
          path: "/courses",
          children: [
            { index: true, element: <Courses /> },
            { path: ":name", element: <Details /> },
          ],
        },
        { path: "/learn/:name", 
          element: <Learn />,
          children: [
            {path: 'chapter/:id', element: <Chapter/>}
          ]},
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
