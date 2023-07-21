import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Room from './components/Room';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/room/:id" element={<Room />}></Route>
                <Route path="/signin" element={<Signin />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
