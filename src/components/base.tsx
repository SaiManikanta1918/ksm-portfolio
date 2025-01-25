import styles from "@/styles/base.module.css";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import data from "@/config/data.json";
import Home from "./home/home";
import Profile from "./profile/profile";
import Resume from "./bio/Resume";
import Skills from "./skills/skills";
import Interests from "./interests/interests";
import Portfolio from "./portfolio/portfolio";
import Contact from "./contact/contact";
import Tools from "./tools/Tools";
import Certifications from "./certifications/Certifications";

interface BaseProps {
  children: JSX.Element;
}
export default function Base({ children }: BaseProps) {
  return (
    <div id="base-wrapper">
      <Head>
        <title>{data.profile.name}</title>
        <meta
          name="description"
          content={"Portfolio website of " + data.profile.name}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container fluid>
        <Row>
          <Col s={12}>
            <main id="page-wrapper">
              <Home />
              <Profile />
              <Resume />
              <Skills />
              <Tools />
              <Interests />
              <Portfolio />
              <Certifications />
              <Contact />
            </main>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
