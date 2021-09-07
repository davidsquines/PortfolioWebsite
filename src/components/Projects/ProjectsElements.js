import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    height:800px;
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

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; //defines the column for each card, will show 3 columns
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
        
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
        
    }

`;

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
    
        align-items: center;
    }

    

    &:hover{
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: default;
    }
`;

export const GithubIcon = styled.img`
    max-width: 20%;
    margin-bottom: 10px;
    position: absolute;
    top:0;
    right: 0%;
    border-radius: 10px; 
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232342;
    border-radius: 10px; 

    @media screen and (max-width: 768px){
        max-width: 100%;
        max-height: 75%;
        border-radius: 10px;
        position: center;
    }

    @media screen and (max-width: 480px){
        .form-col-4 {
            flex: 0 0 33.33333%;
            max-width: 33.33333%;
        }
        
        .form-col-8 {
            flex: 0 0 66.66667%;
            max-width: 66.66667%;
        }
        
        .offset-form-col-4 {
            margin-left: 33.33333%;
        }
    }

`;


export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const TechUsedP = styled.p`
    font-size: .5rem;
    text-align: center;
    color: gray;
    font-weight: bold;
`;
