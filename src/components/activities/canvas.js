import React, { useRef, useEffect, useState } from 'react'
import starImage from '../../assets/images/small-star.png'
const canvasDimension = 420;

const Canvas = props => {
  const [defaultImageData, setDefaultImageData] = useState(null);
  const { velocityRange, velocityInput } = props;
  const canvasRef = useRef(null);

  /**
 * Draw the default image on canvas.
 *
 * @param {canvas} canvas
 *
 */
  const drawImage = (canvas) => {
    const image = new Image()
    image.src = starImage;
    image.onload = function () {
      canvas.drawImage(image, 50, 0, 400, 400);
      image.style.display = 'none';
      const currentImage = canvas.getImageData(0, 0, canvasDimension, canvasDimension);
      setDefaultImageData(currentImage.data);
    };
  }

  useEffect(() => {
    if (!canvasRef.current || !defaultImageData) return;

    const canvas = canvasRef.current.getContext('2d');
    const image = canvas.getImageData(0, 0, canvasDimension, canvasDimension);
    let imageData = image.data;
    if (velocityInput > 0) {
      for (let i = 0; i < imageData.length; i += 4) {
        imageData[i + 1] = defaultImageData[i + 1] * ((100 - velocityInput) / 100); // green
        imageData[i + 2] = defaultImageData[i + 2] * ((100 - velocityInput) / 100); // blue
      }
    } else {
      for (let i = 0; i < imageData.length; i += 4) {
        imageData[i] = defaultImageData[i] * ((100 + velocityInput) / 100); // red
        imageData[i + 1] = defaultImageData[i + 1] * ((100 + velocityInput) / 100); // green
      }
    }
    canvas.putImageData(image, 0, 0);

  }, [velocityRange, velocityInput, defaultImageData])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const render = () => {
      drawImage(context);
    }
    render();
  }, [])

  return <canvas ref={canvasRef} {...props} width="420" height="420" />
}

export default Canvas