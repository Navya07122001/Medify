import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
import Search from '@mui/icons-material/Search';
import locicon from '../../assets/locicon.png';
function Navbar({state,city, setCity, setState, statelist,citylist,handleSearch }) {
    const handleState=(e)=>{
        
        setState(e.target.value)
    }
    const handleCity=(e)=>{
        setCity(e.target.value)
        console.log(e.target.value);
    }
    useEffect(()=>{
        console.log(citylist)
    },[])
    return (
        <div className={styles.container}>
            <div className={styles.navbarsection}>
                <div className={styles.appname}>
                    <img src={logo} alt="logo" />
                    <span>Medify</span>
                </div>
                <div className={styles.navbar}>
                    <div className={styles.navitem}>FindDoctors</div>
                    <div className={styles.navitem}>Hospitals</div>
                    <div className={styles.navitem}>Medicines</div>
                    <div className={styles.navitem}>Surgeries</div>
                    <div className={styles.navitem}>Software for Provider</div>
                    <div className={styles.navitem}>Facilities</div>
                    <button type="button" className={styles.bookingbtn}>My Bookings</button>
                </div>
            </div>
            <div style={{ height: '5rem', background: "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)", borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}></div>
            <div className={styles.searchsection}>
                <div className={styles.inputsection}>
                    <div className={styles.inputsearch}>
                        <img src={locicon} style={{ color: '#ABB6C7' }} />
                        {/* <input type="text" placeholder='State'/> */}
                        <select id="state" value={state} className={styles.inputfield} onChange={handleState} >
                            <option value="">Select a state</option>
                            {statelist.length > 0 && statelist.map((state) => (
                                <option value={state} style={{color:'black'}}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.inputsearch1}>
                        <img src={locicon} style={{ color: '#ABB6C7' }} />
                        {/* <input type="text" placeholder='City' className={styles.inputfield} /> */}
                        <select id="city" value={city} className={styles.inputfield} onChange={handleCity} >
                            <option value="">Select a City</option>
                            {citylist.length > 0? citylist.map((city) => (
                                <option value={city} style={{color:'black'}}>
                                    {city}
                                </option>
                            )):<> <input type="text" placeholder='City' className={styles.inputfield} /> </>}
                        </select>
                        
                    </div>

                    <button className={styles.searchbtn} onClick={()=>handleSearch(state,city)}><Search />Search</button>

                </div>
            </div>
        </div>
    );
}

export default Navbar;