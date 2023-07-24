import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import style from './identification.module.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Rise from '../batman/Rise';
import Secret from '../Secret/Secret';
import Vegeance from '../batman/Vegeance';

function Idetification() {
    const [password, setpassword] = useState('');
    const [SecretMessage, setSecretMessage] = useState(false);

    return (
        <>
            {password !== 'nathyad' ?
                <TransitionGroup >
                    <CSSTransition timeout={5000}
                        classNames="item">
                        <form class={style.container}>
                            <div className={style.inputcontainer}>
                                <div className={style.inputcontent}>
                                    <div className={style.inputdist}>
                                        <div className={style.inputtype}>
                                            {/* <input placeholder="User" required="" type="text" className={style.inputis} /> */}
                                            <input onChange={(e) => setpassword(e.target.value)} placeholder="Password" required="" type="password" className={style.inputis} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </CSSTransition>
                </TransitionGroup>
                :
                <>
                    <button data-text="Awesome" className={style.button} >
                        <span className={``}>&nbsp;VENGEANCE....&nbsp;</span>
                        <motion.span  className={`${style.hoverText} `} aria-hidden="true">&nbsp;<Rise setSecretMessage={setSecretMessage} />&nbsp;</motion.span>
                    </button>
                    {/* <AnimatePresence initial={false}>
                    {SecretMessage ?

                            <motion.div key="modal"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Secret SecretMessage={SecretMessage} />
                            </motion.div>
                        : ''}
                        </AnimatePresence>
                        {!SecretMessage?
                            <motion.div key='notmodal'>Missing Something?</motion.div>
                            :""
                        } */}
                        <Vegeance/>
                </>
            }
        </>
    )
}

export default Idetification