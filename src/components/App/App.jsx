import { Component } from "react";

import {FaSearch} from 'react-icons/fa';

import { Modal } from "components/Modal";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery";
import { Button } from "components/Button";
import { Loader } from "components/Loader";

import { fetchImage } from "services/pixabay-api";

import { Container } from "./App.styled";

export class App extends Component {

  state = {
    searchQuerry: null,
    page: 1,
    images: [],
    error: null,
    Loading: false,
    urlImage: null,
    totalHits: 0,
}

componentDidMount() {
  window.addEventListener('keydown', this.closeModal);
}

componentWillUnmount() {
  window.removeEventListener('keydown', this.closeModal);
}

componentDidUpdate(prevProps, prevState) {
  const { searchQuerry, page } = this.state;

  if (prevState.searchQuerry !== searchQuerry || prevState.page !== page) {
      console.log('изменился запрос ввода');

      fetchImage(searchQuerry, page)
      .then(data => {
          if (data.hits.length < 12) {
              console.log('кнопка "Еще" скрыта');
          }
          if (data.total === 0) {
            this.setState({ Loading: false });
              return alert('За Вашим запросом ничего не найдено.');
          }

          this.setState(prevState => ({
              images: [...prevState.images, ...data.hits],
              Loading: false,
          }));
      }).catch(error => {
          console.log(error);
          this.setState({ error });
      })
  }
}

handleFormSubmit = searchQuerry => {
  this.setState({ searchQuerry, page: 1, image: [], Loading: true, totalHits: 0, });
}

selectImage = urlImage => {
  this.setState({
      urlImage,
  });
};

closeModal = ev => {
  if (ev.code === 'Escape' || ev.target === ev.currentTarget) {
    this.setState ({ urlImage: null, });
  }
};

loadMore = () => {
  this.setState (prevState => ({
    page: prevState.page + 1,
    Loading: true,
  }));
};

  render() {
    const { urlImage, images, totalHits, page, Loading } = this.state;

    return (
      <Container>
        {urlImage !== null && (
          <Modal image={urlImage} onClick={this.closeModal} />
        )}
        <Searchbar onSubmit={this.handleFormSubmit} Loading={Loading}/>
        {images.length > 0 && (
          <ImageGallery images={images} onSelect={this.selectImage}/>
        )}
        {images.length > 0 && (
          <Button onClick={this.loadMore}/>
        )}
        {Loading && (
          <Loader visible={Loading}/>
        )}
      </Container>
    )
  }
}
