import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './Components/Pages/home';
import {About} from './Components/Pages/About';
import {Layout} from './Layout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
