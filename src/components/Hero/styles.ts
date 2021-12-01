import styled from 'styled-components';
import heroWaveBackground from '../../assets/images/bg-curvy-desktop.svg';
import heroImg from '../../assets/images/illustration-intro.png';

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    background-color: ${({theme}) => theme.colors.background2};
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url(${heroWaveBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
`;

export const HeroWrapper = styled.div`
    max-width: 1440px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 1;
`;

export const HeroImg = styled.img.attrs({
    src: `${heroImg}`
})`
    width: 80%;
`;

export const HeroTitle = styled.h1`
    color: ${({theme}) => theme.colors.text};
    font-size: 24px;

    margin-top: 15px;
`;

export const HeroText = styled.p`
    color: ${({theme}) => theme.colors.text};
    font-size: 14px;

    margin-top: 20px;
`;

export const HeroButton = styled.button`
    color: ${({theme}) => theme.colors.text};
    font-size: 14px;
    border-radius: 20px;
    width: 180px;
    height: 40px;
    background-color: ${({theme}) => theme.colors.detail2};
    border: 0px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    margin-top: 15px;

    :hover {
        background-color: ${({theme}) => theme.colors.detail1};
    }
`;