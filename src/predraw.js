import resizeCanvas from './resizeCanvasWithDevicePixelRatio'

const predraw = (context, canvas) => {
    context.save()
    resizeCanvas(canvas)
    const { width, height } = context.canvas
    context.clearRect(0, 0, width, height)
  }

    export default predraw