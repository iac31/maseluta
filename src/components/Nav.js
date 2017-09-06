import React, {Component} from 'react';
import Logo from '../images/logo.jpg';
import {NavLink, Link} from 'react-router-dom';
import {colors} from "../styles";

let navItems = [
    {
        firstLevel: 'Home',
        secondLevel: ''
    },
    {
        firstLevel: 'Despre Familie',
        secondLevel: ['a', 'b', 'c']
    },
    {
        firstLevel: 'Services',
        secondLevel: ''
    },
    {
        firstLevel: 'Blog',
        secondLevel: ''
    },
    {
        firstLevel: 'Pages',
        secondLevel: ['d', 'e']
    },
    {
        firstLevel: 'Contact',
        secondLevel: ''
    }
];

class NavItem extends Component {
    render() {
        return (
            <div className="nav-item">
                <NavLink
                    to={`/${this.props.item.firstLevel.toLowerCase()}`}
                    activeStyle={{
                        fontWeight: 'bold',
                        color: colors.java
                    }}
                >
                    <div>
                        {this.props.item.firstLevel}
                    </div>
                </NavLink>
            </div>
        )
    }
}

class NavItemMobile extends Component {
    render() {
        return (
            <div className="nav-item">
                <NavLink
                    to={`/${this.props.item.firstLevel.toLowerCase()}`}
                >
                    <div>
                        {this.props.item.firstLevel}
                    </div>
                </NavLink>
            </div>
        )
    }
}

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false
        }
    }

    toggle() {
        this.setState({
            isVisible: !this.state.isVisible
        });
        console.log('click')
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="logo">
                        <Link to="/home">
                            <img width="172px" src={Logo} alt="Logo"/>
                        </Link>
                    </div>
                    <div className="hamburger">
                                            <span onClick={this.toggle.bind(this)}>
                                                &#9776;
                                            </span>
                    </div>
                    <div className="menu">
                        {navItems.map(item =>
                            <div onClick={this.toggle.bind(this)}>
                                <NavItem key={item} item={item}/>
                            </div>
                        )}
                    </div>
                </nav>
                {/*Mobile menu*/}
                {this.state.isVisible ?
                    <div className="mobile-menu">
                        {navItems.map(item =>
                            <div className="mobile-item" onClick={this.toggle.bind(this)}>
                                <NavItemMobile key={item} item={item}/>
                            </div>
                        )}
                    </div> : null}
                {/*Mobile menu*/}
            </div>
        )
    }
}

export default Nav;