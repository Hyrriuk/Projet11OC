import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Connection from './Pages/Connection/Connection';
import Connected from './Pages/Connected/Connected';
import Signup from './Pages/Signup/Signup';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/connected" element={<Connected />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default App;
