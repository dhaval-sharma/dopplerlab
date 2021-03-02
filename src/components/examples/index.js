import React, { useState } from 'react'
import Example1 from '../../assets/images/example1.png';
import Example2 from '../../assets/images/example2.png';
import Example3 from '../../assets/images/example3.png'

const examplesData = [{
    name: 'example1',
    type: 'image',
    src: Example1
},{
    name: 'example2',
    type: 'image',
    src: Example2
},{
    name: 'example3',
    type: 'video',
    src: Example3,
    videoUrl: 'https://www.youtube.com/embed/ikgRZt1BSyk'
}]

const  ExamplesComponent = (props) =>{
    const [selectedExample, selectExample] = useState({name: 'example1', type: 'image', src: Example1})
        return (
            <div className="tabcontent examples">
                <div className="examples-heading">
                    <h1>EXAMPLES</h1>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        {examplesData.map(example=>(
                        <div className={ example.name === selectedExample.name ?
                            "example-item active" : 'example-item' }
                            onClick={()=> selectExample(example)}>
                             <img src={example.src} alt={example.name}/>
                        </div>
                        ))}
                    </div>
                    <div className="col-md-9 exmaple-preview">
                    { selectedExample.type ==='video' ? <iframe
                            src={selectedExample.videoUrl}
                            title='video'
                            width="100%"
                            height='100%'
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write;
                            encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            /> :
                            <img src={selectedExample.src} alt={selectedExample.name} />
                        }
                    </div>
                </div>
            </div>
        )
}

export default ExamplesComponent;
