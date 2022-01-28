import GlobalStyle from "../../GlobalStyle";
import {HomePage, Wrapper } from "../../App";
import Navbar from "../Navbar/Navbar";
import MobileRestrict from "../MobileRestricted/MobileRestrict";
import { FooterWithIcons } from "../../App";

const navigation = {
    brand: { name: "saul's portal", to: "/" },
    links: [
        { name: "projects", to: "/projects" },
        { name: "sandbox", to: "/dev" },
        { name: "about", to: "/about" }
    ]
}

const { brand, links } = navigation;

const About = () => {
    return (
        <HomePage>
            <Navbar brand={brand} links={links} />
            <Wrapper>
                <GlobalStyle />
                <MobileRestrict />
                
            </Wrapper>
            <FooterWithIcons />
        </HomePage>
    )
}

export default About;