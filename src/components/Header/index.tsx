import { 
    Container,
    Logo,
    Nav,
    NavLinkUl,
    NavLinkLi,
    NavLinkA,
} from './styles';

export const Header = () => {
    return (
        <Container>
            <Logo />
            <Nav>
                <NavLinkUl>
                    <NavLinkLi><NavLinkA href="#">Features</NavLinkA></NavLinkLi>
                    <NavLinkLi><NavLinkA href="#">Team</NavLinkA></NavLinkLi>
                    <NavLinkLi><NavLinkA href="#">Sign In</NavLinkA></NavLinkLi>
                </NavLinkUl>
            </Nav>
        </Container>
    );
}