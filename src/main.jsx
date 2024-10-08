import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { UserContextProvider } from "./context/UserContext";
import { store } from "./redux/store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <Provider store={store}>
     
          <App />
   
      </Provider>
    </UserContextProvider>
  </BrowserRouter>
);