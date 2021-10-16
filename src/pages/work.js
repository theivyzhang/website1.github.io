import React from 'react'
import s from 'styled-components'

import Nav from '../components/Nav'
import SEO from '../components/seo'

import WorkJSON from '../json/work.json'

const Wrapper = s.div`
  margin-top: 4em;
  padding: 0em 5rem;

  @media screen and (max-width: 768px) {
    padding: 0 2em;
    margin-top: 2em;
  }
`

const HeadP = s.p`
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
  }
`

const LineBreak = s.br`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const Bar = s.text`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const StyledLink = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`

const ExpName = s.text`
  transition: 0.3s;

  :hover {
    color: #B5B4B4;
    cursor: pointer;
    transition: 0.3s;
  }
`

const Experience = ({ pos, name, website, img, desc, time, links }) => (
  <div className="row" style={{ marginBottom: '1.5rem' }}>
    <div className="col-md-1">
      {/* <img src={`/images/${img}`} className="img-fluid" width="50px" /> */}
    </div>
    <div className="col-md-11">
      <HeadP>
        <text style={{ fontSize: '1.2rem', fontWeight: '600' }}>
          {pos},
          <StyledLink href={website}>
            <ExpName> {name} </ExpName>
          </StyledLink>
          <Bar>&#124;</Bar>
        </text>
        &nbsp;
        <LineBreak />
        <text style={{ color: '#677885', fontSize: '90%' }}>{time}</text>
      </HeadP>
      {Boolean(desc.length) && (
        <ul>
          {desc.map(e => (
            <li style={{ fontWeight: '300' }}> {e} </li>
          ))}
          {links &&
            Object.keys(links).map(k => <><a href={`${links[k]}`}> [ {k} ] </a> &nbsp;</>)}
        </ul>
      )}
    </div>
  </div>
)

const Work = () => (
  <>
    <SEO title="Work" />
    <div className="container-fluid h-100">
      <div className="row h-100">
        <Nav />

        <Wrapper className="col-md-9 body-content">
          {Object.keys(WorkJSON).map(k => (
            <>
              <p
                style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  marginBottom: '0.6rem',
                }}
              >
                {k}
              </p>
              {WorkJSON[k].map(e => (
                <Experience {...e} />
              ))}
              <div style={{ margin: '3rem 0' }} />
            </>
          ))}
        </Wrapper>
      </div>
    </div>
  </>
)

export default Work
