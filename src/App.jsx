import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CollegeList from './components/CollegeList';
import CollegeDetails from './components/CollegeDetails';
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import AIGenerator from './components/AIGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AiGenerator" element={<AIGenerator/>}/>
        <Route path="/colleges" element={<CollegeList />} />
        <Route path="/college/:id" element={<CollegeDetails />} />
      </Routes>
    </Router>
  );
}
export default App