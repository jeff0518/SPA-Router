import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom"

import HomePage from "./page/Home"
import ReservePage from "./page/Reserve"

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/reserve', element: <ReservePage />}
])

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
