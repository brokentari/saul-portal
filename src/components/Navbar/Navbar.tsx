import { Nav, Brand, Ul, Li } from './Navbar.style'


import { NavLink } from 'react-router-dom';

const Navbar = (props: {
    brand: { name: string; to: string },
    links: Array<{ name: string, to: string }>
}) => {
    const { brand, links } = props;

    const NavLinks: any = () => links.map((link: { name: string, to: string }) =>
        <Li key={link.name}>
            <NavLink className={(navData) => navData.isActive ? "current" : ""} to={link.to}>{link.name}</NavLink>
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