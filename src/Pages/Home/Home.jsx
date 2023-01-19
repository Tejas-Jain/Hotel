import {useState} from 'react'
import './Header.css'
import Button from '../../Components/Button'
import SearchBox from '../../Components/SearchBox'
import ModeButton from '../../Components/ModeButton'
import HeadingDescript from '../../Components/HeadingDescrip'
import Card2 from '../../Components/Cards/Card2'
import Card from '../../Components/Cards/Card'
import './Body.css'
import { useSearch } from '../../contexts/search'
import { useNavigate } from 'react-router-dom'
//For Date Range
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'

//Options Component
import OptionMenu from '../../Components/OptionMenu'

//useFetch Component
import useFetch from '../../hooks/useFetch'

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

    const SearchOptions = useSearch();
    console.log(SearchOptions);
    const navigate = useNavigate();

    const [destination, setDestionation] = useState(SearchOptions.city);

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
    ]);

    const [openOption, setOpenOption] = useState(false);
    const [option, setOption] = useState({
        adult: 1,
        child: 0,
        room: 1,
    })
    
    const handle = (name, operation)=>{
        setOption(prev=>{ 
            return{
                ...prev,
                [name]: operation==='i' ? option[name]+1 : Math.max(option[name]-1, 0),
            }
        })
    }

    function handleSearch(){
        navigate('/hotels', { state: {destination, date, option}});
    }

    return (
        <div className="frame2">

            <Navigation />

            <div className="frame8">
                <div className="Find">Find Your Next Stay</div>
                <div className="Search">Search for Hotels, Stays, Travels and More...</div>
            </div>
            <div className="frame7">
                <SearchBox 
                    content='Where you are going?' 
                    onChange={e=>setDestionation(e.target.value)}
                />
                <div >
                    <SearchBox onClick={()=>setOpenDate(!openDate)} content={format(date[0].startDate, "dd/MM/yyyy")+" to "+format(date[0].endDate, "dd/MM/yyyy")} />
                    {openDate && <DateRange
                        className='Date'
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                    />}
                </div>
                <div>
                    <SearchBox onClick={()=>setOpenOption(!openOption)} content={option.adult+" Adults "+option.child+" Child "+option.room+" Rooms "} />
                    {openOption && <OptionMenu 
                        handle={handle}
                        option={option}
                    />}
                </div>
                <Button content='Search' type='dark' onClick={()=>handleSearch()} />
            </div>
        </div>
    );
}

export function Navigation(){
    const navigate = useNavigate();
    return (<>
        <div className="frame5" >
            <a onClick={()=>navigate('/')}  style={{'cursor': 'pointer'}}>Booking.com</a>
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
    </>)
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
    const {data, loading, error, reFetch} = useFetch('/api/hotel/CountHotel?cities=Delhi,Mumbai,Banglore')
    // console.log(error);
    // console.log(data);
    return(
    <>
        <div className="frame13">
            { loading ? ("Loading .... "): 
            (<>
                {data.map((x, i)=>(   
                    <Card2 key={i} imgSrc = {`/public/Location Images/${x.city}.png`} title ={x.city} count = {x.cityCount} />
                ))}
            </>)}
        </div>
    </>
    )
}

function Section2(){
    const {data, loading, error, reFetch} = useFetch('/api/hotel/CountHotel?cities=Delhi,Mumbai,Banglore,Indore')    
    return (
        <>
            <div className="frame12">
                <HeadingDescript heading='Best Offers' description='These popular destination have lot to offer.'/>
                <div className="frame11">
                { loading ? ("Loading ...") : 
                (data.map(({city, cityCount}, i)=>(
                    <Card key={i}
                        imgSrc= {`/public/Location Images/${city}.png`}
                        title={city}
                        description={cityCount + ' Properties'}
                    /> 
                )))}
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
