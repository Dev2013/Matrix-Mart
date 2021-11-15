import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='about'/>
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="awesome desk" />
      <article>
        <div className='title'>
          <h2>Our History</h2>      
          <div className='underline'></div>
        </div>
        <p>Since the first Matrix-mart store opened in 1962 in Rogers, Arkansas, we've been
           dedicated to making a difference in the lives of our customers. 
           Our business is the result of Sam Walton's visionary leadership, along with generations
            of associates focused on helping customers and communities save money and live better. 
            This rich heritage defines who we are and what we do today.</p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
