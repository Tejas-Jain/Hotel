import { Navigation } from "../Home/Home"
import Button from "../../Components/Button"
import './List.css'
import './List2.css'
import HeaderDescript from "../../Components/HeadingDescrip"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import {format} from 'date-fns'
import useFetch from "../../hooks/useFetch"

export default function List(){

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [option, setOption] = useState(location.state.option);
    const apiData = useFetch(`/api/hotel/Filter?city=${destination}&maxPrice=${option.maxPrice || 999999}&minPrice=${option.minPrice || 0}`)

    return <div className="desktop3">
        <div className="frame2">
            <Navigation />
        </div>

        <div className="frame47">
            <OptionBox
                onChange={e=>setDestination(e.target.value)}
                destination={destination}
                date={date}
                option = {option}
                setOption={setOption}
            />
            <ListItem {...apiData} />
        </div>
    </div>
}


function ListItem(props){
    const {data, loading, error} = props
    // if(err) console.log(error)
    return (<>
        <div className="frame40">
        {loading ? ("Loading..."):
        (data && data.map(hotel=>(
            <Frame23 key={hotel._id} {...hotel} />
        )))}
        </div>
    </>)
}

function Frame23({_id, name, details, cheapestPrice, image}){
    const navigate = useNavigate();
    return <div className="frame23">
        <div className="hotelImage"></div>
        <div className="frame39">
            <div className="frame38">
                <HeaderDescript
                    heading={name}
                    description={details}
                />
                {details}
            </div>
            <div className="frame37">
                ${cheapestPrice}
                <Button onClick={()=>navigate(`/hotels/${_id}`)} content='See Availability' type="dark"/>
            </div>
        </div>
    </div>
}


function OptionBox(props){
    var {
        destination, 
        date, 
        option, 
        onChange,
        setOption
    } = props;

    function updateOption(name, value){
        setOption(prev=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (<>
        <div className="frame17">
            <div className="searchText">Search</div>
            <Frame36 
                onChange={onChange}
                heading='Destination' 
                placeholder={destination} />
            <Frame36 
                onChange={onChange}
                heading='Check-in'
                placeholder={format(date[0].startDate, "dd/MM/yyyy")+" to "+format(date[0].endDate, 'dd/MM/yyy')}
            />
            <div className="frame33">
                <div className="optionText">Options</div>
                <div className="frame32">
                    <Frame29 label="Min Price" placeholder={option.minPrice} type='number' onChange={e=>updateOption('minPrice', e.target.value)}/>
                    <Frame29 label="Max Price" placeholder={option.maxPrice} type='number' onChange={e=>updateOption('maxPrice', e.target.value)}/>
                    <Frame29 label="Adult" placeholder={option.adult} type='number' onChange={e=>updateOption('adult', e.target.value)}/>
                    <Frame29 label="Children" placeholder={option.child} type='number' onChange={e=>updateOption('child', e.target.value)}/>
                    <Frame29 label="Room" placeholder={option.room} type='number' onChange={e=>updateOption('room', e.target.value)}/>
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

function Frame29({label, placeholder, type, onChange}){
    return (
        <div className="frame29">
            {label}
            <input min='0' type={type} onChange={onChange} className="frame20" placeholder={placeholder} />
        </div>
    ) 
}