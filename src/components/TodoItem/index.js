import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodoItem} = props
  const {id, title} = eachTodo

  const deleteItem = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="list-item">
      <div className="item-container">
        <p className="item">{title}</p>
      </div>
      <div className="btn-container">
        <button className="delet-btn" onClick={deleteItem}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
