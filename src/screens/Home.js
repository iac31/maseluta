import React, {Component} from 'react';
import {Block, Flex} from 'jsxstyle';
import {colors, maxWidth} from "../styles";
import SliderSample from '../images/slider.jpg';
import MediumScreen from '../components/MediumScreen';
import SmallScreen from '../components/SmallScreen';
import Subscription from '../images/Subscription.jpg';
import Cert1 from '../images/cert1.jpg';
import Cert2 from '../images/cert2.jpg';
import Cert3 from '../images/cert3.jpg';

let iconBoxes = [
    {
        title: 'Dental Implants',
        text: 'Pre-order today just for $879 per tooth',
        icon: 'stm-icon-tooth-1',
        color: colors.java
    },
    {
        title: 'Cosmetic Braces',
        text: 'Affordable french braces for kids and adults',
        icon: 'stm-icon-tooth-2',
        color: colors.tanHide
    },
    {
        title: 'Teeth Whitening',
        text: 'Top standards and high quality',
        icon: 'stm-icon-tooth-3',
        color: colors.blueBayoux
    }
];

let iconAdvantages = [
    {
        icon: 'stm-icon-computer',
        title: 'Accepting Insurance\n' +
        'Cards',
        text: 'Our clinic can easily accept the customers with insurance cards and create the history of cases for each.'
    },
    {
        icon: 'stm-icon-tooth-4',
        title: 'Using Innovative\n' +
        'Technology',
        text: 'All our surgeries are furnished with state of the art equipment and maintained at the highest standards.'
    },
    {
        icon: 'stm-icon-tooth-5',
        title: 'Guarantee Success\n' +
        'of Treatments',
        text: 'Most of our treatments are covered by a long term guarantee which will be discussed with you before beginning treatment.'
    },
    {
        icon: 'stm-icon-sertificate',
        title: 'Certified Dentist\n' +
        'Doctors',
        text: 'With over 30 years of dental experience and experience with implants, we are experts in all facets of dentistry.'
    }
];

const IconBox = () => (
    <MediumScreen>
        {isMediumScreen => (
            <SmallScreen>
                {isSmallScreen => (
                    <Flex flexDirection={isSmallScreen ? 'column' : 'row'}>
                        {iconBoxes.map(item => (
                            <Flex
                                flexDirection="row"
                                backgroundColor={item.color}
                                color={colors.white}
                                padding="45px 40px"
                                hoverTransform="translateY(-10px)"
                                transition="all 0.2s ease-in"
                                marginTop={isMediumScreen ? '' : '-100px'}
                                zIndex="1"
                            >
                                <Flex
                                    flexDirection="column"
                                >
                                    <Block component="h4"
                                           fontSize="20px"
                                           fontWeight="500"
                                           padding="0"
                                           margin="0 0 10px"
                                    >
                                        {item.title}
                                    </Block>
                                    <Block component="p"
                                           fontSize="16px"
                                           lineHeight="24px"
                                    >
                                        {item.text}
                                    </Block>
                                </Flex>
                                <Flex
                                    alignItems="center"
                                    fontSize="110px"
                                    paddingLeft="10px"
                                >
                                    <i className={item.icon}></i>
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>
                )}
            </SmallScreen>
        )}
    </MediumScreen>
);

const AboutUsZone = () => (
    <MediumScreen>
        {isMediumScreen => (
            <SmallScreen>
                {isSmallScreen => (
                    <Flex
                        maxWidth={maxWidth}
                        margin="0 auto"
                        flexDirection="row"
                        padding="0 30px"
                    >
                        <Block
                            width="85%"
                            paddingTop="50px"
                            paddingBottom="50px"
                        >
                            <Block component="h2"
                                   lineHeight="60px"
                                   fontWeight="300"
                                   fontSize="48px"
                                   marginTop="0"
                                   color={colors.tundora}
                            >
                                About Us
                            </Block>
                            <Block component="h4"
                                   fontSize="30px"
                                   color={colors.silver}
                                   fontWeight="400"
                                   fontStyle="italic"
                            >
                                Meet Dr. Redisson
                            </Block>
                            <Block component="figure"
                                   margin="0.4em 30px 30px 0"
                                   float="left"
                                   width="300px"
                            >
                                <img src={Subscription} alt="subscription" width="100%"/>
                                <Block component="figcaption"
                                       color={colors.silver}
                                       fontSize="12px"
                                       lineHeight="18px"
                                       padding="20px 0 0"
                                >
                                    Dr. Redisson with a patient
                                </Block>
                            </Block>
                            <Block
                                lineHeight="30px"
                                fontWeight="300"
                                fontSize="18px"
                                color={colors.grey}
                                paddingRight="100px"
                            >
                                <Block component="p">
                                    Our Dental Clinic is dedicated to providing the most up to date general, orthodontic
                                    and family
                                    dentistry.
                                </Block>
                                <Block component="p">
                                    Our Clinic has grown to provide a world class facility for the treatment of tooth
                                    loss, dental
                                    cosmetics and advanced restorative dentistry.
                                </Block>
                                <Block component="p">
                                    We are among the most qualified implant providers in the USA with over 35 years of
                                    quality
                                    training
                                    and experience.
                                </Block>
                            </Block>
                        </Block>
                        <Flex
                            width="15%"
                            backgroundColor={colors.wildSand}
                            padding="50px 60px 70px 60px"
                            color={colors.tundora}
                            alignItems="center"
                            flexDirection="column"
                        >
                            <Block component="h5"
                                   lineHeight="24px"
                                   fontWeight="500"
                                   fontSize="18px"
                                   textAlign="center"
                            >
                                Certififcates of completion
                            </Block>
                            <Block padding="15px 0">
                                <img src={Cert1} alt="cert1"/>
                            </Block>
                            <Block padding="15px 0">
                                <img src={Cert2} alt="cert2"/>
                            </Block>
                            <Block padding="15px 0">
                                <img src={Cert3} alt="cert3"/>
                            </Block>
                        </Flex>
                    </Flex>
                )}
            </SmallScreen>
        )}
    </MediumScreen>
);

const OurAdvantages = () => (
    <MediumScreen>
        {isMediumScreen => (
            <SmallScreen>
                {isSmallScreen => (
                    <Block
                        backgroundColor={colors.java}
                        width="100%"
                    >
                        <Block
                            maxWidth={maxWidth}
                            padding="60px 30px 40px 30px"
                            margin="0 auto"
                            color={colors.white}
                        >
                            <Block component="h2"
                                   margin="0 0 70px 0"
                                   lineHeight="60px"
                                   fontWeight="300"
                                   fontSize="48px"
                            >
                                Our Advantages
                            </Block>
                            <Flex
                                flexWrap="wrap"
                            >
                                {iconAdvantages.map(item => (
                                    <Flex
                                        flexDirection="column"
                                        padding="0 2% 0 0"
                                        width={isMediumScreen ? isSmallScreen ? '98%' : '48%' : '23%'}
                                        flexGrow="1"
                                    >
                                        <Block
                                            fontSize="52px"
                                        >
                                            <i className={item.icon}></i>
                                        </Block>
                                        <Block component="h4"
                                               fontSize="24px"
                                               fontWeight="300"
                                               flexGrow="1"
                                        >
                                            {item.title}
                                        </Block>
                                        <Block component="p"
                                               fontSize="16px"
                                               lineHeight="24px"
                                               fontWeight="400"
                                               color="rgba(255,255,255,0.5)"
                                               flexGrow="1"
                                        >
                                            {item.text}
                                        </Block>
                                    </Flex>
                                ))}
                            </Flex>
                        </Block>
                    </Block>
                )}
            </SmallScreen>
        )}
    </MediumScreen>
);

class Slider extends React.Component {
    render() {
        return (
            <Flex className="slider-wraper"
                  width="100%"
                  height="20vh"
                  overflow="hidden"
                  textAlign="center"
                  position="relative"
            >
                <Block backgroundImage={`url(${Cert1})`}>Text 1</Block>
                <Block backgroundImage={`url(${Cert2})`}>Text 2</Block>
                <Block backgroundImage={`url(${Cert3})`}>Text 3</Block>
                <Block component="span"
                       left="30px"
                >
                    &#8249;
                </Block>
                <Block component="span"
                       right="30px"
                >
                    &#8250;
                </Block>
            </Flex>
        )
    }
}

const Home = () => (
    <MediumScreen>
        {isMediumScreen => (
            <SmallScreen>
                {isSmallScreen => (
                    <Block>
                        <Block
                            backgroundImage={`url(${SliderSample})`}
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            backgroundPosition="center"
                            height="65vh"
                        />
                        <Block
                            maxWidth={maxWidth}
                            margin="0 auto"
                        >
                            <Flex>
                                <IconBox key={iconBoxes} item={iconBoxes}/>
                            </Flex>
                        </Block>
                        <AboutUsZone/>
                        <OurAdvantages key={iconAdvantages} item={iconAdvantages}/>
                        <Slider/>
                    </Block>
                )}
            </SmallScreen>
        )}
    </MediumScreen>
);


export default Home;