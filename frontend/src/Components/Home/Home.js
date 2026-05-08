
import '../../App.css';
import Header from '../Header/Header';
import TotalCal from '../TotalCal/Totalcal';
import Goals from '../../Goals/Goal';
import { Route, Routes } from 'react-router';

function Home() {
    return (

        <div className="App">
            <TotalCal />
            <Goals />
        </div>
    );
}

export default Home;
