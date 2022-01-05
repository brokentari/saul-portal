import GlobalStyle from "../../GlobalStyle";
import { HomePage, Wrapper } from "../../App";
import Navbar from "../Navbar/Navbar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const navigation = {
    brand: { name: "saul's portal", to: "/" },
    links: [
        { name: "projects", to: "/projects" },
        { name: "sandbox", to: "/dev" },
        { name: "about", to: "/about" }
    ]
}

const { brand, links } = navigation;

const NotFound = () => {
    return (
        <HomePage>
            <Navbar brand={brand} links={links} />
            <Wrapper>
                <GlobalStyle />
                <ErrorMessage content="Page could not be found :(" />
            </Wrapper>
        </HomePage>
    )
}

export default NotFound;