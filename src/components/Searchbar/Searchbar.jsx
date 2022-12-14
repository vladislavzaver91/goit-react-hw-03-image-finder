// import PropTypes from "prop-types";
import { Component } from "react";

export class Searchbar extends Component {

    state = {
        searchInput: '',
    }

    handleSeachChange = ev => {
        this.setState({ searchInput: ev.currentTarget.value.toLowerCase() });
    }


    handleSubmit = ev => {
        const { searchInput } = this.state;
        const { onSubmit } = this.props;

        ev.preventDefault();

        if (searchInput.trim() === '') {
        return alert('Введите значение поиска');
        }

        if (onSubmit === searchInput.trim()) {
            
        }

        onSubmit(searchInput);

        this.setState({ searchInput: '' })
    }

    render() {
        const { searchInput } = this.state;

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
                        value={searchInput}
                        onChange={this.handleSeachChange}
                    />
                </form>
            </header>
            </>
        )
    }
}

