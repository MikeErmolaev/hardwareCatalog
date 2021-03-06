import React from "react";
import { Link } from "react-router";
import { GET } from "../tools/xhr";
import Tile from "./Tile";

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
                    return <Tile key = {item.name} categoryId = {`${ item.id_category }`} categoryName = {item.name} />
                })}
            </ul>
        )
    }
});
