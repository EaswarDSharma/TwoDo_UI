import Merger from './Merger.jsx'
import Auth from './Auth.jsx'
import { BrowserRouter , Routes,  Route } from "react-router-dom";
function App() {
  return (
   <>
<BrowserRouter>
 <Routes>
        <Route  path="/" element={<Auth/>} />
        <Route  path="/about" element={<Merger/>} />
    </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;
