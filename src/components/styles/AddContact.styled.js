import styled from "styled-components";
import { Link } from "react-router-dom";

export const ForCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

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

export const FormStyle = styled.form`
position: relative;
    margin: 1rem;
    padding: 1rem;
    min-width: 30vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    max-width: 270px;
    gap: 8px;
    border: 7px solid #FFD42F;
    border-radius: 8px;

    label {
        font-size: 0.6em;
        opacity: 0.8;
    }

    input {
        padding: 4px;
        margin-bottom: 12px;
        background-color: #1B2025;
        color: #FFD42F;
        border-radius: 5px;
        border: 2px solid #FFD42F;
        outline: none;

        &:focus, &:active {
            background-color: #ffd52f;
            color: #1B2025;
        }

        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #ffd52f71;
        }
        ::-moz-placeholder { /* Firefox 19+ */
        color: #ffd52f71;
        }
        :-ms-input-placeholder { /* IE 10+ */
        color: #ffd52f71;
        }
        :-moz-placeholder { /* Firefox 18- */
        color: #ffd52f71;
        }
            }
    
    select {
        border: 2px solid #ffd52f;
        padding: 4px;
        background-color: #1B2025;
        color: #FFD42F;
        border-radius: 5px;
        outline: none;
    }
    
    input[type="file"] {
    display: none;
    }
`

export const CheckBoxDiv = styled.div`
    position: absolute;
    bottom: 5%;
    left: 5%;
    display: flex;
    flex-direction: column;

    input[type="checkbox"] {
        margin: 5px;
        accent-color: #FFD42F;
        height: 30px;
        width: 30px;
        background-color: black;
    }
`

export const CustomFileSelect = styled.label`
    border: 2px solid #FFD42F;
    color: #FFD42F;
    border-radius: 5px;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
`

export const UploadSpace = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 8px;
    margin-top: 12px;

    button {
        cursor: pointer;
        padding: 4px 12px;
        border-radius: 5px;
        border: 3px solid #ffd52f;
        background-color: #FFD42F;
        font-size: 0.6em;
    }
`

export const SubmitBtn = styled(Link)`
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
    color: #FFD42F;
    border-radius: 38px;
    border: 3px solid #FFD42F;
    padding: 5px 34px;
    font-weight: 700;

    &:hover, &:active {
        background-color: #FFD42F;
        color: #1B2025;
    }
`

export const CloseBtn = styled(Link)`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1em;
    cursor: pointer;
    padding: 4px;
    margin: 8px;
    background-color: #1B2025;
    color: #FFD42F;
`