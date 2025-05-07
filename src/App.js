import logo from './logo.svg';
import './App.css';
import {Routes,Route } from 'react-router-dom';

//Import Components
import MainPage from './MainPage/MainPage';
import Login from './Login/Login.jsx'
import Complains from './Complains/Complains.jsx';
import ListOfGrievance from './ListOfComplains/ListOfGrievance.jsx';
import ListOfficers from './ListOfficers/ListOfficers.jsx';
import DetailOfOfficer from './DetailsOfOfficer/DetailOfOfficer.jsx';
function App() {
  return (
    <div >
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/complains" element={<Complains/>}/>
          <Route path="/grievance" element={<ListOfGrievance/>}/>
          <Route path="/listOfficers" element={<ListOfficers/>}/>
          <Route path="/detailOfofficer" element={<DetailOfOfficer/>}/>
        </Routes>
    </div>
  );
}

export default App;
