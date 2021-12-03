import { 
    Container,
    FooterWrapper,
    FooterIcon,
    FooterInfosWrapper,
    CompanyLocationWrapper,
    LocationAddressIcon,
    LocationAddress,
    LocationAddressText,
    PhoneMailWrapper,
    PhoneWrapper,
    PhoneIcon,
    PhoneNumber,
    MailWrapper,
    MailAddress,
    AboutJobsPressBlogTextWrapper,
    AboutJobsPressBlogText,
    ContactTermsPrivacyWrapper,
    ContactTermsPrivacyText,
    SocialMediasWrapper,
    MailIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
} from "./styles";


export const Footer = () => {
    return (
        <Container>
            <FooterWrapper>
                <FooterIcon onClick={() => window.location.href="#home"} />
                <FooterInfosWrapper>

                    <CompanyLocationWrapper>
                        <LocationAddress>
                            <LocationAddressIcon />
                            <LocationAddressText>
                                Funny House, Fools street, number 0, Brazil zil zil
                            </LocationAddressText>
                        </LocationAddress>
                    </CompanyLocationWrapper>

                    <PhoneMailWrapper>
                        <PhoneWrapper>
                            <PhoneIcon />
                            <PhoneNumber>+55 (47) 12345-6789</PhoneNumber>
                        </PhoneWrapper>

                        <MailWrapper>
                            <MailIcon />
                            <MailAddress>example@fylo.com</MailAddress>
                        </MailWrapper>
                    </PhoneMailWrapper>

                    <AboutJobsPressBlogTextWrapper>
                        <AboutJobsPressBlogText>About Us</AboutJobsPressBlogText>
                        <AboutJobsPressBlogText>Jobs</AboutJobsPressBlogText>
                        <AboutJobsPressBlogText>Press</AboutJobsPressBlogText>
                        <AboutJobsPressBlogText>Blog</AboutJobsPressBlogText>
                    </AboutJobsPressBlogTextWrapper>

                    <ContactTermsPrivacyWrapper>
                        <ContactTermsPrivacyText>Contact Us</ContactTermsPrivacyText>
                        <ContactTermsPrivacyText>Terms</ContactTermsPrivacyText>
                        <ContactTermsPrivacyText>Privacy</ContactTermsPrivacyText>
                    </ContactTermsPrivacyWrapper>

                    <SocialMediasWrapper>
                        <a href={"https://www.facebook.com/"} target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                    </SocialMediasWrapper>

                </FooterInfosWrapper>
            </FooterWrapper>
        </Container>
    );
}