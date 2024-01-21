import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtoMainRoutes from "./components/Prototype-career/ProtoMainRoutes";
import ProtoHome from "./components/Prototype-career/protoHome/ProtoHome";
import ProtoCreateCv from "./components/Prototype-career/ProtoCreateCv/ProtoCreateCv";
import ProtoFindJob from "./components/Prototype-career/ProtoFindJob/ProtoFindJob";
import ProtoPostJob from "./components/Prototype-career/ProtoPostJob/ProtoPostJob";
import ProtoLogin from "./components/Prototype-career/proto-auth/ProtoLogin";
import ProtoRegisterEmp from "./components/Prototype-career/proto-auth/ProtoRegisterEmp";
import ProtoRegisterSeek from "./components/Prototype-career/proto-auth/ProtoRegisterSeek";
import ProtoError from "./components/Prototype-career/ProtoError/ProtoError";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtoMainRoutes />,
    errorElement: <ProtoError />,
    children: [
      {
        index: true,
        element: <ProtoHome />,
      },
      {
        path: "create-cv",
        element: <ProtoCreateCv />,
      },
      {
        path: "find-job",
        element: <ProtoFindJob />,
      },
     
      {
        path: "post-job",
        element: <ProtoPostJob />,
      }
    
    ],
  },
  {
    path: "login",
    element: <ProtoLogin />,
  },
  {
    path: "register-emp",
    element: <ProtoRegisterEmp />,
  },
  {
    path: "register-seeker",
    element: <ProtoRegisterSeek />,
  },
  {
    path: "**",
    element: <ProtoError />,
  },
]);


root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
