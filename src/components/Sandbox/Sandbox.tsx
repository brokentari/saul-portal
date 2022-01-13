import GlobalStyle from "../../GlobalStyle";
import { HomePage, Wrapper } from "../../App";
import Navbar from "../Navbar/Navbar";
import MobileRestrict from "../MobileRestricted/MobileRestrict";
import styled from "styled-components";

const navigation = {
    brand: { name: "saul's portal", to: "/" },
    links: [
        { name: "projects", to: "/projects" },
        { name: "sandbox", to: "/dev" },
        { name: "about", to: "/about" }
    ]
}

const { brand, links } = navigation;

const Sandbox = () => {
    return (
        <HomePage>
            <Navbar brand={brand} links={links} />
            <Wrapper>
                <GlobalStyle />
                <MobileRestrict />
                <Pong title="game" src="https://pong-nive9.ondigitalocean.app/" width="680" height="480" frameBorder="0" />
            </Wrapper >
        </HomePage >
    )
}

export default Sandbox;

export const Pong = styled.iframe`
    display: block;
    margin: 0 auto;
`;