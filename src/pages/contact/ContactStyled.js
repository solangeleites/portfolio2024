import styled from "styled-components";
import { mobile } from "../../queries/mediaQueries";

export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: baseline;
padding: 50px 0;
${mobile}{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
}
`;

export const ContainerRow = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
gap: 25px;
padding: 10px;
border-radius: 10px;
text-align: center;
`
export const Title = styled.h2`
font-family: 'Raleway', sans-serif;
`
export const Paragraph = styled.p`
font-family: 'Raleway', sans-serif;
text-align:start;
a{
    text-decoration: none;
    margin-left: 10px;
    font-family: 'Raleway', sans-serif;
}
`
