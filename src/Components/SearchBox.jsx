import styled from "styled-components"

export default function SearchBox({onClick, content}){
    return (
        <Wrapper onClick={onClick}>
            <InputBox placeholder={content}/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    box-sizing: border-box;
    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;

    width: 350px;
    height: 40px;

    background: #FFFFFF;
    border: 3px solid #FAFF06;
`;
const InputBox = styled.input`
/* Find the Search Text */
    width: 100%;
    height: 100%;
    
    border: 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 12px;

    // color: rgba(0, 0, 0, 0.7);
`;