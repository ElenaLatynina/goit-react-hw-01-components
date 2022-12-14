import styled from "styled-components";

export const Item = styled.li`
display: flex;
padding: 5px 15px;
margin: 5px 0;
width: 290px;
border: 0.5px solid rgba(160, 158, 158, 0.486);
box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
`;

export const Status = styled.span`
margin: auto 0;
width: 15px;
height: 15px;
border-radius: 50%;
background-color:${props => {
        return props.selected ? 'green' : 'red';
    }};
 

`;

export const Avatar = styled.img`
height: 48px;
margin: 0 15px;
border: 0.5px solid rgba(160, 158, 158, 0.486);
border-radius: 5px;
`;

export const Name = styled.span`
margin: auto 0;
font-size: 20px;
font-weight: 700;
`;


