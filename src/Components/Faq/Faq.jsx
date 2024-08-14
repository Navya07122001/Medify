import React from 'react';
import styles from './Faq.module.css';
import docpatient from '../../assets/docpatient.png';
import stylishshape from '../../assets/stylishshape.png';
import happy from '../../assets/happy.png'
function Faq() {
    return (
        <div className={styles.container}>
            <p style={{fontSize:'1.2rem',color:'var(--primary-main-color)',fontWeight:"500"}}>Get Your Answer</p>
            <p style={{fontSize:'3rem',fontWeight:"600",color:'var(--primary-heading-color)'}}>Frequently Asked Questions</p>
            <div className={styles.faqsection}>
                <div>
                    <img src={happy} alt="" style={{marginRight:"-10rem",marginBottom:"8rem",position:'relative'}}/>
                <img src={docpatient} alt="" />

                <img src={stylishshape} className={styles.stylishshape} style={{marginLeft:"-8rem",marginBottom:'12rem',position:"relative",zIndex:'1'}}/>
                </div>
                <div style={{display:"flex",alignItems:'flex-start',flexDirection:'column'}}>
                    <p className={styles.question}>Why choose our medical for your family?<span style={{fontSize:'2rem',fontWeight:'700',color:'var(--primary-main-color)',paddingLeft:'2rem'}}>+</span></p>
                    <p className={styles.question}>Why we are different from others?<span style={{fontSize:'2rem',fontWeight:'700',color:'var(--primary-main-color)',paddingLeft:'2rem'}}>+</span></p>
                    <p className={styles.question}>Trusted & experience senior care & love<span style={{fontSize:'2rem',fontWeight:'700',color:'var(--primary-main-color)',paddingLeft:'2rem'}}>+</span></p>
                    <p className={styles.question}>How to get appointment for emergency cases?<span style={{fontSize:'2rem',fontWeight:'700',color:'var(--primary-main-color)',paddingLeft:'2rem'}}>+</span></p>
                </div>
            </div>
        </div>
    );
}

export default Faq;