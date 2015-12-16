import React from "react";
import { Link } from "react-router";
import '../styles/icons.css';

export default React.createClass({
    getInitialState() {
        return { className: '' };
    },

    componentDidMount() {
        switch (this.props.categoryId){
            case '1':
                this.setState({className: 'cpu'});
                break;
            case '2':
                this.setState({className: 'motherboard'});
                break;
            case '3':
                this.setState({className: 'video-card'});
                break;
            case '4':
                this.setState({className: 'ssd'});
                break;
            case '5':
                this.setState({className: 'power'});
                break;
            case '6':
                this.setState({className: 'cooler'});
                break;
            default:
                break;
        }
    },

    render() {
        return (
            <div>
                <Link to = {`category/${ this.props.categoryId }`}>
                    <i className={`${this.state.className}`}></i>
                    <div>{this.props.categoryName}</div>
                </Link>    
            </div>
        )
    }
});
