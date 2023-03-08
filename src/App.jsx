import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom"
import ErrorPage from "./page/Error"

import HomePage from "./page/Home"
import ReservePage from "./page/Reserve"
import RootLayout from "./page/Root"

const router = createBrowserRouter([
  {
    parh: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/reserve", element: <ReservePage /> },
    ],
  },
]);

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/reserve" element={<ReservePage />} />
//   </Route>
// );
// const router = createBrowserRouter(routerDefinitions)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
