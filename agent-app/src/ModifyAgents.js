import { useState } from "react";

function ModifyAgents({ agent, removeAgent, updateAgent }) {
    const [editMode, setEditMode] = useState(false);
    const [actualAgent, setActualAgent] = useState(agent);

    const handleDelete = () => removeAgent(agent);

    const toggleEdit = () => setEditMode(!editMode);

    const handleChange = (evt) => {
        const nextAgent = { ...actualAgent };
        nextAgent[evt.target.name] = evt.target.value;
        setActualAgent(nextAgent);

        console.log(nextAgent)
    };

    const handleUpdate = () => {
        updateAgent(actualAgent);
        toggleEdit();
    }

    return(
        <tr>
            <th scope="row">{agent.agentId}</th>
            <td>
                {editMode ?
                    <input type="text" name="firstName" id="firstName" className="form-control"
                    value={actualAgent.firstName} onChange={handleChange} />
                : actualAgent.firstName}    
            </td>
            <td>
                {editMode ?
                    <input type="text" name="middleName" id="middleName" className="form-control"
                    value={actualAgent.middleName} onChange={handleChange} />
                : actualAgent.middleName}    
            </td>
            <td>
                {editMode ?
                    <input type="text" name="lastName" id="lastName" className="form-control"
                    value={actualAgent.lastName} onChange={handleChange} />
                : actualAgent.lastName}    
            </td>
            <td>
                {editMode ?
                    <input type="text" name="dob" id="dob" className="form-control"
                    value={actualAgent.dob} onChange={handleChange} />
                : actualAgent.dob}    
            </td>
            <td>
                {editMode ?
                    <input type="text" name="heightInInches" id="heightInInches" className="form-control"
                    value={actualAgent.heightInInches} onChange={handleChange} />
                : actualAgent.heightInInches}    
            </td>
            <td>
                {editMode ? <button className="btn btn-primary me-2" onClick={handleUpdate}>Save</button>
                : <button className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>}
            </td>
            <td>
                <button className="btn btn-secondary" onClick={toggleEdit}>{editMode ? "Cancel" : "Edit"}</button>
            </td>
        </tr>
    );
}

export default ModifyAgents;

//{editMode ? <button className="btn btn-primary me-2" >Save</button>
//: <button className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>}

//onClick={handleUpdate}

/*
<th scope="row">{agent.agentId}</th>
            <td>{agent.firstName}</td>
            <td>{agent.middleName}</td>
            <td>{agent.lastName}</td>
            <td>{agent.dob}</td>
            <td>{agent.heightInInches}</td>
            */