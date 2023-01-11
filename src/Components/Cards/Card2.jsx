import styled from 'styled-components'
export default function Card2({imgSrc, title, count}){
    return (
    <Wrapper>
        <Image src={imgSrc}></Image>
        <Title>{title} <br /> {count} </Title>
    </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    width: 391px;
    height: 392px;
`
const Image = styled.img`
    position: absolute;
    width: 391px;
    height: 392px;
    background: url(${({src})=>src});
    border-radius: 13px;
`
const Title = styled.div`

    position: relative;
    height: 100%;
    left: 10px;
    bottom: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    display: flex;
    align-items: flex-end;

    color: #FFFFFF;
`