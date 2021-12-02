import styled from 'styled-components';
import teamImg from '../../assets/images/illustration-stay-productive.png'
import linkArrowIcon from '../../assets/images/icon-arrow.svg';
import quoteImg from '../../assets/images/bg-quotes.png';

export const Container = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.background3};
    padding: 20px 0px;
`;

export const TeamWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    
    margin: 0 auto;
`;

export const TeamInfo = styled.div`
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const TeamInfoImg = styled.img.attrs({
    src: `${teamImg}`
})`
    
    width: 480px;
    

    margin: 30px;
`;

export const TeamInfoTextsWrapper = styled.div `
    width: 570px;

    margin: 30px;

    display: flex;
    flex-direction: column;
    align-items: start;
`;

export const TeamInfoTitle = styled.h1`
    font-family: ${({theme}) => theme.fonts.family.raleway};
    font-size: 24px;
    color: ${({theme}) => theme.colors.text};
`;

export const TeamInfoDescription = styled.p`
    margin-top: 15px;

    font-family: ${({theme}) => theme.fonts.family.openSans};
    font-size: 14px;
    color: ${({theme}) => theme.colors.text};
`;

export const TeamInfoLink = styled.a.attrs({
    href:`${'#signup'}`
})`

    display: block;

    margin-top: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${({theme}) => theme.fonts.family.openSans};
    font-size: 14px;
    color: ${({theme}) => theme.colors.detail1};

    text-decoration-color: transparent;
    transition: all 0.5s ease-in-out;

    &>img{
        filter: invert(98%) sepia(57%) saturate(1466%) hue-rotate(140deg) brightness(89%) contrast(76%);
        transition: all 0.5s ease-in-out;
        width: 15px;

        margin-left: 5px;
    }

    :hover {
        color: ${({theme}) => theme.colors.text};
        text-decoration-color: ${({theme}) => theme.colors.text};
        filter: brightness(1);

        &>img{
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(249deg) brightness(105%) contrast(104%);
        }
    }
`;

export const TeamInfoLinkIcon = styled.img.attrs({
    src: `${linkArrowIcon}`
})`

`;

export const TeamCardsContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    padding: 100px 0px;
    margin-bottom: 150px;
    
    background-color: ${({theme}) => theme.colors.background3};
    background-image: url(${quoteImg});
    background-size: auto;
    background-position: 200px 80px;
    background-repeat: no-repeat;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;