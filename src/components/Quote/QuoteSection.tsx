import { Wrapper, Quote, Author } from "./QuoteSection.style";

// This shit needs to get fixed
const QuoteSection = (quoteInfo: { content: string, author: string }) => {
    return (
        <Wrapper>
            <Quote>"{quoteInfo.content}"</Quote>
            <Author>- {quoteInfo.author}</Author>
        </Wrapper>
    );
};

export default QuoteSection;
