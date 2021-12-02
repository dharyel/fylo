import {useState} from 'react';

import { 
    Container,
    SignUpBox,
    EmailInput,
    EmailForm,
    InvalidEmailText,
    SignUpButton,
    Text,
    Title
 } from './styles';

export const SignUp = () => {
    const [showEmailErrorTxt,setShowEmailErrorTxt] = useState<'visible' | 'hidden'>('hidden');
    const [emailText, setEmailText] = useState('');

    const checkValidEmail = (email: string) => {
        //simpliest email validation, only to show the error msg
        if (!email.includes('@')) return false;

        return true;
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailText(event.target.value);
    }

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (checkValidEmail(emailText.trim())){
            setShowEmailErrorTxt('hidden');
        } else {
            setShowEmailErrorTxt('visible');
        }

        setEmailText('');
    }

    return (
        <Container id="signup">
            <SignUpBox>
                <Title>Get early access today</Title>
                <Text>
                    It only takes a minute to sign up and our free starter tier is extremely generous.
                    If you have any questions, our support team would be happy to help you.    
                </Text>
                <EmailForm id="emailInput" onSubmit={handleSubmitForm}>
                    <EmailInput onChange={handleEmailChange} value={emailText} />
                    <SignUpButton>Get Started For Free</SignUpButton>
                </EmailForm>
                <InvalidEmailText showEmailErrorTxt={showEmailErrorTxt}>Please, enter a valid e-mail address.</InvalidEmailText>
            </SignUpBox>
        </Container>
    );
}
