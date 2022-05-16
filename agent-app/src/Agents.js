//NOTE:
//THIS SCRIPT IS NOT PART OF THE APPLICATION AND ONLY USED
//AS A SPACE TO WORK OUT VARIOUS APPROACHES

import React, { useEffect, useState } from 'react';

function Agents() {
    const [agents, setAgents] = useState([]);
    const [editIndex, setEditIndex] = useState();
    const [formData, setFormData] = useState({
        firstName:"",
        middleName:"",
        lastName:""
    })

    useEffect(() => {
        //make a get all request
        fetch("http://localhost:8080/api/agent")
        .then(resp=>resp.json())
        .then(data=> {
            setAgents(data);
        })
    }, []);

    const handleEdit = (id) => {
        console.log(`Edits ${id}`);
        setEditIndex(id);

        //setFormData(); to have data for the agent we are editing
        //hint, the one with this id
    }

    const handleDelete = (id) => {
        //delete request
        console.log(`Deletes ${id}`);
    }

    const handleFormChange = (evt) => {
        //update our formData state with user value

    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(editIndex) {
            //request for editing
            console.log(`Currently editing agent ${editIndex}`);
        } else {
            //request for creating
            console.log(`adds a new agent`);
        }
    }

    return(
        <div>
            <h3>Agents</h3>
            <hr/>

            <div>
                <h2>Display Agent</h2>
                {
                    agents.map(a => {
                        return(
                            <div>
                                <span>{a.firstName} {a.middleName} {a.lastName} <button onClick={() => {handleEdit(a.agentId)}}>Edit</button><button onClick={()=>{handleDelete(a.agentId)}}>Delete</button></span>
                            </div>
                        )
                    })
                }

            </div>
            <hr/>

            <div>
                <h2>{(editIndex) ? "Edit" : "Cancel"} Agent</h2>
                <form>
                    <div>
                        <label htmlFor='firstName'>First Name:</label>
                        <input id="firstName" onChange={handleFormChange} name="firstName" type="text"/>
                    </div>

                    <div>
                        <label htmlFor='middleName'>Middle Name:</label>
                        <input id="middleName" onChange={handleFormChange} name="middleName" type="text"/>
                    </div>

                    <div>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input id="lastName" onChange={handleFormChange} name="lastName" type="text"/>
                    </div>

                    <button onClick={handleSubmit}>{(editIndex) ? "Edit":"Create"} An Agent</button>

                </form>
            </div>

        </div>
    );
}

export default Agents;