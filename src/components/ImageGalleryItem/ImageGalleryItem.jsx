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