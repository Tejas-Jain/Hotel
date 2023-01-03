import styled from 'styled-components'

export default function Button({content, type='light', onClick}) {
    return (
        <Wrapper type={type} onClick={onClick}>
            {content}
        </Wrapper>
    )
};

const Wrapper = styled.div`
/* Auto layout */

    // align-items: center;

    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 22px;
    // gap: 10px;

    // width: 96px;
    // width: max-content;
    // height: 40px;

    background: ${props=>props.type==='dark'?'#032350': '#FFFFFF'};
    flex-shrink: 0;
    border-radius: 6px;
    // align-self: stretch;
    cursor: pointer;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.type === 'dark' ? 'White' :'#04295E'};
`;