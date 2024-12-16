import React from "react";
import Layout from "./../Layout/BaseLayout";
import Banner from '../Banner/Banner'
import Counter from '../Stats/Stats'
import FeaturedPost from '../Cards/Cards'
import Support from '../Support/Support'
import Team from '../Team/Team'
import Newsletter from "../Newsletter/Newsletter";
import Founder from '../Founder/Founder'
import Testimonial from '../Testimonials/Tesimonials'



const HomePage = () => {

  return (
   <>
        <Banner/>
        <Counter/>
        <FeaturedPost/>
        <Support/>
        <Team/>
        <Founder/>
        <Newsletter/>
        
   </>
  );
};

export default HomePage;