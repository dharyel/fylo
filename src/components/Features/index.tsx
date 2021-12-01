

import { Feature } from '../Feature';
import { Container, FeaturesWrapper } from './styles';

import accessAnywhereIcon from '../../assets/images/icon-access-anywhere.svg';
import anyFileIcon from '../../assets/images/icon-any-file.svg';
import collaborationIcon from '../../assets/images/icon-collaboration.svg';
import securityIcon from '../../assets/images/icon-security.svg';

export const Features = () => {
    return (
        <Container>
            <FeaturesWrapper>
                <Feature  
                    img={accessAnywhereIcon}
                    title="Access your files, anywhere" 
                    description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere"
                />
                <Feature 
                    img={securityIcon}
                    title="Security you can trust" 
                    description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files"
                />
                <Feature 
                    img={collaborationIcon}
                    title="Real-time collaboration"
                    description="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
                />
                <Feature 
                    img={anyFileIcon}
                    title="Store any type of file"
                    description="Wheter you're sharing hollidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared"
                />
            </FeaturesWrapper>
        </Container>
    );
}