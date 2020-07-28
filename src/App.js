import React, { Component } from 'react'
import todosData from './todosData'
import TodoItem from './TodoItem'

class App extends Component {
    state = {
            todo : todosData
        }
     
    handleChange = (id) => {
        this.setState(prevState => {
            const updatedState = prevState.todo.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            });return {
                todo : updatedState
            }
        })
    }
    render () {
        const todosComponent = this.state.todo.map(item =>{
            return(
                <TodoItem 
                    className='todo-list'
                    key={item.id}
                    item={item}
                    handleChange={this.handleChange}/>
            )
        })
        return (
            <div>
                {todosComponent}
            </div>
        )
    }
}
export default App