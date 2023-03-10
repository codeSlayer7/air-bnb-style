// import { useAppSelector } from './store/hook/hook';
import { Route, Routes } from 'react-router-dom';
import TrelloContainer from './ui/components/Trello-Container/Trello-container';
import './App.css';
import Sidebar from './ui/components/Sidebar/Sidebar';
import Applications from './ui/pages/Applications/Applications';
import Groups from './ui/pages/Groups/Groups';
import Students from './ui/pages/Students/Students';
import Mentors from './ui/pages/Mentors/Mentors';
import Archive from './ui/pages/Archive/Archive';
import Analytics from './ui/pages/Analytics/Analytics';
import Navbar from './ui/components/Navbar/Navbar';
// import LogIn from './ui/pages/Auth/LogIn';
// import ForgotPassword from './ui/pages/Auth/ForgotPassword';
// import Confirmation from './ui/pages/Auth/Confirmation';
// import ChangePassword from './ui/pages/Auth/ChangePassword';

function App(): JSX.Element {
  // const columns = useAppSelector((trello) => trello.trello?.columns);
  return (
    <div className="w-[98vw]">
      {/* <LogIn /> */}
      {/* <ForgotPassword /> */}
      {/* <Confirmation /> */}
      {/* <ChangePassword /> */}
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<TrelloContainer />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/students" element={<Students />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
