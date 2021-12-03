import styled from 'styled-components';
import logoImg from '../../assets/images/logo.svg'

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 70px;
    padding: 0 30px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    z-index: 2;
`;

export const Logo = styled.img.attrs({
    src: `${logoImg}`,
})`
    height: 35px;
    width: auto;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    :hover {
        filter: brightness(0.5);
    }
`;

export const Nav = styled.nav`

`;

export const NavLinkUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
`;

export const NavLinkLi = styled.li`
    :not(:first-child){
        margin-left: 45px;
    }
`;

export const NavLinkA = styled.a`
    font-family: ${({theme}) => theme.fonts.family.raleway};
    filter: brightness(0.6);
    font-size: 14px;
    color: ${({theme}) => theme.colors.text};
    text-decoration-color: transparent;
    transition: all 0.5s ease-in-out;

    :hover {
        text-decoration-color: ${({theme}) => theme.colors.text};
        filter: brightness(1);
    }
`;
