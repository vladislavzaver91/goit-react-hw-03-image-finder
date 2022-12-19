import PropTypes from "prop-types";
import {FaSearch} from 'react-icons/fa';

import { SearchBtn } from 'components/SearchBtn';
import { SearchbarWrapp, SearchForm, SearchFormInput,  } from "./Searchbar.styled";

export const Searchbar = ({ onSubmit, Loading }) => {
    const handleSearchChanhe = ev => {
        ev.preventDefault();
        onSubmit(ev.target.querry.value);
        ev.target.reset();
    };

    return (
        <>
            <SearchbarWrapp>
                <SearchForm onSubmit={handleSearchChanhe}>
                    <SearchBtn type="submit" Loading={Loading} icon={<FaSearch size={20} />}></SearchBtn>
                    <SearchFormInput
                        name="querry"
                        type="text"
                        autocomplete="off"
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </SearchbarWrapp>
            </>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    Loading: PropTypes.bool.isRequired,
};

