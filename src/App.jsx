import "./styles/index.scss";
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from "./pages/HomePage";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
      <HomePage />
      <ToastContainer position="bottom-right" />

    </>
  )
}

export default App
