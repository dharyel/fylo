import { 
    Container, 
    HeroWrapper,
    HeroImg,
    HeroText,
    HeroTitle,
    HeroButton
 }  from './styles';

export const Hero = () => {
    return (
        <Container>
            <HeroWrapper>
                <HeroImg />
                <HeroTitle>All your files in one secure location,
                <br />
                accessible anywhere.</HeroTitle>
                <HeroText>Fylo stores all your most important files in one secure location.
                <br />
                Access them wherever you need, share and collaborate with
                <br />
                friends family, and co-workers.
                </HeroText>
                <HeroButton>Get Started</HeroButton>
            </HeroWrapper> 
        </Container>
    );
}
