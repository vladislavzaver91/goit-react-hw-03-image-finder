import { Component } from "react";

import { Searchbar } from "../Searchbar/Searchbar";

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
      </>
    )
  }
}
