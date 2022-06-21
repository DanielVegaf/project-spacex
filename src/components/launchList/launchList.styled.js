import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;

    h1{
        text-align: center;
    }
`;

export const Img = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0 0 50px;

    img{
        width: 300px;
    }
`;

export const Grid = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    align-items: start;
    padding: 50px;
    box-sizing: border-box;
`;

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: white;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px;

    input {
        border: none;
        border-radius: 50px;
        outline: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        padding: 15px 25px;
        font-weight: bold;
    }
`;