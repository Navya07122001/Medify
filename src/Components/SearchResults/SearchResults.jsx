import React from 'react';
import uncoltick from '../../assets/uncoltick.png';
import Card from '../Card/Card';
import styles from './SearchResults.module.css';
import ad from '../../assets/ad.png'
function SearchResults({ hospitals, state }) {
    return (
        <div className={styles.containers}>
                <div className={styles.container}>
                    <p style={{ fontWeight: "500", color: "#000000", fontSize: '1.8rem' }}>{hospitals.length} Medical centers available in {hospitals[0]?.State}</p>
                    <p><img src={uncoltick} /><span style={{ color: '#787887', fontWeight: '400', fontSize: '1.2rem' }}>Book appointments with minimum wait-time & verified doctor details</span></p>
                </div>

                {hospitals.map((hospital, index) => (

                    <Card
                        key={index}
                        hospitalName={hospital['Hospital Name']}
                        location={`${hospital.Address}, ${hospital.City}, ${hospital.State} ${hospital['ZIP Code']}`}
                    />

                ))}


            <div className={styles.advertisement}>
              <img src={ad} alt="advertisement"  width={500} height={300}/>
            </div>
        </div>
    );
}

export default SearchResults;