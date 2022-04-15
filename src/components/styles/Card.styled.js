import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CardArea = styled.div`
    border: 3px solid #FFD42F;
    font-size: 0.7em;
    border-radius: 5px;
    padding: 8px;
    margin: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 3px;
`

export const ProfilePic = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 8px;
`

export const NameStyle = styled.h2`
    text-align: center;
    color: #FFD42F;
    text-transform: capitalize;
    margin-bottom: 8px;
`

export const PhoneStyle = styled.p`
    display: flex;
    justify-content: space-between;
    text-align: left;

`

export const Icon = styled(FontAwesomeIcon)`
    color: #FFD42F;
`

export const TagsArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6px 0;
`

export const TypeStyle = styled.p`
    border: 1px solid #FFD42F;
    padding: 1px 12px;
    font-size: 0.8em;
    text-align: center;
    background-color: #FFD42F;
    color: #1B2025;
    text-transform: capitalize;
    border-radius: 16px;
`

export const WhatsStyle = styled.p`
    font-size: 1.8em;
`

export const CRUDArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    button {
        cursor: pointer;
        background-color: #1B2025;
        border: none;
        padding: 4px;
        align-self: stretch;
    }
`

export const LinkStyled = styled(Link)`
    text-align: center;
    text-decoration: none;
    border: 2px solid #FFD42F;
    padding: 4px 12px;
    flex-grow: 1;
    color: #FFD42F;
    border-radius: 22px;
`