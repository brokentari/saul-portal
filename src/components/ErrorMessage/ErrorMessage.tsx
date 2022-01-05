import { Wrapper, Content, Message } from "./ErrorMessage.style";

const ErrorMessage = (message: { content: string }) => {
    return (
        <Wrapper>
            <Content />
            <Message>{message.content}</Message>
        </Wrapper>
    );
};

export default ErrorMessage;
