import ReactDOM from "react-dom/client";
import "./styles.scss";
import router from "./router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/signup" element={<SignUp />} />
  //   </Routes>
  // </BrowserRouter>
  // </React.StrictMode>
  // StrictMode baslangicta iki kez yüklenmesini sagliyor
);
