import { memo, useEffect } from 'react';
import './Section3.css'

import CountUp from 'react-countup';

import Aos from 'aos';
import 'aos/dist/aos.css'

import boat1 from "../assets/boat1.png"
import boat2 from "../assets/boat2.png"
import boat3 from "../assets/boat3.png"
import star from "../assets/star.png"

const Section3 = () => {

    
         useEffect(()=>{
          Aos.init({
            duration :2000
          })
          },[])

  return (
    <>
    <div className="Seller">
        <h1>Top Sellers</h1>
        <div className="top">
            <button className='pick'>Top Picks</button>
            <button className='watch'>Watches</button>
        </div>
        
        <div className="sel-wrapper">


            <div className="sel-card"  data-aos="fade-right" >

                <div className="boat-img1">

                    <img src={boat1} alt="" />

                    <div className="sale">

                        <h3>Boat Rockerz 333</h3>

                        <div className="price">
                            <div className="stars">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <p>75 Reviews</p>
                        </div>

                        <h2>$ <CountUp start={0} end={20} duration={10}></CountUp> </h2>
                    </div>

                </div>
                <button className='add'>Add to cart</button>


            </div>
            <div className="sel-card"  data-aos="fade-up">



                <div className="boat-img2">

                    <img src={boat2} alt="" />

                    <div className="sale">

                        <h3>Boat kerz 234</h3>
                        
                        <div className="price">
                            <div className="stars">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <p>75 Reviews</p>
                        </div>

                        <h2>$ <CountUp start={0} end={40} duration={8}></CountUp> </h2>
                    </div>

                </div>

                <button className='add'>Add to cart</button>


            </div>
            <div className="sel-card" data-aos="fade-left" >
                


                <div className="boat-img3">

                    <img src={boat3} alt="" />

                    <div className="sale">

                        <h3>Boat Rockerz 323</h3>
                        
                        <div className="price">
                            <div className="stars">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <p>75 Reviews</p>
                        </div>

                        <h2>$<CountUp start={0} end={30} duration={6}></CountUp> </h2>
                    </div>

                </div>

                <button className='add'>Add to cart</button>

            </div>
        </div>
    </div>
    </>
  );
};

export default memo(Section3);