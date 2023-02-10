import React, { useEffect, useState } from 'react'
import { useData } from '../context/AppWrap'
import { useLayout } from '../context/LayoutContext'

export default function A4({children}) {
  const {loading} = useData()
  const {styles, isHorizontal} = useLayout()
  const [margin, setmargin] = useState(0)
  
  
  return (
    <div 
      style={{width:isHorizontal ? "1254px" : "894px"}}  
      className='mx-auto shadow-2xl h-fit overflow-x-scroll' 
      id='a4-page'
    >
        {children}
    </div>
  )
}