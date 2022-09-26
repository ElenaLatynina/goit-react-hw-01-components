import styled from "styled-components";

export const ProfileCard = styled.div`
display: flex;
flex-direction:column;

margin: 40px auto 0;
width: 320px;
border: .5px solid rgba(160, 158, 158, 0.486);

  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

text-align: center;

`;

export const Description = styled.div`
padding:40px  60px;
text-align:center;

`;

export const Avatar = styled.img`
width:120px;
height: 120px;
border: 0.5px solid rgba(160, 158, 158, 0.486);
border-radius:50%;

`;

export const Name = styled.p`
margin-top: 16px;
margin-bottom:0px;
font-size:20px;
font-weight:900;

`;

export const UserTag = styled.p`
margin-top: 8px;
margin-bottom:0px;
font-size:18px;
color: rgba(160, 158, 158, 0.486);
font-weight:700;

`;

export const UserLocation = styled.p`
margin-top: 8px;
margin-bottom:0px;
font-size:18px;
color: rgba(160, 158, 158, 0.486);
font-weight:700;

`;

export const UserStats = styled.ul`
display: flex;
justify-content: center;
margin: 0;
padding: 0;
text-align: center;
list-style: none;
font-size: 16px;
font-weight: 700;
`;

export const StatBlock = styled.li`
width: 110px;
border: 0.3px solid rgba(160, 158, 158, 0.486);
background-color: rgba(219, 228, 236, 0.379);

`; 

export const StatLabel = styled.label`
display: block;
margin: 20px 20px 0;
font-size: 16px;
color: rgba(28, 27, 27, 0.342);
`;

export const StatValue = styled.span`
display: block;
margin: 4px 20px 20px;
font-size: 16px;
color: rgba(28, 27, 27, 0.783);
`;