// import PropTypes from "prop-types";
import { Component } from "react";

import { SearchbarWrapp, SearchForm, SearchBtn, SearchBtnLabel, SearchFormInput,  } from "./Searchbar.styled";

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
        const { Loading } = this.props;

        return (
            <>
            <SearchbarWrapp>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchBtn type="submit">
                        <SearchBtnLabel >Search</SearchBtnLabel>
                    </SearchBtn>

                    <SearchFormInput
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        value={searchInput}
                        onChange={this.handleSeachChange}
                    />
                </SearchForm>
            </SearchbarWrapp>
            </>
        )
    }
}

