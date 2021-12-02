import { 
    Container, 
    HeroWrapper,
    HeroImg,
    HeroText,
    HeroTitle,
    HeroButton
 }  from './styles';

interface HeroProps{
    id: string;
}

export const Hero = () => {
    return (
        <Container id="home">
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
