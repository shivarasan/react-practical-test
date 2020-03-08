import React from "react";

import { Provider } from "react-redux";

import store from "./redux/store";
import routes from "./routes";

const App = () => <Provider store={store}>{routes}</Provider>;

export default App;
