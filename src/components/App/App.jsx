import { Component } from "react";

import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";

export class App extends Component {

  state = {
    searchQuerry: '',
}


  handleFormSubmit = searchQuerry => {
    this.setState({ searchQuerry });
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery searchQuerry={this.state.searchQuerry}/>
      </>
    )
  }
}
