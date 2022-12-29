import {useState} from 'react';


import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';
import {useAppDispatch} from "./store/hook";


function App(): JSX.Element {
    const [text, setText] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleAction = (): void => {
        if(text.trim().length) {
            dispatch(addTodo({text}));
            setText('');
        }
    }

    return (
        <div className='App'>
            <NewTodoForm
                value={text}
                updateText={setText}
                handleAction={handleAction}
            />
            <TodoList />
        </div>
    );
}

export default App;
