import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/presentation";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/rootReducer";

const store = createStore(rootReducer);
dayjs.locale("ja");
const App = () => (
  <Provider store={store}>
    <CalendarBoard />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
