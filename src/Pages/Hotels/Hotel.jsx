import HeadingDescript from '../../Components/HeadingDescrip'
import {Navigation} from '../Home/Home'
import Button from '../../Components/Button'
import './Hotel.css'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { useSearch } from '../../contexts/useSearch'

import RoomSelector from '../../Components/RoomSelector/RoomSelector'
import { useState } from 'react'

const MILLISECONDS_PER_DAY = 24*60*60*1000;
function countDay(startDate, endDate){
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    return timeDiff/MILLISECONDS_PER_DAY;
}

export default function Hotel(){
    const searchData = useSearch();

    const location = useLocation();
    const hotelId = location.pathname.split('/')[2];
    const {data, loading, reFetch, error} = useFetch(`/api/hotel/${hotelId}`);

    const dayCount = searchData.dates?countDay(searchData.dates[0].startDate, searchData.dates[0].endDate):0;

    const [openReserve, setOpenReserve] = useState(false);

    function handleClick(e){
        setOpenReserve(prev=>!prev);
    }


    return (
    <div className='Desktop4'>
        {openReserve && <RoomSelector 
            rooms = {data.rooms}
            setOpenReserve={setOpenReserve}
        /> }
        <div className="frame2">
            <Navigation />
        </div>
        {loading ? (
            <HeadingDescript heading='Loading...' />
        ) : error ? (
            <HeadingDescript heading={error} />
        ) : ( data && 
        <div className="frame46">
            <div className="frame41">
                <HeadingDescript 
                    heading={data.name} 
                    description={data.details}
                />
                <Button onClick={handleClick} content='Reserve or Book Now' type='dark' />
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
                        heading={`Perfect for a ${dayCount} Night stay!`}
                        headingFontSize='25px'
                        description='These popular destination have a lot to offer In publishing and tytemporarily replace text in a pr'
                        descriptionFontSize='20px'
                        />
                    <div className="frame44">
                        <div className="priceText">${data.cheapestPrice * dayCount * searchData.options.room}</div>
                        <div className="durationText">{`(${dayCount} Nights)`}</div>
                    </div>
                    <Button onClick={handleClick} content='Reserve or Book Now' type='dark' />
                </div>
            </div>
        </div>
        )}
    </div>
    );

}