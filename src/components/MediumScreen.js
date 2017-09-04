import React from 'react';
import Media from 'react-media';

const MediumScreen = ({ children }) => (
    <Media query="(max-width: 1025px)" children={children} />
);

export default MediumScreen;
