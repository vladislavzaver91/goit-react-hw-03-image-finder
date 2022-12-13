import { Component } from "react";

import { ImageGalleryItem } from "components/ImageGalleryItem";

import {fetchImage} from "../../services/pixabay-api";

export class ImageGallery extends Component {

    state = {
        searchQuerry: null,
        page: 1,
        images: [],
        urlImage: null,
        error: null,
        status: 'idle',
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchQuerry !== this.props.searchQuerry || prevState.page !== this.state.page) {
            console.log('изменился запрос ввода');

            this.setState({ status: 'pending' });

            fetchImage(this.state.searchQuerry, this.state.page)
            .then(data => {
                this.setState({ status: 'resolved' })
                if (data.hits.length < 12) {
                    console.log('кнопка "Еще" скрыта');
                }
                if (data.total === 0) {
                    this.setState({ status: 'rejected' })
                    return alert('За Вашим запросом ничего не найдено.');
                }

                this.setState(prevState => ({
                    images: [...prevState.images, ...data.hits]
                }));
            }).catch(error => {
                console.log(error);
                this.setState({ error, status: 'rejected' });
            })
            // .then(searchQuerry => this.setState({ searchQuerry, status: 'resolved' }))
            // .catch(error => this.setState({ error, status: 'rejected' }))
        }
    }

    selectImage = urlImage => {
        this.setState({
            urlImage,
        });
    };

    render() {

        if (this.state.status === 'idle') {
            return <div>Введите знаяение поиска</div>
        }

        if (this.state.status === 'pending') {
            return <div>Loading...</div>
        }

        if (this.state.status === 'rejected') {
            return <div>{this.state.error.message}</div>
        }

        if (this.state.status === 'resolved') {
            return (
                <div>
                    <ul class="gallery">
                        <ImageGalleryItem images={this.state.images} onSelect={this.selectImage}/>
                    </ul>
                </div>
            )
        }
        
    }
}

// {this.props.searchQuerry}