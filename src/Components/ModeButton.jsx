import styled from "styled-components";
import icon from '../assets/bed.svg'

export default function ModeButton({ content, state }) {
    return (
        <Wrapper state={state}>
            <Icon><img src={icon} alt="" /></Icon>
            <InnerText>{content}</InnerText>
        </Wrapper>
    );
}

const Wrapper = styled.div`

    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 10px;
    gap: 5px;

    width: 105.26px;
    height: 45px;
    ${({state}) => state === 'active' ? 'border: 2px solid #FFFFFF;':''}
    border-radius: 50px;
`;

const Icon = styled.div`
    width: 21px;
    height: 19px;
`;

const InnerText = styled.div`
/* Button */


    width: 48px;
    height: 21px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    line-height: 21px;
    /* identical to box height */


    color: #FFFFFF;
`;