import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="images/images/products/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              alert("업로드");
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exec={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exec={true} path="/product/:id">
            <ProductPage />
          </Route>
          <Route exec={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
