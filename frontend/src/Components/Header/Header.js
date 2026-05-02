import React from 'react';
import './Header.css'
import Logo from '../../assets/images/logo-large.svg'
import plus from '../../assets/images/icon-plus.svg'



const Header = () => {

    return (
        <>
            <div className="header">

                <div className="logo">
                    <img src={Logo} />

                    <div><p>Savings Tracker </p></div>
                </div>


                <div>
                    <button className="headerbutton"> <img src={plus} /> <p>New goal</p></button>
                </div>

            </div>


        </>
    )





}



export default Header