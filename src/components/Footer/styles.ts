import styled from 'styled-components';
import footerIcon from '../../assets/images/logo.svg';

import { 
    FiMapPin, 
    FiPhoneCall, 
    FiMail, 
    FiFacebook, 
    FiTwitter, 
    FiInstagram  
} from "react-icons/fi";

export const Container = styled.div`
    width: 100%;

    background-color: ${({theme}) => theme.colors.background4};

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    padding: 0 30px;
    padding-bottom: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const FooterIcon = styled.img.attrs({
    src:`${footerIcon}`,
})`
    width: 100px;
    margin-bottom: 50px;

    cursor: pointer;
    transition: all 0.5s ease-in-out;

    :hover {
        filter: brightness(0.5);
    }

    @media (max-width: 600px){
        width: 200px;
    }
`;

export const FooterInfosWrapper = styled.div `
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 600px){
        flex-direction: column;
    }
`;

export const CompanyLocationWrapper = styled.div`
    min-width: 100px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 600px){
        margin-bottom: 20px;
    }
`;

export const LocationAddress = styled.address`
    width: 100%;

    text-align: left;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LocationAddressIcon = styled(FiMapPin)`
    margin-right: 20px;
    color: ${({theme}) => theme.colors.text};
    transition: all 0.5s ease-in-out;

    :hover{
        color: ${({theme}) => theme.colors.detail2};
    }
`;

export const LocationAddressText = styled.p`
    width: 300px;

    text-align: left;

    color: ${({theme}) => theme.colors.text};
    font-size: 14px;
    font-style: normal;
`;

export const PhoneMailWrapper = styled.address`
    min-width: 100px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    @media (max-width: 600px){
        margin-bottom: 80px;
    }
`;

export const PhoneWrapper = styled.address`
    width: 100%;
    margin-bottom: 20px;
`;

export const PhoneIcon = styled(FiPhoneCall)`
    margin-right: 20px;
    color: ${({theme}) => theme.colors.text};
    transition: all 0.5s ease-in-out;

    position: relative;
    top: 3px;

    :hover{
        color: ${({theme}) => theme.colors.detail2};
    }
`;

export const PhoneNumber = styled.p`
    display: inline-block;
    font-size: 14px;
    color: ${({theme}) => theme.colors.text};
    font-style: normal;
    
`;

export const MailWrapper = styled.address`
    min-width: 100px;
`;

export const MailIcon = styled(FiMail)`
    margin-right: 20px;
    color: ${({theme}) => theme.colors.text};
    transition: all 0.5s ease-in-out;

    position: relative;
    top: 3px;

    :hover{
        color: ${({theme}) => theme.colors.detail2};
    }
`;

export const MailAddress = styled.p`
    display: inline-block;
    font-size: 14px;
    color: ${({theme}) => theme.colors.text};
    font-style: normal;
`;

export const AboutJobsPressBlogTextWrapper = styled.div `
    min-width: 100px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    @media (max-width: 600px){
        margin-bottom: 80px;
    }
`;

export const AboutJobsPressBlogText = styled.a.attrs({
    href: '#'
})`
    display: block;
    font-size: 14px;
    margin-bottom: 20px;

    text-decoration: none;
    color: ${({theme}) => theme.colors.text};
    transition: all 0.5s ease-in-out;

    :hover{
        color: ${({theme}) => theme.colors.detail2};
    }
`;

export const ContactTermsPrivacyWrapper = styled.div `
    min-width: 100px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    @media (max-width: 600px){
        margin-bottom: 80px;
    }
`;

export const ContactTermsPrivacyText = styled.a.attrs({
    href: '#'
})`
    display: block;
    font-size: 14px;
    margin-bottom: 20px;

    text-decoration: none;
    color: ${({theme}) => theme.colors.text};
    transition: all 0.5s ease-in-out;

    :hover{
        color: ${({theme}) => theme.colors.detail2};
    }
`;

export const SocialMediasWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px){
        margin: 0 auto;
    }
`;

export const FacebookIcon = styled(FiFacebook)`
    margin-right: 20px;
    
    font-size: 20px;
    color: ${({theme}) => theme.colors.text};
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    :hover{
        color: ${({theme}) => theme.colors.detail2};
    }
`;

export const TwitterIcon = styled(FiTwitter)`
    margin-right: 20px;
    
    font-size: 20px;
    color: ${({theme}) => theme.colors.text};
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    :hover{
        color: ${({theme}) => theme.colors.detail2};
    }
`;

export const InstagramIcon = styled(FiInstagram)`
    
    font-size: 20px;
    color: ${({theme}) => theme.colors.text};
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    :hover{
        color: ${({theme}) => theme.colors.detail2};
    }
`;