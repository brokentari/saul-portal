
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Wrapper } from "../MobileRestricted/MobileRestrict.style";

const navigation = {
    brand: { name: "saul's portal", to: "/" },
    links: [
        { name: "projects", to: "/projects" },
        { name: "sandbox", to: "/dev" },
        { name: "about", to: "/about" }
    ]
}

const { brand, links } = navigation;

const MobileRestrict = () => {
    return (
        <Wrapper>
            <ErrorMessage content="This page is not available in mobile version. Please visit the page on desktop." />
        </Wrapper>
    )
}

export default MobileRestrict;