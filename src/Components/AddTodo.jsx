import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state={
        title:" ",
    }
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.title !== ' '){
            this.props.AddTodo(this.state.title);
            this.setState({title:' '});
        }
    }
    render() { 
        return ( 
            <form  onSubmit={this.onSubmit} className="container pl-4 mt-3 position-static">
            <div className="row w-100">
                <div className="col-lg-3 text-right">
                <label htmlFor="" className="text-right">New todo:</label>
                </div>
                <div className="col-lg-6">
                <input onChange={this.onChange} className="form-control" type="text" name="title" value={this.state.title} placeholder="add todo..."/>                 
                </div>
                <div className="col-lg-2">
                <button className="btn btn-info text-capitalize">Add Todo</button> 
                    </div>
            </div>
           
            </form>
         );
    }
}
AddTodo.propTypes = {
    AddTodo:PropTypes.func.isRequired,
}
export default AddTodo;