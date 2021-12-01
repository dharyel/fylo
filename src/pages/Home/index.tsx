import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';

import { Container } from './styles';

export const Home = () => {
    return (
        <Container>
            <Header />
            <Hero />
        </Container>
    );
}