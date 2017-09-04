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
            <Flex
                /*position="relative"*/
            >
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
                    <Block
                        padding="0 20px"
                    >
                        {this.props.item.firstLevel}
                    </Block>
                </NavLink>
               {/* <Block
                    position="absolute"
                    top="20px"
                    left="45%"
                >
                    <Block>
                        {this.props.item.secondLevel[0]}
                    </Block>
                    <Block>
                        {this.props.item.secondLevel[1]}
                    </Block>
                    <Block>
                        {this.props.item.secondLevel[2]}
                    </Block>
                </Block>*/}
            </Flex>
        )
    }
}

class NavItemMobile extends Component {
    render() {
        return (
            <NavLink
                to={`/${this.props.item.firstLevel.toLowerCase()}`}
                style={{
                    textDecoration: 'none',
                }}
            >
                <Block
                    padding="0 20px"
                    color={colors.white}
                    backgroundColor={colors.java}
                >
                    {this.props.item.firstLevel}
                </Block>
            </NavLink>
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
            /*'Home', 'Despre Familie', 'Services', 'Blog', 'Pages', 'Contact'*/
        ];
        return (
            <MediumScreen>
                {isMediumScreen => (
                    <SmallScreen>
                        {isSmallScreen => (
                            <Block>
                                <Flex
                                    justifyContent='space-between'
                                    maxWidth={maxWidth}
                                    margin="0 auto"
                                >
                                    <Block
                                        padding="25px 0 25px 30px"
                                    >
                                        <Link to="/home">
                                            <img width="172px" src={Logo} alt="Logo"/>
                                        </Link>
                                    </Block>
                                    <Block
                                        display={isMediumScreen ? 'flex' : 'none'}
                                        alignItems="center"
                                        color={colors.java}
                                        marginRight="30px"
                                    >
                                            <span onClick={this.toggle.bind(this)}>
                                                &#9776;
                                            </span>
                                    </Block>
                                    <Flex
                                        display={isMediumScreen ? 'none' : 'flex'}
                                        color={colors.tundora}
                                        textTransform="uppercase"
                                        fontSize="14px"
                                        fontWeight="500"
                                        paddingRight="30px"
                                    >
                                        {navItems.map(item =>
                                            <Flex
                                                alignItems="center"
                                            >
                                                <NavItem key={item} item={item}/>
                                            </Flex>
                                        )}
                                    </Flex>
                                </Flex>
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
                            </Block>
                        )}
                    </SmallScreen>
                )}
            </MediumScreen>
        )
    }
}

export default Nav;