import React from 'react'
import styled from 'styled-components'
import Hero from './components/Hero';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProducts from './components/FeatureProducts';

const Wrapper = styled.section`
height: 100%;
margin: auto;
margin: 0 4.8rem;
`;
const Home = () => {
const data={
  name:"Shopify store",
}

  return (
    <Wrapper>
      <Hero myData={data.name}/>
      <FeatureProducts/>
      <Services />
      <Trusted />
    </Wrapper>
  )
}

export default Home