import React from "react";
import { Link } from "react-router";
import { GET } from "../tools/xhr";

export default React.createClass({
    getInitialState() {
        return { categories: [{name: ''}] };
    },

    componentDidMount() {
        GET({
            url: 'getCategories',
            successCb: response => {
                this.setState({ categories: response });
            }
        });
    },

    render() {
        return (
            <ul>
                {this.state.categories.map(item => {
                    return <li key = {item.name}><Link to = '/categories' params = {{ id:item.id_category }}>{ item.name }</Link></li>
                })}
            </ul>
        )
    }
});
