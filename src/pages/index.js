import React from 'react'
import s from 'styled-components'

// import components
import Nav from '../components/Nav'
import SEO from '../components/seo'

const Wrapper = s.div`
  margin-top: 4em;
  margin-bottom: 2em;
  padding: 0em 8em;

  @media screen and (max-width: 768px) {
    padding: 0 2em;
    margin-bottom: 0;
  }
`

const Img = s.img`
  width: 30%;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`

const AboutPage = () => (
  <>
    <SEO title="About" />
    <div className="container-fluid h-100">
      <div className="row h-100">
        <Nav />

        <Wrapper className="col-md-9 body-content">
          <div className="text-center" style={{ marginBottom: '3em' }}>
            <Img
              src="/images/profile_picture.jpeg"
              className="img-fluid"
              alt="profile"
            />
          </div>
          <div>
            <p className="text-justify" style={{ marginBottom: '2em' }}>
              Hi! I am Ivy, a freshman studying Economics at the&nbsp;
              <a href="https://home.dartmouth.edu/">Dartmouth College</a>.
              I am an aspiring youth trying to rock the world!
              <br />
              <br />
              Things I do when I am free &#61;
              📖&nbsp;&nbsp;&#43;&nbsp;&nbsp;🎨&nbsp;&nbsp;&#43;&nbsp;&nbsp;🍳
            </p>
            {/* <a
                className="btn btn-outline-info"
                href="/files/resume.pdf"
                target="_blank"
              >
                View My Resume &#8594;
              </a> */}
          </div>
        </Wrapper>
      </div>
    </div>
  </>
)

export default AboutPage
