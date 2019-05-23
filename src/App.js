import React,{Component} from 'react';
import './App.css';
//component imports
import Todos from './Components/todos';
import NavBar from './Components/layout/NavBar';
import AddTodo from './Components/AddTodo';
import About from './Components/pages/About';
//libraries import
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  state = {
    todos:[]
  };
  
//todo delete function handler
    onDelete =(todoid) => {
      this.setState({todos:[...this.state.todos.filter(todo => todo.id !== todoid)]})
    };
//todo complete function handler  
  onChecked= (todoid) => {
   this.setState({todos:this.state.todos.map(todo => {
     if(todo.id === todoid){
       todo.completed = !todo.completed;
     };
     return todo;
   })})
  };

  //adding new todo items
  AddTodo = (title) =>{
    const newTodo = {
      id:Uuid.v4(),
      title,
      completed:false

    }
    this.setState({todos:[newTodo,...this.state.todos]});
  }

  render(){
    return (
      <Router>
      <div>
      <NavBar/> 
      <Route exact path="/" render={props => (
        <React.Fragment>
            
            <AddTodo AddTodo={this.AddTodo}/>
            <p className="text-center text-danger mt-5">{this.state.todos.length===0 ? 'It feels lonely in here, create a new task':' '}</p>
            <Todos todos={this.state.todos} onChecked={this.onChecked} onDelete={this.onDelete}/>
        </React.Fragment>
      )} />
      </div>
      <Route path="/about" component={About}/>
      </Router>
     );
  }
 
}

export default App;
