import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://s3.amazonaws.com/msoe/files/callouts/wide_sml_computer-science-landing-page.jpg">
        <h1>Shane Keney</h1>
        <h2>You tell me what you want to build and I'll help make it happen</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Hey There!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              I currently live in Lancaster, South Carolina but was born and raised most of my life in
              Suffield, Connecticut.  I currently work at Spikeball Inc. and can only sing the companies 
              praises.  I am the Lead Mobile Developer and currently in school to futher my skills in Full
              Stack Web Development as well.
            </p>
            <p>
              I have a wife named Erica, a son named Emerson, two cats and two dogs.  Yeah, I know, it's a zoo
              and its only going to get better once we find a good plot of land to build our farm on!  I love problem
              solving and doing anything and everything I can myself.  I am definitely a "do it yourself kinda guy" but
              don't let that worry you.  I love to work with others whenever possible, learning from them and them hopefully learning
              a little from me.
            </p>
            <p>
              Feel free to browse around and check out some of my active and past projects!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
