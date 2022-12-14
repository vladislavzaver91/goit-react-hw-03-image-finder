import { Component } from "react";

import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";

import { fetchImage } from "services/pixabay-api";

import { Container } from "./App.styled";

export class App extends Component {

  state = {
    searchQuerry: null,
    page: 1,
    images: [],
    error: null,
}

componentDidUpdate(prevProps, prevState) {

  if (prevState.searchQuerry !== this.state.searchQuerry || prevState.page !== this.state.page) {
      console.log('изменился запрос ввода');

      // this.setState({ status: 'pending' });

      fetchImage(this.state.searchQuerry, this.state.page)
      .then(data => {
          // this.setState({ status: 'resolved' })
          if (data.hits.length < 12) {
              console.log('кнопка "Еще" скрыта');
          }
          if (data.total === 0) {
              // this.setState({ status: 'rejected' })
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


  handleFormSubmit = searchQuerry => {
    this.setState({ searchQuerry, page: 1, image: [] });
  }

  selectImage = urlImage => {
    this.setState({
        urlImage,
    });
};

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} onSelect={this.selectImage}/>
        )}
        
      </Container>
    )
  }
}
