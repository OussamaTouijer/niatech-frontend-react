import React from 'react'
import './Container.css'

const Container = (props) => {
  return (
    <>
        <div className='main'>
          <div className='container'>{props.children}</div>
        </div>
    </>

  )
}

export default Container