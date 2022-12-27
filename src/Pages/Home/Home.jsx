import {useState} from 'react'
import './Header.css'
import Button from '../../Components/Button'
import SearchBox from '../../Components/SearchBox'
import ModeButton from '../../Components/ModeButton'
import HeadingDescript from '../../Components/HeadingDescrip'
import Card2 from '../../Components/Cards/Card2'
import Card from '../../Components/Cards/Card'
import './Body.css'

//For Date Range
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


export default function Home(){
    return (
    <>  
        <Header />
        <Body />
        <Footer />
        
    </>
    )
}

function Header(){
    const [state, setState] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
    ]);

    return (
        <div className="frame2">
            <div className="frame5">
                <div className="Booking">Booking.com</div>
                <div className="frame4">
                    <Button content='Sign In' />
                    <Button content='Register' />
                </div>
            </div>

            <div className="frame6">
                <ModeButton content='Stay' />
                <ModeButton content='Travel' state='active' />
                <ModeButton content='Taxi' />
            </div>

            <div className="frame8">
                <div className="Find">Find Your Next Stay</div>
                <div className="Search">Search for Hotels, Stays, Travels and More...</div>
            </div>
            <div className="frame7">
                <SearchBox content='Where you are going?' />
                <div style={{'z-axis: 100'}}>
                    <SearchBox content='Dates' />
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />
                </div>
                <SearchBox content='People' />
                <Button content='Search' type='dark' />
            </div>
        </div>
    );
}


function Body(){
    return (
        <div className="frame10">
            <Section1 />
            <Section2 />
        </div>
    )
}


function Section1(){
    return(
    <>
        <div className="frame13">
            <Card2 imgSrc='/public/Location Images/Banglore.png' title='Banglore'/>
            <Card2 imgSrc='/public/Location Images/Jaipur.png' title='Jaipur'/>
            <Card2 imgSrc='/public/Location Images/New Delhi.png' title='New Delhi'/>
        </div>
    </>
    )
}

function Section2(){
    return (
    <>
        <div className="frame12">
            <HeadingDescript heading='Best Offers' description='These popular destination have lot to offer.'/>
            <div className="frame11">
                <Card
                    imgSrc='/Location Images/New Delhi.png'
                    title='New Delhi'
                    description='5247 Properties'
                />
                <Card
                    imgSrc='/Location Images/Banglore.png'
                    title='Banglore'
                    description='5247 Properties'
                />
                <Card
                    imgSrc='/Location Images/Mumbai.png'
                    title='Mumbai'
                    description='5247 Properties'
                />
                <Card
                    imgSrc='/Location Images/Jaipur.png'
                    title='Jaipur'
                    description='5247 Properties'
                />
            </div>
        </div>
    </>
    )
}

function Footer(){
    return (
        <div className="frame15">
            <HeadingDescript 
                align='center'
                color='white'
                heading='Save Time, Save Money'
                description='Sign-Up and we will give you the best offer.'
            />
            <div className="frame14">
                <SearchBox content='Enter Your Mail!!!' />
                <Button content='Subscribe' type='dark' />
            </div>
        </div>
    )
}
