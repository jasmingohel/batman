import { motion } from 'framer-motion'
import React from 'react'

import style from './secret.module.css'

function Secret({ SecretMessage }) {
        console.log('look at here',SecretMessage)
    return (

            <motion.div >
                <span className={style.Shine}>this is the message you might be searching for but it contains
                    <span className={style.Vain}> nothiing</span>
                </span>
            </motion.div>
          
    )
}

export default Secret