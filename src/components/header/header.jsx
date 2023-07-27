import React from 'react'
import { motion } from "framer-motion";
import style from './header.module.css';
import { useDispatch } from 'react-redux';
import { DisableGlitch, setGlitch } from '../../store/slice';

function Header() {
    const dispatch=useDispatch();
console.log(0.2+.1)
    return (
        <motion.div
            className={style.Header}
            initial={{ y:-100}}
            animate={{  y:0}}
            exit={{ opacity: 0 }}
            transition={{
                duration: 3,
                
            }}
        >
            <ul className={style.headerul}>
                <li className={style.headerli}>HOME</li>
                <li className={`${style.headerli} ${style.Menu}`}>MENU</li>
                <li onMouseEnter={()=>dispatch(setGlitch())} onMouseLeave={()=>dispatch(DisableGlitch())}  className={style.headerli}>ABOUT US</li>
                <li className={`${style.headerli} ${style.Contact}`}>CONTACT US</li>
            </ul>

        </motion.div>
    )
}

export default Header
