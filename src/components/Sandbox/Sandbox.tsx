import GlobalStyle from "../../GlobalStyle";
import { HomePage, Wrapper } from "../../App";
import Navbar from "../Navbar/Navbar";
import MobileRestrict from "../MobileRestricted/MobileRestrict";
import styled from "styled-components";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function Box(props: any) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<Mesh>()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    // Subscribe this component to the render-loop, rotate the mesh every frame

    useFrame((state, delta) => {
        if (ref && ref.current) {
            ref.current.rotation.x += 0.01
        }
    })


    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

const navigation = {
    brand: { name: "saul's portal", to: "/" },
    links: [
        { name: "projects", to: "/projects" },
        { name: "sandbox", to: "/dev" },
        { name: "about", to: "/about" }
    ]
}

const { brand, links } = navigation;

const Sandbox = () => {
    return (
        <HomePage>
            <Navbar brand={brand} links={links} />
            <Wrapper>
                <GlobalStyle />
                <MobileRestrict />
                <Experiment>
                    <div>
                        <iframe title="game" src="https://pong-nive9.ondigitalocean.app/" width="680" height="480" frameBorder="0" />
                    </div>
                    <Canvas>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <pointLight position={[-10, -10, -10]} />
                        <Box position={[-1.2, 0, 0]} />
                        <Box position={[1.2, 0, 0]} />
                    </Canvas>
                </Experiment>
            </Wrapper >
        </HomePage >
    )
}

export default Sandbox;

export const Experiment = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export const Pong = styled.iframe`
    display: block;
    margin: 0 auto;
`;