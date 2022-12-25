import styled from "styled-components"
import CityImages from '../../../public/Location Images/CityImages'
export default function Card({ imgSrc, title, description, price, review }) {
    return (
        <Wrapper>
            <Image src={imgSrc}></Image>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Price price={price}>Starting from {price}</Price>
            <Review>{review}</Review>
        </Wrapper>
        
    );
}


const Wrapper = styled.div`
    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;

    width: 226px;
    align-self: stretch;
`


const Image = styled.img`
    border-radius: 7%;
    height: 206px;
    background: url(${({src})=> src});
`
const Title = styled.div`


font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 27px;
line-height: 33px;
/* identical to box height */


color: #000000;

align-self: stretch;

`
const Description = styled.div`


font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;

color: #171616;
`
const Price = styled.div`


    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    display: ${args=>!args.price? 'none': 'auto'};
    color: #000000;

`

const Review = styled.div`


font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;

color: #1E1E1E;

`

