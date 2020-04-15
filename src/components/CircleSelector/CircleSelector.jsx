import React from 'react'


const CircleSelector = props => {
    return(
    <div className='CircleSelector'>
        <button className={props.selected === 1 ? 'selected' : null} onClick={() => props.handleClick(1)}>
            Select Circle 1
        </button>
        <button className={props.selected === 2 ? 'selected' : null} onClick={() => props.handleClick(2)}>
            Select Circle 2
        </button>
        <button className={props.selected === 3 ? 'selected' : null} onClick={() => props.handleClick(3)}>
            Select Circle 3
        </button>
        <button className={props.selected === 4 ? 'selected' : null} onClick={() => props.handleClick(4)}>
            Select Circle 4
        </button>
    </div>

    )
}


export default CircleSelector;