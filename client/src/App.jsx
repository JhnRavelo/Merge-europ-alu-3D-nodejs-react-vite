import "./App.css";
import AppRouter from "./routers/AppRouter";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <AppRouter/>
      <ToastContainer
        theme="dark"
      />
    </>
  );
}

export default App;
