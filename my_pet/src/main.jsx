import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StartPage from "./pages/StartPage";
import HomeList from "./pages/HomeList";
import ErrorView from "./pages/ErrorView";
import "./index.css";
import DetailsView from "./pages/DetailsView";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index element={<StartPage />} />
      <Route path="/home" element={<HomeList />} />
      <Route path="/details/:id" element={<DetailsView />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
