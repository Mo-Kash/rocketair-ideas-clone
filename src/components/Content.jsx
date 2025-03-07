import React from 'react'
import '../styles/Content.css'
import images from '../assets/data/imageLoader'
import captions from '../assets/data/captionLoader'
import dates from '../assets/data/dateLoader'


const Content = () => {

  return (
    <div className="content">
      {
        images.map((image, index)=>(
          <div key={index} className="idea-card">
            <div className="image-wrapper" style={{height: "60vh", overflow: "hidden"}}>
              <img src={image} alt={`Image ${index}`} />
            </div>
            <div className="text-wrapper">
              <p className="caption" style={{fontSize: "30px", textAlign: "left"}}>{captions[index]}</p>
              <p className="date" style={{fontSize: "12px", textAlign: "left"}}>{dates[index].toUpperCase()}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Content
