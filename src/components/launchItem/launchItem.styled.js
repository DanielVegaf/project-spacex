import styled from "styled-components";
import { Link } from "react-router-dom";

export const Item = styled.div`
display: flex;
flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 15px;
    box-sizing: border-box;
    height: 240px;
`;

export const ItemHeader = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`;

export const ContainerLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    margin: 40px;
`;

export const MoreDetails = styled(Link)`
    button {
        border: 1px solid transparent;
        border-radius: 50px;
        cursor: pointer;
        padding: 10px 15px;
        background-color: #192a56;
        color: white;
    }
    button:hover {
        background-color: #273c75;
        border: 1px solid #273c75;
    }
`;