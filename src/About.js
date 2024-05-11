import React from 'react'
import Hero from './components/Hero'
import styled from 'styled-components'

const Wrapper= styled.section``;

const About = () => {
  const data = {
    name: "Shopify About",
  };
  return (
    <Wrapper>
      <Hero myData={data.name}/>
    </Wrapper>
  )
}

export default About