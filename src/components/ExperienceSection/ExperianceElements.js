import styled from "styled-components";




export const ExperienceContainer = styled.div`
    height:700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;
export const ExperienceWrapper = styled.div`
    align-items: center;
    position: relative;
`;

export const TabContainer = styled.div`
    height: 100px;
    font-family: inherit;
    
`;
export const TabsContent = styled.div`
    color: white;
    justify-content: right;

    &:hover{
        color: green;
        transition: all 0.2s ease-in-out;
    }
`;

export const TabContentHeader = styled.h1`
    color: white;
    
    
`;
export const SubTabContent = styled.p`
    color: white;
    margin:20px;
    font-family: inherit;
`;

export const BulletedList = styled.ul`
    color: red;
    font-family: inherit;
`;

export const ExperienceH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const SubtitleH3 = styled.h3`
    font: 2.5rem;
    color:white;
`;

export const SubtitleH5 = styled.h5`
    font: .5rem;
    color: white;
`;