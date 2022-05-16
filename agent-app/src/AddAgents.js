import { useState } from "react";

function AddAgents({ addAgent }) {

    const [agent, setAgent] = useState({
        firstName:"",
        middleName:"",
        lastName:"",
        dob:"",
        heightInInches:""
    });

    //const [editIndex, setEditIndex] = useState();

    //console.log("test message");

    const handleChange = (evt) => {

        const newAgent = {...agent};
        newAgent[evt.target.name] = evt.target.value;

        setAgent(newAgent);
    };

    
    const handleSubmit = (evt) => {
        
        evt.preventDefault();
        addAgent(agent.firstName, agent.middleName, agent.lastName, agent.dob, agent.heightInInches);

        setAgent({
            firstName:"",
            middleName:"",
            lastName:"",
            dob:"",
            heightInInches:""
        });

        /*
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(agent)
        }

        console.log(init);
        */
        
        /*
        addAgent({
            firstName:"",
            middleName:"",
            lastName:"",
            dob:"",
            heightInInches:""
        });
        setAgent("");
        */
        
       console.log("Submission is working to some extent");
    };
    

    return (
        <div>
            <h2>Add Agent</h2>
            <form class="text-right" onSubmit={handleSubmit}>
                <div class="form-group">
                    <label htmlFor='firstName'>First Name:</label>
                    <input class="form-control" id="firstName" name="firstName" type="text" placeholder="John"
                    value={agent.firstName} onChange={handleChange}/>
                </div>

                <div class="form-group">
                    <label htmlFor='middleName'>Middle Name:</label>
                    <input class="form-control" id="middleName" name="middleName" type="text" placeholder="A"
                    value={agent.middleName} onChange={handleChange}/>
                </div>

                <div class="form-group">
                    <label htmlFor='lastName'>Last Name:</label>
                    <input class="form-control" id="lastName" name="lastName" type="text" placeholder="Smith"
                    value={agent.lastName} onChange={handleChange}/>
                </div>

                <div class="form-group">
                    <label htmlFor='dob'>Date of Birth:</label>
                    <input class="form-control" id="dob" name="dob" type="text" placeholder="YYYY-MM-DD"
                    value={agent.dob} onChange={handleChange}/>
                </div>

                <div class="form-group">
                    <label htmlFor='heightInInches'>Height (In):</label>
                    <input class="form-control" id="height" name="heightInInches" type="text" placeholder="XX"
                    value={agent.heightInInches} onChange={handleChange}/>
                </div>

                <div className="col-1">
                    <button className="btn btn-primary" type="submit">Add Agent</button>
                </div>

            </form>
        </div>
    );
}

export default AddAgents;