import React, {Component} from 'react';
import TodoHeader from './header';
import TodoList from './list';
import TodoFooter from './footer'

export default class App extends Component {
    render() {
        return (
            <section className="todoapp">
                <TodoHeader/>
                <TodoList/>
                <TodoFooter/>
            </section>
        )
    }
}
