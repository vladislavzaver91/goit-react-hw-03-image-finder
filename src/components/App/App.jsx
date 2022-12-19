import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Modal } from "components/Modal";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery";
import { Button } from "components/Button";
import { Loader } from "components/Loader";

import { fetchImage } from "services/pixabay-api";

import { Container } from "./App.styled";

export class App extends Component {

  state = {
    searchQuerry: '',
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

      fetchImage(searchQuerry, page)
      .then(data => {
          if (data.total === 0) {
            this.setState({ Loading: false });
              return toast.info('Sorry, no results were found for your query');
          }

          this.setState(prevState => ({
              images: [...prevState.images, ...data.hits],
              totalHits: Math.ceil(data.totalHits / 12),
              Loading: false,
          }));
      }).catch(error => {
          console.log(error);
          this.setState({ error });
      })
  };
}

handleFormSubmit = searchQuerry => {
  this.setState({ searchQuerry, page: 1, images: [], Loading: true, totalHits: 0, });
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
        <Searchbar onSubmit={this.handleFormSubmit} Loading={Loading} />
        {images.length > 0 && (
          <ImageGallery images={images} onSelect={this.selectImage}/>
        )}
        {totalHits > page && !Loading && (
          <Button onClick={this.loadMore}/>
        )}
        {Loading && (
          <Loader visible={Loading}/>
        )}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    )
  }
}
