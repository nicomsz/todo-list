import TodoList from './components/todolist'
type Todo = {
  id: string
  name: string
  checked: string
}
const config = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}
const todos: Todo[] = []
fetch('http://localhost:3333/todos', config)
  .then((response) => response.json())
  .then((data) => {
    data.forEach(({ todo }) => {
      todos.push(todo)
    })
    // Aqui, você pode trabalhar com o array completo de todos, já preenchido com os dados da API
    console.log([{ todos }])
  })
export default function Home() {
  return (
    <>
      <div>
        <TodoList todos={{ todos }} />
      </div>
    </>
  )
}
