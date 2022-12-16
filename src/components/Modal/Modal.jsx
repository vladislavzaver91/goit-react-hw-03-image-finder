import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({ image, onClick }) => {
return (
    <Overlay onClick={onClick}>
        <ModalWindow>
            <img src={image} alt={image} />
        </ModalWindow>
    </Overlay>
)
};