import { useState, useEffect } from 'react';
import './Goalpage.css'
import { NavLink } from 'react-router';


const Goalpage = ({ goals }) => {






    return (
        <div className="goalpageContainer">

            <div className="goalPageHeader">

                <div className="leftBack">
                    <div>
                        <button> <NavLink to="/">Back</NavLink></button>
                    </div>


                </div>


                <div className='spliteMeButton'>
                    <button>Edit goal</button>



                    <button>Delete goal</button>
                </div>
            </div>

            <div className="goalData">
                <h1>MacBook PRO M4</h1>
                <div className="goalDataTitle">
                    <h3>Due 1 Jun 2026</h3>
                    <h3>Created Nov 15, 2026</h3>
                </div>

            </div>



            {/* end goal page header */}


            <div className="goaldataBothLR">


                <div className="leftData">



                    <div className="goalDataInfo">

                        <div className="goalDataLeft">
                            <div className="goalDataLeftTitle">
                                <h1>76%</h1>

                                <h3>$599.00 remaining</h3>
                            </div>


                            <div className="goalDataLeftInput">

                                <div className="InputContainer">
                                    <h1>76%</h1>

                                    <progress value={75} max={100} />

                                </div>


                                <div className="goalDataMoneySaved">
                                    <h3>$1,900.00</h3>
                                    <h4>Saved so far</h4>
                                </div>

                                <div className="goalDataMoneyTotal">
                                    <h3> of $2,499.00</h3>
                                    <h4>Target</h4>
                                </div>



                            </div>

                        </div>


                        <div className="goalDataRight">

                        </div>


                    </div>


                    <div className="addDeposit">

                        <h1>Add deposit</h1>

                        <div className="addDepositContainer">

                            <label for="amountAdded">
                                Amount
                            </label>

                            <input type="number" id="amountAdded" name="amountAdded" />


                            <label for="amountAdded">
                                Note (optional)
                            </label>

                            <input type="number" id="amountAdded" name="amountAdded" />


                            <button>Add Funds</button>

                        </div>
                    </div>
                </div>

                <div className="dataRight">

                    <div className="dataRightHead">
                        <h1>Deposit History</h1>

                        <h6> 7 deposits</h6>
                    </div>

                    <div className="depositHistory">

                    </div>

                </div>

            </div>




        </div>
    )
}


export default Goalpage