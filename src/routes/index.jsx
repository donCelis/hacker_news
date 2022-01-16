import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "../layout";
import Blog from "../pages/Blog";
import Favs from "../pages/Favs";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" element={<Blog />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
