import { useState } from 'react';
import { useGetTodoQuery } from './store/apis';

const TodoApp = () => {

    //const { data: todos = [], isLoading } = useGetTodosQuery();

    const [ todoId, setTodoId ] = useState(1);
    const { data: todo, isLoading , error} = useGetTodoQuery(todoId);

    console.log(todo)

    const nextTodo = () => {
      setTodoId(todoId + 1);
    }
    
    const prevTodo = () => {
        if (todoId > 1) {
            setTodoId((prevId) => prevId - 1);
        }
    };

    if (error) {
        return <div>Error fetching todo: {error.message}</div>;
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />

            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            <button onClick={ prevTodo }>Prev Todo</button>
            <button onClick={ nextTodo }>Next Todo</button>
        </>
    );
};

export default TodoApp;
