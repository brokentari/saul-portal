import { useEffect, useState } from "react";
import { getRandomQuote, getWeather } from "./api";

import Header from "./components/Header/Header";
import QuoteSection from "./components/Quote/QuoteSection";
import Artwork from "./components/Artwork/Artwork";

import GlobalStyle from "./GlobalStyle";
import Links from "./components/Links/Links";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";

import { IconContext } from "react-icons/lib";
import { GoOctoface } from 'react-icons/go';
import { AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'

const App = () => {
    const [weatherInfo, setWeatherInfo] = useState<{ min: string, max: string, type: string }>();

    const [unit] = useState("imperial");

    const [currentQuote, setQuote] = useState<{ content: string, author: string }>();

    const navigation = {
        brand: { name: "saul's portal", to: "/" },
        links: [
            { name: "projects", to: "/projects" },
            { name: "sandbox", to: "/dev" },
            { name: "about", to: "/about" }
        ]
    }

    const { brand, links } = navigation;

    useEffect(() => {
        getWeather(unit).then((data) => setWeatherInfo(data));
    }, [unit]);

    useEffect(() => {
        getRandomQuote().then((data) => setQuote(data));
    }, []);


    return (
        <HomePage>
            <Navbar brand={brand} links={links} />
            <Wrapper>
                <GlobalStyle />
                <Artwork />
                <Container>
                    <Header weatherState={weatherInfo} unit={unit} />
                    <Links />
                    {currentQuote && (
                        <QuoteSection
                            content={currentQuote.content}
                            author={currentQuote.author}
                        />
                    )}
                    
                </Container>    
            </Wrapper>
            <FooterWithIcons />
        </HomePage>
    );
};

export default App;

export const HomePage = styled.div`
    display: flex;
    flex-flow: column;
    height: 100vh;
`;

export const Wrapper = styled.div`
    justify-content: space-between;
    background-color: var(--bg-color);
    height: 100vh;

    @media screen and (min-width: 0px) and (max-width: 500px) {
        height: 110vh;
        padding-bottom: 3rem;
    }

    @media screen and (min-width: 501px) {
        flex: 0 1 auto;
        padding: 10rem;
        display: flex;
        padding: 12rem 20rem;
    }
`;

export const Container = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: space-between;
`;

export const Footer = styled.div`
    color: white;
    display: flex;
    justify-content: center;
`

export const FooterWithIcons = () =>{ 
    return (
        <IconContext.Provider value={{ color: "white", size: "2.5em", style: { verticalAlign: 'middle', margin: "0 0.5em 0.75em"} }}>
            <Footer> 
                <a href="https://github.com/brokentari">
                    <GoOctoface />
                </a>
                <a href="https://linkedin.com/in/saulreyna">
                    <AiFillLinkedin />
                </a>
                <a href="mailto:saul.reyna90@gmail.com">
                    <AiTwotoneMail />
                </a>
            </Footer>
        </IconContext.Provider> )
}