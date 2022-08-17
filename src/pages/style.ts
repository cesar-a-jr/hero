import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    > div{
        width: 50%;
    }

    h1{
        font-size: 40px;
        font-weight: 700;
        color: #1E255E;
        margin-bottom: 20px;

    }

    p{
        font-size:16px;
        font-weight: 500;
        color: #60668F;
        padding-right: 150px
    }

`

export const CollumnImage = styled.div`
    text-align: right;
    position: relative;

`