import styled from "styled-components"

export default function OptionMenu({handle, options}){
    return (<Wrapper>
        <Option>
            <Label>Adults</Label>
            <Frame12>
                <Button onClick={()=>handle('adult', 'i')}><ButtonText>+</ButtonText></Button>
                <FrameText12>{options.adult}</FrameText12>
                <Button onClick={()=>handle('adult', 'd')}><ButtonText>-</ButtonText></Button>
            </Frame12>
        </Option>
        <Option>
            <Label>Child</Label>
            <Frame12>
                <Button onClick={()=>handle('child', 'i')}><ButtonText>+</ButtonText></Button>
                <FrameText12>{options.child}</FrameText12>
                <Button onClick={()=>handle('child', 'd')}><ButtonText>-</ButtonText></Button>
            </Frame12>
        </Option>
        <Option>
            <Label>Rooms</Label>
            <Frame12>
                <Button onClick={()=>handle('room', 'i')}><ButtonText>+</ButtonText></Button>
                <FrameText12>{options.room}</FrameText12>
                <Button onClick={()=>handle('room', 'd')}><ButtonText>-</ButtonText></Button>
            </Frame12>
        </Option>
    </Wrapper>);
}

const Wrapper = styled.div`
/* Auto layout */

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 39px 15px;
gap: 40px;

position: absolute;
width: 331px;
height: 315px;

background: #0B3E86;
border-radius: 6px;
z-index: 20;
`
const Option = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 8px;

// width: 301px;
height: 42px;

`

const Label = styled.div`

width: 84px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 34px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

`
const Frame12 = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;

width: 179px;

`
const Button = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 17px;
gap: 10px;

width: 61px;

background: #818181;
align-self: stretch;
cursor: pointer;
`
const FrameText12 = styled.div`
/* 12 */


width: 30px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 34px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
`

const ButtonText = styled.div`
width: 27px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 48px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
`


