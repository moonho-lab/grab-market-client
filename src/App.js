import "./App.css";
import MainPageComponent from "./main";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exec={true} path={"/"}>
          <MainPageComponent />
        </Route>
        <Route exec={true} path={"/product/:id"}>
          <ProductPage />
        </Route>
        <Route exec={true} path={"/upload"}>
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
