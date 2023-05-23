import React from 'react'
import  ReactDOM  from 'react-dom'

function getYear(){
    const date = new Date()
    return date.getFullYear()
}

function Footer(){
    return (<div>
        <footer><p>Copyright {getYear()} </p></footer>
    </div>)
}

export default Footer