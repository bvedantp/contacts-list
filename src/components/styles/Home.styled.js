import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeadLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: #FFD42F;
        font-size: 3em;
        line-height: 60%;
        margin-bottom: 6px;

        b {
            color: white;
            font-size: 20px;
        }
    }
`

export const Hero = styled.main`
    position: relative;
    margin: 1rem;
    padding: 1rem;
    flex-grow: 1;
    flex-basis: 100vh;
    flex-shrink: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 8px;
`

export const NoContact = styled(Link)`
    text-decoration: none;
    font-size: 2em;
    font-weight: 900;
    padding: 1rem 3rem;
    opacity: 0.5;
    color: whitesmoke;
    border: 3px dotted #FFD42F;
    transition: opacity 300ms ease-in;

    &:hover, &:active {
        opacity: 1;
        box-shadow: 0 0 12px #FFD42F;
    }
`

export const AddContactBtn = styled(Link)`
    text-decoration: none;
    font-size: 2em;
    position: fixed;
    margin: 10px;
    padding: 10px;
    bottom: 0;
    right: 0;
    color: #FFD42F;
    transition: transform 500ms cubic-bezier(1, -0, 0, 1);

    &:hover, &:active {
        transform: scale(1.5);
    }
`