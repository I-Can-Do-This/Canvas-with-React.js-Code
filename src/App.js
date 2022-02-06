import React from 'react'
import Canvas from './Canvas'

function App() {
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.font = '24px serif';
    ctx.fillText(`frame count : ${frameCount} :)`, 10, 50);
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  return <Canvas draw={draw} options={{context:'2d'}} />
}

export default App