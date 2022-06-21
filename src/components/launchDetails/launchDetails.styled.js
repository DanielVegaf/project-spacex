import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100vh;
    padding: 70px;
    box-sizing: border-box;
`;

export const ReturnHome = styled(Link)`
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 50px;
    cursor: pointer;
    padding: 10px 15px;
    background-color: #192a56;
    color: white;

    &:hover {
        background-color: #273c75;
        border: 1px solid #273c75;
    }
`;

export const DetailsContainer = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    margin: 40px 0 auto;
    width: 500px;
    padding: 70px;
    box-sizing: border-box;
`;