import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Features } from '../../components/Features';

import { Container } from './styles';
import { Team } from '../../components/Team';

export const Home = () => {
    return (
        <Container>
            <Header />
            <Hero />
            <Features />
            <Team />
        </Container>
    );
}