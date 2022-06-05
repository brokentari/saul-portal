import GlobalStyle from "../../GlobalStyle";
import { HomePage, Wrapper } from "../../App";
import Navbar from "../Navbar/Navbar";
import MobileRestrict from "../MobileRestricted/MobileRestrict";
import { FooterWithIcons } from "../../App";
import { Project, ProjectDescription, ProjectsContainer } from "./Projects.style";


const navigation = {
    brand: { name: "saul's portal", to: "/" },
    links: [
        { name: "projects", to: "/projects" },
        { name: "sandbox", to: "/dev" },
        { name: "about", to: "/about" }
    ]
}

const { brand, links } = navigation;

const Projects = () => {
    return (
        <HomePage>
            <Navbar brand={brand} links={links} />
            <Wrapper style={{justifyContent: "center", height: "auto"}}>
                <GlobalStyle />
                <MobileRestrict />
                <ProjectsContainer>
                    <Project>
                        <div>
                            <a target="_blank" href="https://brokentari.github.io/caesar_cipher">
                                <img style={{width: "30em"}} src="https://brokentari.github.io/images/hello_world.png" className="img-fluid z-depth-4 rounded" />
                            </a>
                        </div>
                        <div>
                            <h2>Caesar Cipher</h2>
                            <ul>
                                <ProjectDescription>Encrypts and decrypts text with a left shift of 5</ProjectDescription>
                                <ProjectDescription>Written with HTML, CSS, and Javascript</ProjectDescription>
                                <ProjectDescription>Text buttons to indicate the action desired on input text</ProjectDescription>
                                <ProjectDescription>Wanted to learn more about basic input events and workflow in JavaScript</ProjectDescription>
                            </ul>
                        </div>
                    </Project>
                    <Project>
                        <div>
                            <a target="_blank" href="https://github.com/brokentari/saulbot">
                                <img style={{width: "30em"}} src="https://brokentari.github.io/images/discord_bot.jpg" className="img-fluid z-depth-4 rounded" />
                            </a>
                        </div>
                        <div>
                            <h2>saulbot</h2>
                            <ul>
                                <ProjectDescription>Written using a node.js module called discord.js</ProjectDescription>
                                <ProjectDescription>Allows interactions with the Discord API</ProjectDescription>
                                <ProjectDescription>Interactive bot used for miscellaneous fun and moderator automation</ProjectDescription>
                                <ProjectDescription>Primarily used in a Northeastern student focused server</ProjectDescription>
                            </ul>
                        </div>
                    </Project>
                    <Project>
                        <div>
                            <a target="_blank" href="https://github.com/brokentari/NU-Intern-Schedule-Automation">
                                <img style={{width: "30em"}} src="https://brokentari.github.io/images/nu_marketing.jpg" className="img-fluid z-depth-4 rounded" />
                            </a>
                        </div>
                        <div>
                            <h2>Calendar Automation</h2>
                            <ul>
                                <ProjectDescription>Written with Python, using Google Sheets and Calendar's API</ProjectDescription>
                                <ProjectDescription>Interaction between Sheets and Calendar</ProjectDescription>
                                <ProjectDescription>Retrieved shifts from Google Sheets and created a new calendar event</ProjectDescription>
                            </ul>
                        </div>
                    </Project>
                </ProjectsContainer>
            </Wrapper>
            <FooterWithIcons />
        </HomePage>
    )
}

export default Projects;