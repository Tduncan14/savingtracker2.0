import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import TotalCal from './Components/TotalCal/Totalcal';
import Goals from './Goals/Goal';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Goalpage from './Components/GoalPage/Goalpage';

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />


        <Route path="/goals/:id" element={<Goalpage />}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
