import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }

`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }

`;

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 16px;
    text-align: center;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }

`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled.p`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 16px;

    &:hover{
        color: #01bf71;
        transition: 0ms.3s ease-in-out;
    }
`;

export const LinkIcon = styled.img`
    color: white;
    margin-bottom: 10px;
    border-radius: 10px; 
    margin: 0 10px 10px 0;
    max-width: 76%;
    max-height: 50%;
   
`;
