import { memo, useEffect } from 'react';
import './Section1.css'
import CountUp from 'react-countup';

import Aos from 'aos';
import 'aos/dist/aos.css'

import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"

import mask from "../assets/mask.png"
import headphone from "../assets/headphone.png"

const Section1 = () => {
    
  useEffect(()=>{
  Aos.init({
    duration :2000
  })
  },[])

  return (
    <>
    <div className="Discover">
        <div className="dis-text" data-aos="fade-right">
            <h1>Discover Our <br /> Latest  Products</h1>
            <p>Lorem ipsum is a placeholder text commonly used <br /> to demonstrate the visual form of a product</p>
            <button>Buy Now</button>
            <div className="views">
                <div className="users">
                    <img src={user1} className='user1' alt="" />
                    <img src={user2} className='user2' alt="" />
                    <img src={user3} className='user3' alt="" />
                    <img src={user4} className='user4' alt="" />
                </div>
                <p>15k Well <br />Reviews</p>
            </div>
        </div>
        <div className="Beat" data-aos="fade-left">
            <div className="play">
                <img src={mask} alt="" />
                <p>Play Video</p>
            </div>
            
            <div className="red">
                <h2>Red Beats MI9c2zm/a</h2> 
            <div className="headphone">
                <img src={headphone} alt="" />
                <h3> $<CountUp start={0}  end={50} duration={8}></CountUp> </h3>
            </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default memo(Section1);