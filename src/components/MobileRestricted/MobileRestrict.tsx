
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Wrapper } from "../MobileRestricted/MobileRestrict.style";

const MobileRestrict = () => {
    return (
        <Wrapper>
            <ErrorMessage content="This page is not available in mobile version. Please visit the page on desktop." />
        </Wrapper>
    )
}

export default MobileRestrict;