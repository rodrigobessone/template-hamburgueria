import React from 'react'
import StyledDrop from './StyledDrop'

function BackDropComponent({closeModal}) {
  return (
    <StyledDrop onClick={closeModal} />
  )
}

export default BackDropComponent