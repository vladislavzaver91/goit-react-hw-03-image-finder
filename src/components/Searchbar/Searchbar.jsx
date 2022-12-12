import { Component } from "react";

export class Searchbar extends Component {
    state = {
        searchQuerry: '',
    }

    handleSeachChange = ev => {
        this.setState({ searchQuerry: ev.currentTarget.value.toLowerCase() });
    }


    handleSubmit = ev => {
        ev.preventDefault();

        if (this.state.searchQuerry.trim() === '') {
        return alert('Введите значение поиска');
        }

        this.props.onSubmit(this.state.searchQuerry);

        this.setState({ searchQuerry: '' })
    }

    render() {
        return (
            <>
            <header className="searchbar">
                <form onSubmit={this.handleSubmit} className="form">
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        value={this.state.searchQuerry}
                        onChange={this.handleSeachChange}
                    />
                </form>
            </header>
            </>
        )
    }
}