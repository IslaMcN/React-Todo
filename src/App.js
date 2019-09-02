import React from 'react';
import TodoForm from '../src/components/TodoComponents/TodoForm';
import TodoList from '../src/components/TodoComponents/TodoList';
import Title from '../src/components/TodoComponents/Title';


window.id = 0;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  addTodo(value){
    const todo = {text: value, id: window.id++}
    this.state.data.push(todo);
    this.setState({data: this.state.data});
  }
  handleRemove(id){
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    this.setState({data: remainder});
  }
  render() {
    return (
      <div>
        <Title />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
          />
      </div>
    );
  }
}

export default App;


