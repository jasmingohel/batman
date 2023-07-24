import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'
import style from './batman.module.css'

function Batman() {
    return (
        <>
            <button className={style.Batman}>
                <span className={style.Message}>PLAY NOW</span>
            </button>
            {/* <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial> */}
        </>

    )
}

export default Batman