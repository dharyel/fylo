import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background2};

    display: flex;
    flex-direction: column;
    align-items: center;
`;