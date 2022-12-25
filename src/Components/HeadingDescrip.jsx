import styled from 'styled-components'

export default function HeaderDescript({heading, description, color, align}){
    return(
        <Wrapper align={align}>
            <Heading color={color}>{heading}</Heading>
            <Description color={color}>{description}</Description>
        </Wrapper>
    )
}

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
    align-self: stretch;
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

    color: ${({color})=>color};
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
    color: ${ ({ color })=>color };
`;
