import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Features } from '../../components/Features';

import { Container } from './styles';

export const Home = () => {
    return (
        <Container>
            <Header />
            <Hero />
            <Features />
        </Container>
    );
}