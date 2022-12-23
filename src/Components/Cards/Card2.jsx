import styled from 'styled-components'
export default function Card2({imgSrc, title}){
    <Wrapper>
        <Image src={imgSrc}></Image>
        <Title>{title}</Title>
    </Wrapper>
}

const Wrapper = styled.div`
width: 391px;
height: 392px;
`
const Image = styled.img`
    position: absolute;
    width: 391px;
    height: 392px;
    left: 0px;
    top: 0px;
    background: url(image.png);
    border-radius: 13px;
`
const Title = styled.div`
/* New Delhi */


position: absolute;
width: 256px;
height: 73px;
left: 35px;
bottom: 16px;

font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 40px;
line-height: 48px;
display: flex;
align-items: center;

color: #FFFFFF;
`