import styled from "styled-components"
export default function Card({ imgSrc, title, description, price, review }) {
    return (
        <Wrapper>
            <Image src={'../../assets/Location Images/'+imgSrc}></Image>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Price>Starting from ${price}</Price>
            <Review>{review}</Review>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    width: 226px;
    height: 348px;
`


const Image = styled.img`
    width: 226px;
    height: 206px;
    background: url(${({src})=> src});
`
const Title = styled.div`
    width: 208px;
    height: 66px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;

    color: #000000;

`
const Description = styled.div`
width: 60px;
height: 24px;

font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;

color: #171616;
`
const Price = styled.div`
width: 151px;
height: 24px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;

color: #000000;

`

const Review = styled.div`
width: 169px;
height: 18px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;

color: #1E1E1E;

`

