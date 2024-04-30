import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "./index.css";

const div = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(div);

root.render(<StrictMode><App /></StrictMode>);