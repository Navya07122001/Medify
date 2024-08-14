import React, { useState, useRef, useEffect } from 'react';
import styles from './Card.module.css';
import hospitalimg from '../../assets/hospitalimg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Pill from '../styledComponents/Pill/Pill';
import leftarrowbtn from '../../assets/leftarraowbtn.png';
import rightarrowbtn from '../../assets/rightarrowbtn.png';
import SlotPill from '../styledComponents/SlotPill/SlotPill';

function Card({ key, hospitalName, location }) {
    const [isOpen, setIsOpen] = useState(false);
    // const [isBeginning, setIsBeginning] = useState(true);
    // const [isEnd, setIsEnd] = useState(false);
    // const swiperRef = useRef();

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    // useEffect(() => {
    //     if (swiperRef.current) {
    //         const swiperInstance = swiperRef.current.swiper;

    //         const handleSlideChange = () => {
    //             setIsBeginning(swiperInstance.isBeginning);
    //             setIsEnd(swiperInstance.isEnd);
    //         };

    //         swiperInstance.on('slideChange', handleSlideChange);

    //         return () => {
    //             swiperInstance.off('slideChange', handleSlideChange);
    //         };
    //     }
    // }, []);

    // useEffect(() => {
    //     if (swiperRef.current) {
    //         const swiperInstance = swiperRef.current.swiper;
    //         swiperInstance.slideTo(0, 1);
    //     }
    // }, []);

    // const sanitizedId = 'swiper1'; // Prepend a letter to make the ID valid

    return (
        <div>
            <div className={styles.container}>
                <div>
                    <div className={styles.card}>
                        <div className={styles.hospitalcontainer}>
                            <div>
                                <img src={hospitalimg} />
                            </div>
                            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <span className={styles.hospitalname}>{hospitalName}</span>
                                <span className={styles.placename}>{location}</span>
                                <span className={styles.description}>Smilessence Center for Advanced Dentistry + 1</span>
                                <span className={styles.description}>more</span>
                                <span style={{ color: '#787877' }}>---------------------------------</span>
                                <span className={styles.description1}>
                                    <span style={{ fontWeight: '700', fontFamily: '1.3rem', color: '#02A401', marginRight: '0.5rem' }}>FREE</span>
                                    <span style={{ fontWeight: '400', fontSize: '1rem', color: '#787887', textDecorationLine: 'line-through', marginRight: '0.5rem' }}>₹500</span>
                                    Consultation
                                </span>
                                <Pill />
                            </div>
                        </div>
                        <div className={styles.bookingContainer}>
                            <p style={{ color: '#01A400', fontWeight: '500', fontSize: '1.3rem' }}>Available Today</p>
                            <button className={styles.bookingbtn} onClick={handleClick}>
                                BOOK FREE Center visit
                            </button>
                        </div>
                    </div>

                    <div className={styles.slotbooking}>
                        <hr />
                        <div className={styles.topicon}></div>
                        <div className={styles.carouselsection}>
                           
                           <img src={leftarrowbtn} style={{height:'50px',marginTop:'1rem'}}/>
                                    <div className={styles.carouselitems}>
                                        <p style={{ color: '#414146', fontWeight: '700', fontSize: '1rem' }}>Today</p>
                                        <span style={{ color: '#01A400', fontSize: '1rem', fontWeight: '400' }}>11 slots available</span>
                                    </div>
                              
                                    <div className={styles.carouselitems}>
                                        <p style={{ color: '#414146', fontWeight: '700', fontSize: '1rem' }}>Today</p>
                                        <span style={{ color: '#01A400', fontSize: '1rem', fontWeight: '400' }}>11 slots available</span>
                                    </div>
                          
                                    <div className={styles.carouselitems}>
                                        <p style={{ color: '#414146', fontWeight: '700', fontSize: '1rem' }}>Today</p>
                                        <span style={{ color: '#01A400', fontSize: '1rem', fontWeight: '400' }}>11 slots available</span>
                                    </div>
                               
                                    <div className={styles.carouselitems}>
                                        <p style={{ color: '#414146', fontWeight: '700', fontSize: '1rem' }}>Today</p>
                                        <span style={{ color: '#01A400', fontSize: '1rem', fontWeight: '400' }}>11 slots available</span>
                                    </div>
                                    <img src={rightarrowbtn} style={{height:'50px',marginTop:'1rem'}}/>

                        </div>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <div className={styles.day}>Morning</div>
                                <SlotPill />
                            </div>
                            <hr></hr>
                            <div style={{ display: 'flex' }}>
                                <div className={styles.day}>AfterNoon</div>
                                <SlotPill />
                                <SlotPill />
                                <SlotPill />
                                <SlotPill />
                                <SlotPill />
                            </div>
                            <hr></hr>
                            <div style={{ display: 'flex' }}>
                                <div className={styles.day}>Evening</div>
                                <SlotPill />
                                <SlotPill />
                                <SlotPill />
                                <SlotPill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
