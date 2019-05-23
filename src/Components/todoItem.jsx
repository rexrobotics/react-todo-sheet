import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class TodoItem extends Component {

    getStyle = () => {
        if(this.props.todo.completed){
           var style = {
            margin:'15px 10px 1px 10px',
                borderBottom:'1px solid red',
                textDecoration:'line-through',
                opacity:0.5,
                transition:'all 200ms ease-in-out',
            }
        }
        else{
            style = {
                margin:'15px 10px 1px 10px',
                borderBottom:'0.5px solid rgb(23, 162, 184)',
                opacity:1,
                transition:'all 200ms ease-in-out',
                textDecoration:'none',
            }
        }
        return style
    }

    render() { 
        const{todo,onChecked,onDelete} = this.props;
        return ( 
        
            <main className="container">                
                <p className="p-2 rounded d-flex" style={this.getStyle()}>
                    <input onChange={() => onChecked(todo.id)} className="my-2 mx-2" type="checkbox"/>
                    {todo.title}
                    <button onClick={() => onDelete(todo.id)} className="btn text-danger ml-auto"><span className="fa fa-trash"></span></button>                  
                </p>
            </main>
           
         );
    }
}

TodoItem.propTypes ={
    todo:PropTypes.object.isRequired,
    onChecked:PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired,
}

 
export default TodoItem;