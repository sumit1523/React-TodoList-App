import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-cnter">Todo List</h3>
                    <TodoItem />
                    <button type="button" className="btn btn-danger btn-block text-capitalize">Clear List</button>
                </ul>
            </div>
        )
    }
}
