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
            <Logo onClick={()=> window.location.href="#home"} />
            <Nav>
                <NavLinkUl>
                    <NavLinkLi><NavLinkA href="#features">Features</NavLinkA></NavLinkLi>
                    <NavLinkLi><NavLinkA href="#team">Team</NavLinkA></NavLinkLi>
                    <NavLinkLi><NavLinkA href="#signup">Sign Up</NavLinkA></NavLinkLi>
                </NavLinkUl>
            </Nav>
        </Container>
    );
}