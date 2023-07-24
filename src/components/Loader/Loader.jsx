import React from 'react'
import { motion } from "framer-motion";
import style from './loader.module.css';

function Loader() {

    return (
        <motion.div className={style.LoaderContainer}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}>
            <motion.div
               
            >
                <div className={style.loader}>
                    <span></span>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Loader