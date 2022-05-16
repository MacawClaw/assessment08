import { useEffect, useState } from "react";
import AddAgents from "./AddAgents";
import ModifyAgents from "./ModifyAgents";

const apiUrl = "http://localhost:8080/api/agent";

function DisplayAgents() {

    const [agents, setAgents] = useState([]);

    function fetchAgents() {
        //making a get all request
        fetch(apiUrl)
            .then(response => {
                if (response.status === 200 || response.status === 204) {
                    return response.json();
                }
                return Promise.reject(`GET failed with status: ${response.status}`);
            })
            .then(setAgents)
            .catch(console.error);
    }

    useEffect(() => {
        fetchAgents();
    }, []);

    const addAgent = (firstName, middleName, lastName, dob, heightInInches) => {

        const agent = {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            dob: dob,
            heightInInches: heightInInches
        };

        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(agent)
        }

        console.log(init);

        fetch(apiUrl, init)
            .then(response => {
                if (response.status === 201) { // status CREATED
                    fetchAgents();
                    console.log("Addition Successful");
                } else {
                    return Promise.reject(`Add failed with status: ${response.status}`);
                }

            })
            .catch(console.error);
            
    };

    const removeAgent = (agent) => {


        fetch(`${apiUrl}/${agent.agentId}`, { method: "DELETE" })
            .then(response => {
                if (response.status === 204) { // status NO_CONTENT
                    fetchAgents();
                    console.log("Deletion Successful");
                } else {
                    return Promise.reject(`Delete failed with status: ${response.status}`);
                }

            })
            .catch(console.error);
            
    };

    
    const updateAgent = (agent) => {
        const init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(agent)
        }

        //console.log(init);

        fetch(`${apiUrl}/${agent.agentId}`, init)
            .then(response => {
                if (response.status === 204) { // status NO_CONTENT
                    fetchAgents();
                    console.log("Update Successful");
                } else {
                    return Promise.reject(`Update failed with status: ${response.status}`);
                }

            })
            .catch(console.error);
    };


    return (<>
        <h1>Field Agent Application</h1>
        <hr />

        <div>
            <h2>Agent List</h2>

            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col"><h4>Agent Id</h4></th>
                        <th scope="col"><h4>First Name</h4></th>
                        <th scope="col"><h4>Middle Name</h4></th>
                        <th scope="col"><h4>Last Name</h4></th>
                        <th scope="col"><h4>DOB</h4></th>
                        <th scope="col"><h4>Height (In)</h4></th>
                    </tr>
                </thead>

                {
                    agents.map(
                        a=> {
                            return(
                                <tbody key={a.agentId}>
                                        <ModifyAgents agent={a} key={a.agentId} removeAgent={removeAgent}
                                        updateAgent={updateAgent}/>
                                </tbody>
                            )
                        }
                    )
                }
            </table>
        </div>
        <hr/>

        <AddAgents addAgent={addAgent}/>
    </>);
}

export default DisplayAgents;