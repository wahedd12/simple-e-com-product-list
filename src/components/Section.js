import React from 'react'

const Section = (header,footer,children) => {
  return (
    <div>
        <p>{header}</p>
        <p>{children}</p>
        <p>{footer}</p>
    </div>
  )
}

export default Section