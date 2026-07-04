import React, { useState, useEffect } from "react";
import './Goals.css'
import { NavLink, navLink } from 'react-router-dom';



const Goals = () => {









    return (
        <div className="goalContainer">
            <div className="goalsTitle">
                <h1>Your goals</h1>


                <div className="filterButtons">
                    <button>  Filters</button>


                    <button>  Sort by</button>

                </div>
            </div>


            <div className="goalsBody">

                <NavLink to="/goals/:id " className="One goalitems">
                    <div >

                        <h1>MacBook Pro M4</h1>

                        <div className="InputContainer">
                            <h1>76%</h1>

                            <progress value={75} max={100} />

                        </div>


                        <div>


                            <div className="dateItem">
                                <h3>Due 1  Jun 2026</h3>
                            </div>
                        </div>

                    </div>
                </NavLink>


                <NavLink to="/goals/:id " className="Two goalitems">
                    <div className="TwoTwo" >
                        <h1>MacBook Pro M4</h1>

                        <div className="InputContainer">
                            <h1>76%</h1>

                            <progress value={75} max={100} />

                        </div>


                        <div>


                            <div className="dateItem">
                                <h3>Due 1  Jun 2026</h3>
                            </div>
                        </div>

                    </div>
                </NavLink>


                <NavLink to="/goals/:id" className="Three goalitems">
                    <div>
                        <h1>MacBook Pro M4</h1>

                        <div className="InputContainer">
                            <h1>76%</h1>

                            <progress value={75} max={100} />

                        </div>


                        <div>


                            <div className="dateItem">
                                <h3>Due 1  Jun 2026</h3>
                            </div>
                        </div>

                    </div>
                </NavLink>


                <NavLink to="/goals/:id" className="Four goalitems">
                    <div >
                        <h1>MacBook Pro M4</h1>

                        <div className="InputContainer">
                            <h1>76%</h1>

                            <progress value={75} max={100} />

                        </div>


                        <div>



                            <div className="dateItem">
                                <h3>Due 1  Jun 2026</h3>
                            </div>
                        </div>
                    </div>
                </NavLink>





            </div>
        </div >
    )
}


export default Goals
