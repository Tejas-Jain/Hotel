import { Navigation } from "../Home/Home"
import Button from "../../Components/Button"
import './List.css'
import './List2.css'
import HeaderDescript from "../../Components/HeadingDescrip"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import {format} from 'date-fns'

export default function List(){

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [option, setOption] = useState(location.state.option);


    return <div className="desktop3">
        <div className="frame2">
            <Navigation />
        </div>
        <div className="frame47">
            <OptionBox 
                destination={destination}
                date={date}
                option={option}
            />
            <ListItem />
        </div>

    </div>
}


function ListItem(){
    return (<>
        <div className="frame40">
            <Frame23 />
            <Frame23 />
        </div>
    </>)
}

function Frame23(){
    return <div className="frame23">
        <div className="hotelImage"></div>
        <div className="frame39">
            <div className="frame38">
                <HeaderDescript 
                    heading="Hotel 1" 
                    description="These popular destination have a lot to offer"
                />
                Details of the hotel sdk sldfjksdjfl sdkf jdfkls dlfjlkdfjl sdkjf dfadsfadsf sdf sdfsdfsdf dfsdf sdfsdfsdfdsfsdfsdfsdf sdf asdf. Details of the hotel sdk sldfjksdjfl sdkf jdfkls
            </div>
            <div className="frame37">
                $129
                <Button content='See Availability' type="dark"/>
            </div>
        </div>
    </div>
}


function OptionBox({destination, date, option}){

    return (<>
        <div className="frame17">
            <div className="searchText">Search</div>
            <Frame36 
                heading='Destination' 
                placeholder={destination} />
            <Frame36 
                heading='Check-in & out Date'    
                placeholder={format(date[0].startDate, "dd/MM/yyyy")+" to "+format(date[0].endDate, 'dd/MM/yyy')} 
            />
            <div className="frame33">
                <div className="optionText">Options</div>
                <div className="frame32">
                    <Frame29 label="Adult" placeholder={option.adult} type='number' />
                    <Frame29 label="Childrens" placeholder={option.child} type='number' />
                    <Frame29 label="Room" placeholder={option.room} type='number' />
                </div>
            </div>
            <Button content={"Search"} type='dark' />
        </div>
    </>)
}

function Frame36({heading, placeholder, onChange, type}){
    return (<div className="frame36">
        <label className="destinationText">{heading}</label>
        <input type={type} className="frame18" placeholder={placeholder} onChange={onChange}/>
    </div>);
}

function Frame29({label, placeholder, type}){
    return (
        <div className="frame29">
            {label}
            <input min='0' type={type} className="frame20" placeholder={placeholder} />
        </div>
    ) 
}