export const ImageGalleryItem = ({ images, onSelect }) => {
        return (
            <>
            {images.map(({id, webformatURL, largeImageURL, user}) => (
                <li class="gallery-item" key={id}>
                    <img src={webformatURL} 
                    alt={user} 
                    onClick={()=> {onSelect(largeImageURL)}}/>
                </li>
            ))}
            </>
        )
    }