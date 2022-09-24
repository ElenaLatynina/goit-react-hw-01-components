import styled from "styled-components";

export const ProfileCard = styled.div`
display: block;

margin: 0px auto;
padding:0px;
width: 320px;

border: 1px solid blue;

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
margin: 4px;
font-weight:700;

`;

export const UserTag = styled.p`
margin: 4px;
color: grey;
`;

export const UserLocation = styled.p`
margin: 4px;
color: grey;
`;

export const UserStats = styled.ul`
list-style:none;
display: flex;
`;