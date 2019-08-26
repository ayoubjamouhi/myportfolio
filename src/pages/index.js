import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components';
const HeaderStyle = styled.header`
  div.top {
    height: 500px;
    background-color: red;
  }
  nav {
    ul {
    background-color: yellow;
    overflow: hidden;
    margin: 0;
      li {
        display: block;
        float: left;
        margin-right: 5px;
      }
    }
  }
`;
const MainStyle = styled.main`
  section.about {
    background-color: #585858;
    height: 500px;
  }
  section.projects {
    background-color: #a2a2a2;
    height: 500px;
  }
  section.blog {
    background-color: blue;
    height: 500px;
  }
  section.contact {
    background-color: red;
    height: 500px;
  }
`;
const FooterStyle = styled.footer`
  background-color: red;
  height: 100px
`;
const IndexPage = () => (
  <>
  {/*<!--Start Header --> */}
  <HeaderStyle>
    <div className="top">
      <p>
      Hello, I'm <span>Ayoub JAMOUHI</span>,<br />
      I'm Full Stack Developer,
      <button>View my work </button>
      </p>
    </div>
    <nav>
      <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </nav>
  </HeaderStyle>
  {/*<!--End Header-->*/}
  {/*<!--Start Main -->*/}
  <MainStyle>
    <section className="about">
      <h1>About</h1>
      <div className="aboutDiv">
        <div className="fast">fast</div>
        <div className="responsive">responsive</div>
        <div className="intuitive">intuitive</div>
        <div className="dynamic">dynamic</div>
      </div>
    </section>
    <section className="projects">
      projects
    </section>
    <section className="blog">
      blog
    </section>
    <section className="contact">
      contact
    </section>
  </MainStyle>
  {/*<!--End Main -->*/}
  {/*<!-- Start Footer -->*/}
  <FooterStyle>
    footer
  </FooterStyle>
  {/*<!-- End Footer -->*/}
  </>
)
/*
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout> */
export default IndexPage
