import './Home.css'
import Button from '../../Components/Button'
import SearchBox from '../../Components/SearchBox'
import ModeButton from '../../Components/ModeButton'
import HeadingDescript from '../../Components/HeadingDescrip'
export default function Home(){
    return (
    <>
        <div className="frame2">

            <div className="frame5">
                <div className="Booking">Booking.com</div>
                <div className="frame4">
                    <Button content='Sign In' />
                    <Button content='Register' />
                </div>
            </div>

            <div className="frame6">
                <ModeButton content='Stay'/>
                <ModeButton content='Travel' state='active'/>
                <ModeButton content='Taxi'/>
            </div>

            <div className="frame8">
                <div className="Find">Find Your Next Stay</div>
                <div className="Search">Search for Hotels, Stays, Travels and More...</div>
            </div>
            <div className="frame7">
                <SearchBox content='Where you are going?'/>
                <SearchBox content='Dates'/>
                <SearchBox content='People'/>
                <Button content='Search' type='dark'/>

            </div>
        </div>
        <HeadingDescript 
            heading="Hello Heading " 
            description = "Hello Description. This si the descripon sdlfklsdfkjlsdkjflkjf skdflsjdfkajsdlfkjsdlf "
            theme = "yellow"
            align = "center"
        />
    </>
    )
}