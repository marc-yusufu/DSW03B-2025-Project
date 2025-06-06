import './App.css';
import './index.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/HomePage/Home';
import Upload from './Components/UploadPage/Upload';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Signup/RegisterPage';
import SettingPage from './Components/SettingPage/SettingPage';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*
To run the project:

cd doc-verification
npm install
npm run dev

*/

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home"/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Signup" element={<RegisterPage/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Upload" element={<Upload/>}/>
        <Route path="/Settings" element={<SettingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
