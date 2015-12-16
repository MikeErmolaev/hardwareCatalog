import React from "react";
import { Link } from "react-router";
import { GET } from "../tools/xhr";

export default React.createClass({
    getInitialState() {
        return { list: [] };
    },

    componentDidMount() {
        GET({
            url: `/getList/${this.props.params.id}`,
            successCb: response => {
                this.setState({ list: response });
            }
        });
    },

    render() {
        return (
            <ul>
                {this.state.list.map(item => {
                    return <li key = {item.name}>{ item.name }</li>
                })}
            </ul>
        )
    }
});
