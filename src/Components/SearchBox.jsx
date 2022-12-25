import styled from "styled-components"

const Wrapper = styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 7px;

    width: 350px;
    height: 30px;

    background: #FFFFFF;
    border: 3px solid #FAFF06;
`;
const InnerText = styled.div`
/* Find the Search Text */

    width: 108px;
    height: 12px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 10px;
    line-height: 12px;

    color: rgba(0, 0, 0, 0.7);
`;
export default function SearchBox({content}){
    return (
        <Wrapper>
            <InnerText>{content}</InnerText>
        </Wrapper>
    );
}