import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    background-color: ${({theme}) => theme.colors.background3};

    display: flex;
    justify-content: center;
`;

export const FeaturesWrapper = styled.div `
    width: 100%;
    max-width: 1440px;

    padding: 50px 135px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;