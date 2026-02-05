import { memo, useEffect } from 'react';
import './Section2.css'
import CountUp from 'react-countup';

import Aos from 'aos';
import 'aos/dist/aos.css'

import pod1 from "../assets/pod1.png"
import pod2 from "../assets/pod2.png"
import pod3 from "../assets/pod3.png"

const Section2 = () => {

     useEffect(()=>{
      Aos.init({
        duration :2000
      })
      },[])

  return (
    <>
    <div className="Apple"> 
        
        <div className="Airpod">
            <h1>Apple wireless Airpod</h1>
            <div className="pods">
                <img src={pod1} alt="" className='edge' data-aos="fade-up" />
                <img src={pod2} alt="" className='middle' data-aos="fade-down"  />
                <img src={pod3} alt="" className='edge0'data-aos="fade-up"/>
            </div>
            <span>Price : <h3>$<CountUp start={0} end={45.99} duration={8}></CountUp></h3> </span>
        </div>
        <div className="pro-text">
            <h1>Our Featured Products</h1>
            <p>Lorem ipsum is a placeholder text commonly <br /> used to demonstrate the visual form of a <br /> product</p>
            <div className="btn">
                <button>Add to cart</button>
                <a href="">View more</a>
            </div>
        </div>
    </div>
    </>
  );
};

export default memo(Section2);