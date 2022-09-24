import styled from "styled-components";

export const ProfileCard = styled.div`
display: block;

margin: 0px auto;
padding:0px;
width: 320px;

border: 1px solid grey;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

text-align: center;

`;

export const Description = styled.div`
margin: 4px;
padding:4px;

`;

export const Avatar = styled.img`
width:100px;
margin-top:24px;
margin-bottom: 24px;
border: 1px solid grey;
border-radius:50%;

`;

export const Name = styled.p`
margin: 8px;
font-weight:700;

`;

export const UserTag = styled.p`
margin: 8px;
color: grey;
font-weight:700;

`;

export const UserLocation = styled.p`
margin: 8px;
color: grey;
font-weight:700;

`;

export const UserStats = styled.ul`
list-style:none;
display: flex;
gap:8px;
`;

export const StatBlock = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:8px;
width: calc(100%-8px)/3;
`; 