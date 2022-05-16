import { useState } from "react";

function ToDo({ todo, removeToDo, updateToDo }) {

    const [editMode, setEditMode] = useState(false);
    const [actualToDo, setActualToDo] = useState(todo);

    const handleDelete = () => removeToDo(todo);

    const toggleEdit = () => setEditMode(!editMode);

    const handleChange = (evt) => {
        const nextToDo = { ...actualToDo };
        nextToDo[evt.target.name] = evt.target.value;
        setActualToDo(nextToDo);
    };

    const handleUpdate = () => {
        updateToDo(actualToDo);
        toggleEdit();
    }

    return (
        <div className="row mb-2">
            <div className="col-4">
                {editMode ?
                    <input type="text" name="description" id="description" className="form-control"
                        value={actualToDo.description} onChange={handleChange} />
                    : todo.description}
            </div>
            <div className="col-8">
                {editMode ? <button className="btn btn-primary me-2" onClick={handleUpdate}>Save</button>
                    : <button className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>}
                <button className="btn btn-secondary" onClick={toggleEdit}>{editMode ? "Cancel" : "Edit"}</button>
            </div>
        </div>
    );
}

export default ToDo;