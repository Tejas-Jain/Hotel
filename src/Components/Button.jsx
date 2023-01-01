import styled from 'styled-components'

const Wrapper = styled.div`
/* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3px 22px;
    gap: 10px;
    // width: 96px;

    background: ${props=>props.type==='dark'?'#032350': '#FFFFFF'};
    flex-shrink: 0;
    border-radius: 6px;
    align-self: stretch;
    cursor: pointer;
`;
const InnerText = styled.div`
/* Button */


    // width: 61px;
    // height: 19px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.type === 'dark' ? 'White' :'#04295E'};
`;

export default function Button({content, type='light'}) {
    return (
        <Wrapper type={type}>
            <InnerText type={type}>{content}</InnerText>
        </Wrapper>
    )
};