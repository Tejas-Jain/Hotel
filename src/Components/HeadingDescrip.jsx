import styled from 'styled-components'

const Wrapper = styled.div`
    /* Auto layout */

    display: flex;
    flex-direction: column;

    align-items: ${({align})=>{
        if(align=='fill' || align=='stretch')
            return 'stretch'
        if(align=='center')
            return 'center'
        if(align=='right')
            return 'flex-end'
        else
            return 'flex-start'
    }};
    
    padding: 0px;

    min-width:0;
    min-height=0;
`;

const Heading = styled.div`
    min-height: 42px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    color: ${({theme})=>theme};
`
const Description = styled.div`
    min-height: 24px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: flex-end;
    color: ${ ({ theme })=>theme };
`;

export default function HeaderDescript({heading, description, theme, align}){
    return(
        <Wrapper align={align}>
            <Heading theme={theme}>{heading}</Heading>
            <Description theme={theme}>{description}</Description>
        </Wrapper>
    )
}