import { Container, Overlay, Content } from './Modal.styles';

const Modal = ({ visible }) => (
  <Container visible={visible}>
    <Overlay />
    <Content >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus animi officiis? Dolorem ipsam neque obcaecati, nemo minus incidunt. Sint illum perspiciatis illo porro, maxime tempore saepe tempora natus fuga?</Content>
  </Container>
);


export default Modal;
