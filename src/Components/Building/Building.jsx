import React, { useRef } from 'react'
import './Building.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.jpg'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'

const Building = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if(tx > -50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='buildings'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Team Urban</h3>
                                <span>Mangaldan Pangasinan</span>
                            </div>
                        </div>
                        <p>Thank you for team urban because they build chess community for all teams im so grateful and for people to join them </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Team Urban</h3>
                                <span>Mangaldan Pangasinan</span>
                            </div>
                        </div>
                        <p>Thank you for team urban because they build chess community for all teams im so grateful and for people to join them </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Team Urban</h3>
                                <span>Mangaldan Pangasinan</span>
                            </div>
                        </div>
                        <p>Thank you for team urban because they build chess community for all teams im so grateful and for people to join them </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Team Urban</h3>
                                <span>Mangaldan Pangasinan</span>
                            </div>
                        </div>
                        <p>Thank you for team urban because they build chess community for all teams im so grateful and for people to join them </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Building