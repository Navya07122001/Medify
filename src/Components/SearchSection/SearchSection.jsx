import React from 'react';
import doctoricon from '../../assets/doctoricon.png';
import ambulanceicon from '../../assets/ambulanceicon.png';
import hospitalicon from '../../assets/hospitalicon.png';
import pillicon from '../../assets/pillicon.png'
import Drugstoreicon from '../../assets/Drugstoreicon.png'
import Search from "@mui/icons-material/Search";
import styles from './SearchSection.module.css';
import { useNavigate } from 'react-router-dom';
function SearchSection() {
    const navigate=useNavigate()
    return (
        <div styles={{ zIndex: '1' }}>
            <div className={styles.container}>
                <div className={styles.inputsection}>
                    <div className={styles.inputsearch}>
                        <Search sx={{ color: '#ABB6C7',fontSize:'2.5rem' }} />
                        <input type="text" placeholder='State' className={styles.inputfield} />
                    </div>
                    <div className={styles.inputsearch}>
                        <Search sx={{ color: '#ABB6C7',fontSize:'2.5rem' }} />
                        <input type="text" placeholder='City' className={styles.inputfield} />
                    </div>

                    <button className={styles.searchbtn} onClick={()=>navigate("/search")}><Search sx={{fontSize:'2.5rem'}}/>Search</button>

                </div>
                <div className={styles.lookup}>
                    <div className={styles.textstyle}>You may be looking for</div>
                    <div className={styles.arrangeicons}>
                        <div className={styles.iconsection}>
                            <img src={doctoricon} alt="doctoricon" height="60px" width="60px" />
                            <div style={{ width: '43px', height: '27px', color: '#ABB6C7', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '27px',paddingTop:'2px' }}>Doctors</div>
                        </div>
                        <div className={styles.iconsection}>
                            <img src={pillicon} alt="doctoricon" height="60px" width="60px" />
                            <div style={{ width: '143px', height: '27px', color: '#ABB6C7', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '27px',paddingTop:'2px' }}>Medical Store</div>
                        </div>
                        <div className={styles.iconsection}>
                            <img src={hospitalicon} alt="doctoricon" height="60px" width="60px" />
                            <div style={{ width: '43px', height: '27px', color: '#ABB6C7', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '27px',paddingTop:'2px' }}>Hospitals</div>
                        </div>
                        <div className={styles.iconsection}>
                            <img src={Drugstoreicon} alt="doctoricon" height="60px" width="60px" />
                            <div style={{ width: '43px', height: '27px', color: '#ABB6C7', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '27px',paddingTop:'2px' }}>Labs</div>
                        </div>
                        <div className={styles.iconsection}>
                            <img src={ambulanceicon} alt="doctoricon" height="60px" width="60px" />
                            <div style={{ width: '43px', height: '27px', color: '#ABB6C7', fontWeight: '400', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '27px',paddingTop:'2px' }}>Ambulance</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SearchSection;
