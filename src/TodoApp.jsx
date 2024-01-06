import { useState } from 'react';
import { useGetTodoQuery } from './store/apis';

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);

    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    const nextTodo = () => {
        setTodoId(todoId + 1);
    };

    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Todos - RTK Query</h1>
            <hr />
            <h4 className="mb-4">isLoading: {isLoading ? (<div className="d-flex justify-content-center"><span className="loader"></span></div>) : 'false'}</h4>

            <pre className="mb-4 bg-light p-3 rounded">{JSON.stringify(todo, null, 2)}</pre>

            <div className="d-flex justify-content-between">
                <button
                    className="btn btn-primary"
                    onClick={prevTodo}
                    disabled={todoId === 1}
                >
                    Previous Todo
                </button>
                <button
                    className="btn btn-primary"
                    onClick={nextTodo}
                >
                    Next Todo
                </button>
            </div>
        </div>
    );
};