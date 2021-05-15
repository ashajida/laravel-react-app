import { Section, Wrapper, Container, FooterNav, Links, FooterLink, Heading} from './Footer.elements';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'; 

const Footer = () => {
    return(
        <Section>
            <Container>
                <Wrapper>
                    <FooterNav>
                        <Links>
                            <Heading>Menu</Heading>
                            <FooterLink to='/' >Home</FooterLink>
                            <FooterLink>Contact Us</FooterLink>
                            <FooterLink>Store Locations</FooterLink>
                        </Links>
                        <Links>
                            <Heading>Shop</Heading>
                            <FooterLink>Men</FooterLink>
                            <FooterLink>Woman</FooterLink>
                            <FooterLink>Children</FooterLink>
                        </Links>
                        <Links>
                            <Heading>Follow Us</Heading>
                            <FooterLink><AiFillFacebook />Facebook</FooterLink>
                            <FooterLink><AiFillInstagram />Instagram</FooterLink>
                            <FooterLink><AiFillTwitterSquare />Twitter</FooterLink>
                        </Links>
                    </FooterNav>
                </Wrapper>
            </Container>
        </Section>
    );
}

export default Footer;