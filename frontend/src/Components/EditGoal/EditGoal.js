import React from 'react'
import './EditGoal.css'

const EditGoal = ({ setopenModal }) => {
    return (
        <div className="editContainer">

            <div className="editForm">
                <div className="editHeader">
                    <div>Edit</div>


                    <div><button onClick={() => setopenModal(false)}> X </button></div>
                </div>

                <hr />




                <div className="editInputs">

                    <div className="GoalInputContainer">
                        <label htmlFor='goal'>Goal name</label>
                        <input type="text" placeholder='Goal' />
                    </div>

                    <div className="GoalInputContainer">
                        <label htmlFor='goal'>Target amount</label>
                        <input type="text" placeholder='Goal' />
                    </div>



                    <div className="GoalInputContainer">
                        <label htmlFor='goal'>Deadline (Optional)</label>
                        <input type="text" placeholder='Goal' />
                    </div>



                </div>
            </div>

        </div>
    )
}

export default EditGoal
