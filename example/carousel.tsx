import React, {useRef,useEffect} from 'react'
import Carousel from '../lib/carousel/carousel';

export default  function(){
    let CarouselRef:any= useRef()

    useEffect(() => {
        console.log(CarouselRef.current.index)
    })

    return (
        <div>
            <Carousel ref={CarouselRef} >
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Carousel>
        </div>
    )
}