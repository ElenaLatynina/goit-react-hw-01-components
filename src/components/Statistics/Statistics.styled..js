import styled from "styled-components";

export const Stat = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
width: 320px;
color: white;
border: 0.5px solid rgba(160, 158, 158, 0.486);

`;

export const Title = styled.h2`
font-weight:900;
font-size:20px;
text-transform:uppercase;
color:rgba(28, 27, 27, 0.342);
padding: 10px 0px;
text-align:center;

`;

export const StatList = styled.ul`
list-style: none;
display: flex;
margin: 0;
padding: 0;
list-style: none;

`;


export const StatItem = styled.li`
width: 65px;
padding: 10px 0 15px;
`;

export const StatLabel = styled.span`
display: block;
font-size:14px;
text-align: center;
margin-bottom:4px;

`;

export const StatValue = styled.span`
display: block;
text-align: center;
font-size:18px;

`;
