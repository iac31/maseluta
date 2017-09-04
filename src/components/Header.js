import React from 'react';
import {Block, Flex, InlineBlock} from 'jsxstyle';
import MediumScreen from "./MediumScreen";
import SmallScreen from "./SmallScreen";
import {colors, maxWidth} from "../styles";

const Header = () => (
    <MediumScreen>
        {
            isMediumScreen => (
                <SmallScreen>
                    {
                        isSmallScreen => (
                            <Block
                                backgroundColor={colors.wildSand}
                            >
                                <Flex
                                    maxWidth={maxWidth}
                                    margin="0 auto"
                                    flexDirection={isSmallScreen ? 'column' : 'row'}
                                    justifyContent="space-between"
                                >
                                    <Flex
                                        padding='25px 30px'
                                        flexDirection="row"
                                    >
                                        <Flex
                                            color={colors.java}
                                            fontSize="32px"
                                            marginRight="30px"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <i className="stm-icon-roundels"></i>
                                        </Flex>
                                        <Flex
                                            color={colors.tundora}
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Block component="strong"
                                                   fontSize="14px"
                                                   fontWeight="500"
                                            >
                                                Call Today 020 8567 0707
                                            </Block>
                                            <Block component="span"
                                                   fontSize="12px"
                                                   fontWeight="300"
                                            >
                                                51 Uxbridge Road, San Francisco W7 3PX
                                            </Block>
                                        </Flex>
                                    </Flex>
                                    <Flex
                                        flexDirection="row"
                                        padding='25px 30px'
                                    >
                                        <Flex
                                            color={colors.java}
                                            fontSize="32px"
                                            marginRight="30px"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <i className="stm-icon-clock"></i>
                                        </Flex>
                                        <Flex
                                            color={colors.tundora}
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Block component="strong"
                                                   fontSize="14px"
                                                   fontWeight="500"
                                            >
                                                Open Hours
                                            </Block>
                                            <Block component="span"
                                                   fontSize="12px"
                                                   fontWeight="300"
                                            >
                                                Mon - Sat: 8 am - 5 pm, Sunday: CLOSED
                                            </Block>
                                        </Flex>
                                    </Flex>
                                    <Flex
                                        backgroundColor={colors.java}
                                        color={colors.white}
                                        padding='25px 30px'
                                        flexDirection="row"
                                    >
                                        <Flex
                                            fontSize="32px"
                                            marginRight="30px"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <i className="stm-icon-calculator"></i>
                                        </Flex>
                                        <Flex
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Block component="strong"
                                                   fontSize="14px"
                                                   fontWeight="500"
                                            >
                                                Make an Appointment
                                            </Block>
                                            <Block component="span"
                                                   fontSize="12px"
                                                   fontWeight="300"
                                            >
                                                It's so fast
                                            </Block>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Block>
                        )
                    }
                </SmallScreen>
            )
        }
    </MediumScreen>
);

export default Header;