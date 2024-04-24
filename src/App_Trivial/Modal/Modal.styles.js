import styled from 'styled-components';

export const Container = styled.div`
 display: ${({ visible }) => visible ? 'block' : 'none'};
`;

export const Overlay = styled.div`
background-color: rgba(0, 0, 0, 0.5);
position: fixed;
width: 100%;
height: 100vh;
left: 0;
top: 0;
`;
export const Content = styled.div`
max-width:600px;
background-color:#fff;
margin:auto !important;
position: relative;
z-index: 9;
padding: 20px;
border-radius: 25px;


`;