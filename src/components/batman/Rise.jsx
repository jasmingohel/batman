import React from 'react'
import style from './batman.module.css'
import {motion } from  'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { setBatCounter } from '../../store/slice';

function Rise({setSecretMessage}) {
    const BatCounter = useSelector((state) => state.counter.BatCounter);
    const dispatch=useDispatch();
    var today = new Date();
    var Time= today.getHours();
    console.log('Time:',Time)
    
    return (
        <>
        <div className={style.lightButton}  onMouseEnter={()=>setSecretMessage(true)} onMouseLeave={()=>setSecretMessage(false)}>
    <motion.button  onClick={()=>{dispatch(setBatCounter());console.log('neggawatt',BatCounter)}}  drag className={style.bt}>
        <div className={style.lightHolder}>
            <div className={style.dot}></div>
            <div className={style.light}></div>
        </div>
        <div className={style.buttonHolder}>
        <svg className={`${BatCounter===Time || BatCounter===(Time-12) ? style.ChangeBatSymbol :""}`} xmlns='http://www.w3.org/2000/svg'  height='73' width='200' viewBox='0 0 726 252.17'><path d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/></svg>
        </div>
    </motion.button>
</div>
        <span className={style.HiddenMessage}>Start Counting Your Time......</span>
        
</>
    )
}

export default Rise








