import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
//import { Film } from "./components/Film";
import { MyFList } from "./components/MyFList";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <div className="contenedor">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/myList" element={<MyFList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
