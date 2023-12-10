import React from 'react';
import styled from 'styled-components';
import "../style/page-row-container.sass";

const PageRowContainer = ({ children }) => {
    return <div className='page-row-container'>{children}</div>;
};


export default PageRowContainer;