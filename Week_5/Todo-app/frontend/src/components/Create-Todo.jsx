import { useState } from "react";

function CreateTodo(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <>
            <div>
                <b>Title:</b> <br /><input type="text" placeholder="title" style={{padding: '10px', margin: '10px'}} onChange={(e) => {setTitle(e.target.value)}}></input><br /><br />
                <b>Descripition:</b> <br /><input type="text" placeholder="description"  style={{padding: '10px', margin: '10px'}} onChange={(e) => setDescription(e.target.value)}></input><br /><br />
                <button style={{padding: '10px', margin: '10px'}} onClick={ () =>
                    fetch('http://localhost:3001/todo',{
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            completed: false
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(res => alert('Added'))
                    .catch(res => alert('Problem detected'))
                }>Add a todo</button>
            </div>
        </>
    );
}
export default CreateTodo;