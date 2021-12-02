import styled from 'styled-components';

export const Card = styled.div`
    width: 340px;
    min-width: 340px;
    padding: 30px 20px;
    margin: 15px;
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.4);
    background-color: ${({theme}) => theme.colors.background1};
    z-index: 1;
`


export const CardUserWrapper = styled.div `
    width: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const CardUserImg = styled.img `
    width: 35px;
    margin-right: 10px;

    border-radius: 50%;
`;

export const CardText = styled.p`
    color: ${({theme}) => theme.colors.text};
    text-align: left;

    font-size: 16px;
`;

export const CardUserTexts = styled.div`
    
`;

export const CardUserName = styled.h2`
    display: block;

    color: ${({theme}) => theme.colors.text};

    font-size: 14px;
`;

export const CardUserJob = styled.p`
    display: block;

    color: ${({theme}) => theme.colors.text};

    font-size: 14px;
`;