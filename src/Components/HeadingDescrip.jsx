import styled from 'styled-components'

export default function HeaderDescript({heading, description, color, align, headingFontSize='40px', descriptionFontSize='20'}){
    return(
        <Wrapper align={align}>
            <Heading color={color} fontSize={headingFontSize}>{heading}</Heading>
            <Description color={color} fontSize={descriptionFontSize}>{description}</Description>
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
    min-width: 0;
    min-height: 0;
`;

const Heading = styled.div`
    // min-height: 42px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: ${({fontSize})=>fontSize};
    line-height: 48px;

    color: ${({color})=>color};
`
const Description = styled.div`
    min-height: 24px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: ${({fontSize})=>fontSize};
    line-height: 24px;
    display: flex;
    align-items: flex-end;
    color: ${ ({ color })=>color };
`;
