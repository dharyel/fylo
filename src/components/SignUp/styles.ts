import styled from 'styled-components';

interface InvalidEmailTextProps {
    showEmailErrorTxt: 'visible' | 'hidden';
}

export const Container = styled.div`
    width: 100%;
    padding: 0 30px;

    background-color: ${({theme}) => theme.colors.background4};

    display: flex;
    justify-content: center;
`;

export const SignUpBox = styled.div`
    width: 100%;
    max-width: 750px;

    padding: 30px;

    background-color: ${({theme}) => theme.colors.background2};

    position: relative;
    bottom: 130px;

    border-radius: 5px;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.4);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    text-align: center;

`;

export const Title = styled.h1`
    margin-bottom: 20px;

    font-family: ${({theme}) => theme.fonts.family.raleway};
    color: ${({theme}) => theme.colors.text};
    font-size: 24px;
`;

export const Text = styled.p`
    margin-bottom: 20px;

    font-family: ${({theme}) => theme.fonts.family.openSans};
    color: ${({theme}) => theme.colors.text};
    font-size: 14px;
`;

export const EmailForm = styled.form`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const EmailInput = styled.input.attrs({
    type:"email",
    placeholder: 'email@example.com',
})`
    width: 500px;
    height: 50px;
    padding: 10px 30px;
    margin-right: 10px;

    border: 0px;
    border-radius: 40px;
    background-color: ${({theme}) => theme.colors.text};
    color: black;
    font-family: ${({theme}) => theme.fonts.family.openSans};

    font-size: 14px;

    :invalid {
        color: red;
    }

    :valid {
        color: darkgreen;
    }

    @media (max-width: 600px){
        width: 100%;
        margin: 0px;
        margin-bottom: 20px;
    }
`;

export const InvalidEmailText = styled.label<InvalidEmailTextProps>`
    visibility: ${(props) => props.showEmailErrorTxt};

    margin-top: 5px;
    font-family: ${({theme}) => theme.fonts.family.openSans};
    color: ${({theme}) => theme.colors.error};
    font-size: 14px;

    align-self: flex-start;

    margin-left: 30px;
`;

export const SignUpButton = styled.button`
    width: 160px;
    
    height: 50px;
    padding: 10px;

    cursor: pointer;
    border: 0px;
    border-radius: 40px;
    background-color: ${({theme}) => theme.colors.detail2};
    font-family: ${({theme}) => theme.fonts.family.openSans};
    color: ${({theme}) => theme.colors.text};

    transition: all 0.5s ease-in-out;

    :hover {
        background-color: ${({theme}) => theme.colors.detail1};
    }

    @media (max-width: 600px){
        width: 100%;
    }
`;