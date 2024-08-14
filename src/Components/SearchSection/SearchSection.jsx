import React from 'react';
import doctoricon from '../../assets/doctoricon.png';
import ambulanceicon from '../../assets/ambulanceicon.png';
import hospitalicon from '../../assets/hospitalicon.png';
import labsicon from '../../assets/labsicon.png';
import medicalstoreicon from '../../assets/medicalstoreicon.png'
import Search from "@mui/icons-material/Search";
import styles from './SearchSection.module.css';

function SearchSection() {
    return (
        <div styles={{zIndex:'1'}}>
        <div className={styles.container}> 
            <div className={styles.inputsection}>
                <div className={styles.inputsearch}>
                    <Search sx={{color:'#ABB6C7'}}/>
                    <input type="text" placeholder='State' className={styles.inputfield}/>
                </div>
                <div className={styles.inputsearch}>
                    <Search sx={{color:'#ABB6C7'}}/>
                    <input type="text" placeholder='City' className={styles.inputfield}/>
                </div>

                <button className={styles.searchbtn}><Search/>Search</button>
                
            </div>
            <div className={styles.lookup}>
                <div className={styles.textstyle}>You may be looking for</div>
                <div className={styles.arrangeicons}>
                    <img src={doctoricon} className={styles.iconstyles}/>
                    <img src={labsicon} className={styles.iconstyles}/>
                   <img src={hospitalicon} className={styles.iconstyles}/>
                  <img src={medicalstoreicon} className={styles.iconstyles}/>
                 <img src={ambulanceicon} className={styles.iconstyles}/>
              </div>
            </div>
            </div>
            </div>
       
    );
}

export default SearchSection;
