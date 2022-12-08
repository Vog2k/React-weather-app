import { Parallax } from 'react-parallax';
import img4 from "../background/WANAKA.jpg";

const ImageFour = () => (

    <Parallax className='image' blur={0} bgImage={img4} strength={300} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
        </div>
    </Parallax>
);

export default ImageFour

