import React, {Component} from 'react';
import {Block, Flex} from 'jsxstyle';
import Logo from '../images/logo.jpg';
import MediumScreen from "./MediumScreen";
import SmallScreen from "./SmallScreen";
import {NavLink} from 'react-router-dom';
import {colors, maxWidth} from "../styles";
import {Link} from 'react-router-dom';

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
                    style={{
                        textDecoration: 'none',
                        color: colors.tundora
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
        })
    }

    render() {
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
        return (
            <MediumScreen>
                {isMediumScreen => (
                    <SmallScreen>
                        {isSmallScreen => (
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
                                            <div>
                                                <NavItem key={item} item={item}/>
                                            </div>
                                        )}
                                    </div>
                                </nav>
                                {/*Mobile menu*/}
                                <Flex
                                    display={isMediumScreen ? this.state.isVisible ? 'block' : 'none' : 'none'}
                                >
                                    {navItems.map(item =>
                                        <Flex
                                            alignItems="center"
                                            color={colors.white}
                                            backgroundColor={colors.java}
                                            textTransform="uppercase"
                                            fontSize="18px"
                                            fontWeight="500"
                                            padding="21px 30px"
                                            borderBottom="1px solid"
                                            borderBottomColor={colors.viking}
                                        >
                                            <NavItemMobile key={item} item={item}/>
                                        </Flex>
                                    )}
                                </Flex>
                                {/*Mobile menu*/}
                            </div>
                        )}
                    </SmallScreen>
                )}
            </MediumScreen>
        )
    }
}

export default Nav;