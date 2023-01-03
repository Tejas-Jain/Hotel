import HeadingDescript from '../../Components/HeadingDescrip'
import {Navigation} from '../Home/Home'
import Button from '../../Components/Button'
import './Hotel.css'

export default function Hotel(){
    return (
    <div className='Desktop4'>

        
        <div className="frame2">
            <Navigation />
        </div>


        <div className="frame46">
            <div className="frame41">
                <HeadingDescript 
                    heading='Tower Street Apartment' 
                    description='These popular destination have a lot to offer.'
                />
                <Button  content='Reserve or Book Now' type='dark' />
            </div>
            <div className="frame42">
                <img className="imageDiv"  src='https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450066.jpeg?k=4adfab312f5d26da9f81da48d8c95ca8f108215b2c84085590891a9e0e17b144&o='/>
                <img className="imageDiv"  src='https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450066.jpeg?k=4adfab312f5d26da9f81da48d8c95ca8f108215b2c84085590891a9e0e17b144&o='/>
                <img className="imageDiv"  src='https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450066.jpeg?k=4adfab312f5d26da9f81da48d8c95ca8f108215b2c84085590891a9e0e17b144&o='/>
                <img className="imageDiv"  src='https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450066.jpeg?k=4adfab312f5d26da9f81da48d8c95ca8f108215b2c84085590891a9e0e17b144&o='/>
                <img className="imageDiv"  src='https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450066.jpeg?k=4adfab312f5d26da9f81da48d8c95ca8f108215b2c84085590891a9e0e17b144&o='/>
                <img className="imageDiv"  src='https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450066.jpeg?k=4adfab312f5d26da9f81da48d8c95ca8f108215b2c84085590891a9e0e17b144&o='/>
            </div>
            <div className="frame45">
                <HeadingDescript 
                    heading='Stay in the heart of Krakow'
                    description='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.'
                />
                <div className="frame28">
                    <HeadingDescript
                        heading='Perfect for a 9 Night stay!'
                        headingFontSize='25px'
                        description='These popular destination have a lot to offer In publishing and tytemporarily replace text in a pr'
                        descriptionFontSize='20px'
                    />
                    <div className="frame44">
                        <div className="priceText">$129</div>
                        <div className="durationText">(9 Nights)</div>
                    </div>
                    <Button content='Reserve or Book Now' type='dark' />
                </div>
            </div>
        </div>


    </div>
    );

}