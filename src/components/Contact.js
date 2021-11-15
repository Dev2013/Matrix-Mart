import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return <Wrapper>
    <div className="section-centre">
      <h3>Join Us and get flat 20% off &#x1F60E;</h3>
      <div className="content">
        <p>
        Thank you for your interest! In order to better serve our membership,
         please take a moment to fill out the following form. We require this form to 
         be filled out for entrance into our Slack Community. 
          This helps us safeguard our community. 
           Thank you for helping us build a strong and safe community!  
             Your personal data will never be shared with third parties.  
          </p>
          <form className="contact-form">
            <input
            type='email'
            className="form-input"
            placeholder='Enter your Email Id &#128231; '
            />
            <button type='submit' className='submit-btn'>
              Subscribe !!
              </button>
          </form>
          </div>
      </div>
  </Wrapper>
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    margin-left: 10px;
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      margin-left: 15px;
      grid-template-columns: 2fr 2fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
