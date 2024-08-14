import React from 'react';
import likeicon from '../../../assets/likeicon.png'
function Pill(props) {
    return (
        <div style={{color:'#00A500',width:'10px',height:'10px'}}>
            <img src={likeicon}/>
            <span>5</span>
        </div>
    );
}

export default Pill;