import TodoList from './components/todolist'

export type TodoProps = {
  todos: {
    id: string
    name: string
    checked: boolean
  }[]
}
async function getTodos() {
  const response = await fetch('http://localhost:3333/todos', {
    cache: 'no-cache',
  })
  const todos = await response.json()

  return todos
}
export default async function Home() {
  const todos: TodoProps = await getTodos()
  return (
    <>
      <div>
        <TodoList todos={todos.todos} />
      </div>
    </>
  )
}
