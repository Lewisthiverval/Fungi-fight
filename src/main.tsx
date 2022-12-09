import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import dayjs from "dayjs";

console.log(dayjs().format("day: DD month: MMM year: YY"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
