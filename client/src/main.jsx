import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./store/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              background: "white",
              color: "black",
            },
          }}
        />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <Provider store={store}> */}
//     <App />
//     {/* <Toaster
//       toastOptions={{
//         position: "top-right",
//         style: {
//           background: "white",
//           color: "black",
//         },
//       }}
//     /> */}
//     {/* </Provider> */}
//   </StrictMode>
// );
