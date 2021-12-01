
import { Container, FeatureImg, FeatureTitle, FeatureDescription } from './styles';

interface FeatureProps {
    img: string;
    title: string;
    description: string;
}

export const Feature = ({img, title, description}: FeatureProps) => {
    return (
        <Container>
            <FeatureImg src={img} />
            <FeatureTitle>{title}</FeatureTitle>
            <FeatureDescription>{description}</FeatureDescription>
        </Container>
    );
}