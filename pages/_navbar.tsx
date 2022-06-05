import Link from "next/link";
import { Brand, Li, Nav, Ul } from "../_layout/Navbar";


export default function Navbar() {
  return <Nav>
    <Brand href="/">{"saul's portal"}</Brand>
    <Ul>
      <Li>
        <Link href="/"><a>Home</a></Link>
      </Li>
      <Li>
        <Link href="/about"><a>About</a></Link>
      </Li>
      <Li>
        <Link href="/projects"><a>Projects</a></Link>
      </Li>
    </Ul>
  </Nav>
}