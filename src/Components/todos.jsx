import React, { Component } from 'react';
import TodoItem from './todoItem';
import PropTypes from 'prop-types';
// import Uuid from 'uuid';

class Todos extends Component {
    render() { 
        return (  
            <div>
            {this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} onChecked = {this.props.onChecked} onDelete={this.props.onDelete}/>)}
            </div>    
        );
    }
}

Todos.propTypes ={
    todos:PropTypes.array.isRequired,
    onChecked:PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired,
}

export default Todos;