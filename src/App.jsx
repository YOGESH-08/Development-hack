import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CollegeList from './components/CollegeList';
import CollegeDetails from './components/CollegeDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CollegeList />} />
        <Route path="/colleges" element={<CollegeList />} />
        <Route path="/college/:id" element={<CollegeDetails />} />
      </Routes>
    </Router>
  );
}
export default App