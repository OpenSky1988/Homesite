import React, {Component} from 'react';
import './NavItem.css';

class NavItem extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e) {
        this.props.changePage(e.target.value);
    }
    
    render() {
        return (
        <li isActive={ this.props.isActive /*Apply certain styles on active button*/}>
            <button
                className={ this.props.buttonType /*bn or blog*/} 
                value={ this.props.page /*main or blog*/} 
                href={ this.props.area /*optional - anchor to section on Main page*/ }
                onClick={ this.handlePageChange /*For all buttons - handles change of page*/}>
            { this.props.itemName /*Name of button for User*/}</button>
        </li>
        );
    }
}

export default NavItem;