import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import FavList from './components/FavList';

function App() {
  return (
   <>
   <Home></Home>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favlist" element={<FavList />} />
      </Routes>
   </>
  );
}

export default App;
