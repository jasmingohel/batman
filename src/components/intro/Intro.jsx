import React from 'react'
import { motion } from "framer-motion";
import style from './intro.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setChangeMessage, setGlitch } from '../../store/slice';

function Intro() {
    // const [changeMesage, setChangeMessage] = useState(false);
    const changeMesage = useSelector((state) => state.counter.changeMesage);
    const dispatch = useDispatch();


    return (
        // <div className={style.Intro}>

        <motion.div
            className={`${style.Intro} ${changeMesage ? style.ChangedMessage : ''} `}
            exit={{ y: 1050, opacity: 0 }}
            initial={{ y: -1050 }}
            animate={{ y: 0 }}
            transition={{
                duration: 1.5,
            }}
            onClick={() => { dispatch(setChangeMessage());
                setTimeout(() => {
                    dispatch(setGlitch())    
                }, 3000);
                }}
        >
            {!changeMesage ? <span >WELCOME!</span> : 
            <span>
                YEH NAHI DABANA THA....
                </span>}
        </motion.div>
    )
}

export default Intro