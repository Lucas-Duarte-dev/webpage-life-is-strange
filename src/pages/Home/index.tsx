import React from "react";
import Header from "../../components/Header";
import Person from "../../components/Person";

import { Container, Card, Content, Footer } from "./style";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <div className="container-video">
        <video src="/video/lifeIsStrange.mp4" loop autoPlay muted />
        <Card>
          <img src="/images/unnamed.png" alt="Max and Chloe" />
          <span>Everything change</span>
        </Card>
        <div className="content_apres">
          <span>The history for change your life</span>
        </div>
      </div>
      <Person />

      <Content>
        <div>
          <h1>The storm is comming again</h1>
          <span>This websit was made for fan</span>
          <button>Visit the official store</button>
        </div>
      </Content>

      <Footer>
        <img src="/images/remaster.png" alt="Remaster" />

        <section>
          <h1> Life is Strange remastered collection </h1>
          <a href="/images/">Watch the trailer now!</a>
          <span>Comming fall 2021</span>
        </section>
      </Footer>
    </Container>
  );
};

export default Home;
