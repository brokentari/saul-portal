import { Nav, Brand, Ul, Li } from './Navbar.style'

import {
    Link
} from "react-router-dom";

const Navbar = (props: {
    brand: { name: string; to: string },
    links: Array<{ name: string, to: string }>
}) => {
    const { brand, links } = props;

    const NavLinks: any = () => links.map((link: { name: string, to: string }) =>
        <Li key={link.name}>
            <Link to={link.to}>{link.name}</Link>
        </Li>);


    return (
        <Nav>
            <Brand href={brand.to}>{brand.name}</Brand>
            <Ul>
                <NavLinks />
            </Ul>
        </Nav>
    )
}

export default Navbar;