import React from 'react';
import styles from './DoctorsCarousel.module.css'
import doctor from '../../assets/doctor.png';
import doctor1 from '../../assets/doctor1.png';
import doctor2 from '../../assets/doctor2.png';
import doctor3 from '../../assets/doctor3.png'
import doctor4 from '../../assets/doctor4.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function DoctorsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div>
            <p>Our Medical Specialist</p>
            <div className="slider-container" style={{ display: "block", width: "80%", margin: "0 auto" }}>
            <Slider {...settings}>
            <div className={styles.doccontainer}>
                    <div  className={styles.docimage}>
                      <img src={doctor4} alt="docimg"/>

                    </div>
                    <p>Dr. Lesley Hull</p>
                    <p>Medicine</p>
                  
                </div>
                <div className={styles.doccontainer}>
                    <div  className={styles.docimage}>
                      <img src={doctor} alt="docimg"/>

                    </div>
                    <p>Dr. Ahmad Khan</p>
                    <p>Neurologist</p>
                  
                </div>
                   <div className={styles.doccontainer}>
                    <div className={styles.docimage}>
                    <img src={doctor1} alt="docimg" />
                    </div>
                    <p>Dr Ankur Sharma</p>
                    <p>Medicine</p>
                    
                </div>
                <div className={styles.doccontainer}>
                    <div className={styles.docimage}>
                    <img src={doctor2} alt="docimg" />
                    </div>
                    <p>Dr. Heena Sachdeva</p>
                    <p> Orthopedics</p>
                    
                </div>
                <div className={styles.doccontainer}>
                    <div className={styles.docimage}>
                    <img src={doctor3} alt="docimg" />
                    </div>
                    <p>Dr. Shan Phan</p>
                    <p>Neurologist</p>
                    
                </div>
                </Slider>
            </div>
        </div>
    );
}

export default DoctorsCarousel;