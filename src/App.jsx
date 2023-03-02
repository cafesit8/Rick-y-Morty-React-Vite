import "./App.css";
import {Routes, Route} from 'react-router-dom'
import { ContainerGlobal } from "./components/ContainerGlobal";
import { Details } from "./components/Details";

function App() {
  return (
    <>
      <Routes>
        <Route path='/Rick-y-Morty-React-Vite' element={<ContainerGlobal/>} />
        <Route path='/Rick-y-Morty-React-Vite/:nombre' element={<Details/>} />
      </Routes>
    </>
  );
}

export default App;