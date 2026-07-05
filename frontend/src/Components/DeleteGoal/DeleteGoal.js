import React from 'react'
import './DeleteGoal.css'

const DeleteGoal = ({ setdeleteGoal }) => {
    return (
        <div className="deleteContainer">


            <div className="deleteBody">
                <div className="deleteHeader">
                    <h3>Delete Macbook Pro M4?</h3>




                    <button className="sizeMe" onClick={() => setdeleteGoal(false)} > X</button>
                </div>


                <div className="deleteContent">
                    <p>This will permanently  delete this goal and all its deposit history. This cannot be undone</p>
                </div>

                <hr />

                <div className="deleteBottomButton">

                    <button onClick={() => setdeleteGoal(false)}>Delete Goal</button>

                    <button onClick={() => setdeleteGoal(false)}>Cancel</button>




                </div>
            </div>
        </div>
    )
}

export default DeleteGoal
