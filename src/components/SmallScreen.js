import React from 'react';
import Media from 'react-media';

const SmallScreen = ({ children }) => (
    <Media query="(max-width: 650px)" children={children} />
);

export default SmallScreen;
