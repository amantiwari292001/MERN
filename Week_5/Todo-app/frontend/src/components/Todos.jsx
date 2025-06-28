function Todos({ todosData }) {
    return (
        <div>
            {todosData.map((todo) => {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{!todo.completed ? 'Pending' : 'Completed'}</button>
                    </div>
                )
            })}
        </div>
  );
}

export default Todos;