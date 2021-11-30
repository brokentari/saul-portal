import { Wrapper, Container, Heading, Link } from "./Links.style";

const Links = () => {
    return (
        <Wrapper>
            <Container>
                <Heading color="blue">~/uni</Heading>
                <Link href="https://me.northeastern.edu" target="_blank">
                    hub
                </Link>
                <Link href="https://northeastern.instructure.com" target="_blank">
                    canvas
                </Link>
                <Link href="https://calendar.google.com" target="_blank">calendar</Link>
                <Link href="https://outlook.office365.com/mail/inbox" target="_blank">outlook</Link>
                <Link target="_blank" href="https://drive.google.com/drive/u/0/folders/1zKyJSIlqU5ad7IGzLdo3FEOCVBxtKJ2g">
                    drive
                </Link>
            </Container>

            <Container>
                <Heading color="purple">~/dev</Heading>
                <Link target="_blank" href="https://github.com/">github</Link>
                <Link target="_blank" href="https://doc.rust-lang.org/book/">rust</Link>
                <Link target="_blank" href="https://stackoverflow.com/">stackoverflow</Link>
                <Link target="_blank" href="https://wiki.archlinux.org/">archwiki</Link>
                <Link target="_blank" href="https://www.figma.com">figma</Link>
            </Container>

            <Container>
                <Heading color="green">~/fun</Heading>
                <Link target="_blank" href="https://www.youtube.com">youtube</Link>
                <Link target="_blank" href="https://twitter.com/">twitter</Link>
                <Link target="_blank" href="https://monkeytype.com/">monkeytype</Link>
                <Link target="_blank" href="https://play.typeracer.com/">typeracer</Link>
                <Link target="_blank" href="https://www.reddit.com/">reddit</Link>
            </Container>
        </Wrapper>
    );
};

export default Links;
