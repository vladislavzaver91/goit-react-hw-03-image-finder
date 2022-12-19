import PropTypes from 'prop-types';

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

Modal.propTypes = {
    image: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
};