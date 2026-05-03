import React, { useState, useEffect } from "react";
import './Goals.css'



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

                <div className="One">
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


                <div className="Two">
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


                <div className="Three">
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


                <div className="Four">
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





            </div>
        </div>
    )
}


export default Goals
