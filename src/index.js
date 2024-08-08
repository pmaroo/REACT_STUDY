import React from "react";
import { createRoot } from "react-dom/client";
import App from "./_app";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render 17버전까지 지원되며 18버전은 지원하지 않음
// 18버전
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// 17버전
// ReactDOM.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// App.js 와 index.html을 연결해주는 다리 역활
