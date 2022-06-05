import styled from 'styled-components';

export const Theme = {
    colors: {
        bg: `#fff`,
        dark: `#1a1b26`,
        light: `#EEEEEE`,
        red: `#ff5851`,
    },
    fonts: {
        body: `Roboto Mono, monospace !important`,
        heading: `Roboto Mono, monospace !important`,
    }
}

export const Nav = styled.nav`
    background: ${Theme.colors.dark};
    font-family: ${Theme.fonts.heading};
    color: ${Theme.colors.light};
    a { color: white; text-decoration: none; };

    @media screen and (min-width: 0px) and (max-width: 500px) {
        text-align: center;
        padding-top: 2rem;
    }

    @media screen and (min-width: 501px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 0 0 auto;
    }
`;

export const Brand = styled.a`
    font-weight: bold;
    font-style: normal;
    font-family: ${Theme.fonts.heading};
    font-size: 2rem;
    margin-left: 1rem;
    padding-right: 1rem;
`;

export const Ul = styled.ul`
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    
    @media screen and (min-width: 0px) and (max-width: 500px) {
        display: none;
    }

    @media screen and (min-width: 501px) {
        display: flex;
    }
`;

export const Li = styled.li`
    flex: 0 0 auto;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    color: #999;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    color: #999;
    display: flex;
    font-size: 20px;
    height: 50px;
    justify-content: center;
    line-height: 16px;
    margin: 0 10px ;
    text-decoration: none;
    white-space: nowrap;

    .current {
        border-bottom: 2px solid white;
    }
`;