import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
            
          
                <Route path="/dashboard" element={<h1>DashboardPage</h1>}  />

                <Route path="/" element={<RegisterPage/>} /> 
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/home" element={<h1>Home</h1>} />
            </Routes>

        
        </BrowserRouter>

        
    </div>
  );
}

export default App;