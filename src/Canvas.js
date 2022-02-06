import React from 'react'
import useCanvas from './useCanvas'
import predraw from './predraw'
import postdraw from './postdraw'

const Canvas = props => {  

  const { draw, options, ...rest } = props
  const { context, ...moreConfig } = options
  const canvasRef = useCanvas(draw, {context}, {predraw,postdraw})

  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas