import PropTypes from 'prop-types';

import { GalleryItem, GalleryImg } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ images, onSelect }) => {
        return (
            <>
            {images.map(({id, webformatURL, largeImageURL, user}) => (
                <GalleryItem key={id}>
                    <GalleryImg src={webformatURL} 
                    alt={user} 
                    onClick={()=> {onSelect(largeImageURL)}}/>
                </GalleryItem>
            ))}
            </>
        )
    }

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    largeImageURL: PropTypes.func.isRequired,
};