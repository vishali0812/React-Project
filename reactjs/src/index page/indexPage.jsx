import React from 'react'
import MyCarousel from './carousel';
import OurServices from './ourServices';
import OurTeam from './ourTeam';
import ReachUs from './reachUs';

function IndexPage() {
  return (
   <>
   <MyCarousel />
   <br /><br /><br />
   <OurServices />
   <br /><br />
   <OurTeam />
   <br />
   <ReachUs />
   </>
  )
}

export default IndexPage;