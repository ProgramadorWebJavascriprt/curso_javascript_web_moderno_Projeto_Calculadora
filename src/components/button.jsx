/* Quinta-feira,21/05/2022 a 21:36:30 h  */
import React  from 'react';
import './button.css'

export default props => {
    let classes = 'button'
    classes += props.operation ? 'operation': ''
    classes += props.double ? 'double': ''
    classes += props.triple ? 'triple': ''
    return(
         <button 
         onClick={e => props.click && props.click(props.label)}
         className={classes}>
        {props.label}
 </button>)
}
 /* sexta-feira, 13/05/2022 as 22:09:00 h+|- */
