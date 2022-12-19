import PropTypes from 'prop-types';

import { StyledSearchBtn, SearchBtnLabel } from './SearchBtn.styled';

export const SearchBtn = ({icon, onClick, Loading}) => {
    return (
        <StyledSearchBtn disabled={Loading} onClick={onClick}>
            {icon}
            <SearchBtnLabel>Search</SearchBtnLabel>
        </StyledSearchBtn>
    );
};

SearchBtn.propTypes = {
    icon: PropTypes.node,
    onclick: PropTypes.func,
    Loading: PropTypes.bool,
}