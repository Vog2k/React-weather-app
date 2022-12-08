import { Parallax } from 'react-parallax';
import nzw from "../background/Auckland.jpg";
const ImageOne = () => (
    <Parallax className='image1' blur={0} bgImage={nzw} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">National</span>
        </div>
    </Parallax>
);

export default ImageOne

