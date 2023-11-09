import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { LanguageContext, LanguageProvider } from "./context";
import { Localization } from "./Localization";
import { Components } from "./components";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LanguageProvider>
            <App
                {...Localization}
                {...Components}
                LanguageContext={LanguageContext}
            />
        </LanguageProvider>
    </React.StrictMode>
);
