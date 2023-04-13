import TodoList from './TodoList'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Notepad, PlusCircle } from '@phosphor-icons/react'

interface Todo {
    content: string,
    checked: boolean
}

export function ProgressTodo() {

    const [ todos, setTodos ] = useState<Todo[]>([])

    const [ countTodoComplete, setCountTodoComplete ] = useState(0)

    const [newTodo, setNewTodo] = useState<Todo>({
        content: '',
        checked: false
    })

    function handleNewTodo(event: FormEvent) {
        event.preventDefault()
        setTodos([...todos, newTodo])

        setNewTodo(
            {
                content: '',
                checked: false
            }
        )
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTodo(
            {
                content: event.target.value,
                checked: false
            }
        )
    }

    function checkedTodo(todoToChecked: Todo) {
        const todosToCheck = todos.map(todo => {
            if(todo.content == todoToChecked.content) {
                todo.checked = !todo.checked
            }
            return todo
        })
        setTodos(todosToCheck)
        const todoComplete = todos.filter(todo => todo.checked)
        setCountTodoComplete(todoComplete.length)
    }

    function deleteTodo(todoToDelete: String) {
        const todoWithoutDelete = todos.filter(todo => todo.content != todoToDelete)
        setTodos(todoWithoutDelete)
        const todoComplete = todoWithoutDelete.filter(todo => todo.checked)
        setCountTodoComplete(todoComplete.length)
    }

    return (
        <>
            <div className="flex -translate-y-6 justify-center">
                <form onSubmit={handleNewTodo}>
                    <input 
                        value={newTodo.content} 
                        className="h-3 w-2 bg-gray-500 rounded-lg pl-2 text-gray-300 placeholder:text-gray-300" 
                        placeholder="Adicione uma nova tarefa"
                        onChange={handleNewCommentChange}
                    />
                    <button type="submit" className="h-3.5 w-3 bg-blue-300 rounded-lg p-2 ml-2 text-white">
                        <div className="flex justify-center items-center">
                            <strong>Criar</strong>
                            <PlusCircle size={18} className="ml-2" />
                        </div>
                    </button>
                </form>
            </div>

            <div className="grid items-center justify-center">
                
                <div className="flex items-center justify-center">
                    <div className="flex justify-between w-5 ">
                        <div className="flex">
                            <span className="text-blue-400">
                                <strong>Tarefas criadas</strong>
                            </span>
                            <span className="bg-gray-500 ml-2 px-3 rounded-full text-sm">{todos.length}</span>
                        </div>
                        <div className="flex">
                            <span className="text-blue-400">
                                <strong>Concluídas</strong>
                            </span>
                            <span className="bg-gray-500 ml-2 px-3 rounded-full text-sm">{countTodoComplete} de {todos.length}</span>
                        </div>
                    </div>
                </div>

                {todos.length <= 0 ? 
                    <div className="flex flex-col items-center justify-center h-4 text-gray-300">
                        <Notepad size={56} />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                    : 
                    <div>
                        {todos.map(todo => {
                        return (
                            <TodoList
                                key={todo.content}
                                content={todo.content}
                                checked={false}
                                checkedTodo={checkedTodo}
                                onDeleteTodo={deleteTodo}
                                />
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}

export default ProgressTodo