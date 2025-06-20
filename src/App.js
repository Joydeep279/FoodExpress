import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import MainBody from "./Components/Body";


const AppLayout = () => {
  
  return (
    <div className="main-layout">
      <Header />
      <MainBody />
    </div>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(AppLayout());
