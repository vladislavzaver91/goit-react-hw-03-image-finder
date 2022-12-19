import PropTypes from 'prop-types';

import { ImgGallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem";

export const ImageGallery = ({ images, onSelect }) => {
    return (
        <ImgGallery>
            <ImageGalleryItem images={images} onSelect={onSelect}/>
        </ImgGallery>
    )
}

ImageGalleryItem.propTypes = {
    onSelect: PropTypes.func,
};