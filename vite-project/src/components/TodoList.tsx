import TodoItem from './TodoItem';
import {useAppSelector} from "../store/hook";

const TodoList = () => {
    const todos = useAppSelector(state => state.todos.todos);

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                />
            ))}
        </ul>
    );
};

export default TodoList;