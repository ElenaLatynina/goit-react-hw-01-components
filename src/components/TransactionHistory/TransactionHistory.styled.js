import styled from "styled-components";

export const Table = styled.table`
margin:0px auto;
width:320px;
border:0.5px solid rgba(160, 158, 158, 0.486);
border-collapse: collapse;
`;

export const TH = styled.th`
text-align: center;
padding: 16px 0;
font-size: 16px;
text-transform: uppercase;
background:rgba(0,191,255, 0.856);
color: white;

&:not(:last-child){
    border: 0.5px solid white;
}
`;


export const TD = styled.td`
text-align: center;
padding: 16px 0;
font-size: 14px;
border: 1px solid rgba(160, 158, 158, 0.199);

&:nth-child(1){
    text-transform:capitalize;
}
`;

export const TR = styled.tr`
background: white;

&:nth-child(2n+2){
    background:rgba(220,220,220, 0.655);
}

`;