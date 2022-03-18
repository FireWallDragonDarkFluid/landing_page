import Home from "./layout/Home";
import Work from "./layout/Work";
import Detail from "./layout/Detail"
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/work" element={<Work />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
    </>
  );
}

export default App;
