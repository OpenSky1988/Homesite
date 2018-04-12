import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

class NavItem extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e) {
        let page = e.target.getAttribute('page');
        let area = e.target.getAttribute('href');

        this.props.changePage(page, area);
    }
    
    render() {
        return (
        <li isActive={ this.props.isActive /*Apply certain styles on active button*/}>
            <Link
                to={ this.props.toRoute /* Route path */}
                className={ this.props.buttonType /*bn or blog*/} 
                page={ this.props.page /*main or blog*/} 
                href={ this.props.area /*optional - anchor to section on Main page*/ }
                onClick={ this.handlePageChange /*For all buttons - handles change of page*/}>
            { this.props.itemName /*Name of button for User*/}</Link>
        </li>
        );
    }
}

export default NavItem;