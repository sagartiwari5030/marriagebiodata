import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CreateProfile from './Pages/CreateProfile';
import ProfileList from './Pages/ProfileList';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/profile-list" element={<ProfileList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
