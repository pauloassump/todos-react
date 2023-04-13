import { Trash } from '@phosphor-icons/react';
import { ChangeEvent, useState } from 'react'

interface TodoProps {
    content: string;
    checked: boolean;
    checkedTodo: (todo: any) => void;
    onDeleteTodo: (todo: any) => void;
}



export function TodoList({content, checkedTodo, onDeleteTodo}: TodoProps) {

    const [todoCheck, setTodoChek] = useState(Boolean);

    function handleSelectTodo(event: ChangeEvent<HTMLInputElement>) {
        setTodoChek(event.target.checked);
        checkedTodo({
            content: content,
            checkedTodo: event.target.checked
        })
    }

    function handleDeleteTodo() {
        onDeleteTodo(content)
    }

    return (
        <div className="w-5 h-5 bg-gray-500 rounded-lg flex items-center justify-between px-4 mb-2 mt-2">
            
            <input 
                type="checkbox"
                onChange={handleSelectTodo}
                />

            <p className={todoCheck ? 'line-through' : ''}>{content}</p>

            <button type="submit" onClick={handleDeleteTodo}>
                <Trash size={24} />
            </button>
        </div>
    )
}

export default TodoList