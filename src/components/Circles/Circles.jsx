import React from 'react'

const Circles = props => {
    return(
        <div className='Circles'>
            <div className={props.selected === 1 ? 'Circles selected' : 'Circles'}>
                1
            </div>
            <div className={props.selected === 2 ? 'Circles selected' : 'Circles'}>
                2
            </div>
            <div className={props.selected === 3 ? 'Circles selected' : 'Circles'}>
                3
            </div>
            <div className={props.selected === 4 ? 'Circles selected' : 'Circles'}>
                4
            </div>
        </div>
    )

}

export default Circles;