import { Parallax } from 'react-parallax';
import img2 from "../background/stars.jpg";

const ImageTwo = () => (
    <Parallax className='image2' blur={0} bgImage={img2} strength={500} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Contact us</span>
        </div>
    </Parallax>
);

export default ImageTwo

