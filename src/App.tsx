import { useEffect, useState } from "react";
import { getRandomQuote, getWeather } from "./api";

// import UnitBtn from "./components/UnitBtn/UnitBtn";
import Header from "./components/Header/Header";
import QuoteSection from "./components/Quote/QuoteSection";
import Artwork from "./components/Artwork/Artwork";

import GlobalStyle from "./GlobalStyle";
import Links from "./components/Links/Links";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
    const [weatherInfo, setWeatherInfo] = useState<{ min: string, max: string, type: string }>();

    const [unit] = useState("imperial");

    const [currentQuote, setQuote] = useState<{ content: string, author: string }>();

    const navigation = {
        brand: { name: "saul's portal", to: "/" },
        links: [
            { name: "home", to: "/about" },
            { name: "projects", to: "/blog" },
            { name: "sandbox", to: "/dev" },
            { name: "about", to: "/design" }
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
                {/* <UnitBtn unit={unit} setUnit={setUnit} /> */}
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
        </HomePage>
    );
};

export default App;

const HomePage = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
`;

const Wrapper = styled.div`
    flex: 0 0 auto;
    padding: 10rem;
    display: flex;
    justify-content: space-between;
    background-color: var(--bg-color);
    height: 92vh;
    padding: 12rem 20rem;
`;

const Container = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: space-between;
`;
