import styled from 'styled-components';

export const Container = styled.div `
    width: 350px;
    min-width: 350px;
    
    margin: 25px 50px;
    
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FeatureImg = styled.img `
    width: 50px;

    margin-bottom: 15px;
`;

export const FeatureTitle = styled.h1`
    font-family: ${({theme}) => theme.fonts.family.openSans};
    font-size: 15px;
    color: ${({theme}) => theme.colors.text};

    margin-bottom: 10px;
`;

export const FeatureDescription = styled.p`
    font-family: ${({theme}) => theme.fonts.family.openSans};
    font-size: 14px;
    color: ${({theme}) => theme.colors.text}
`;