import PropTypes from 'prop-types';
import { Grid } from "react-loader-spinner";

import { Spinner } from "./Loader.styled";

export const Loader = ({ visible }) => {
    return (
        <Spinner>
            <Grid
                height="80"
                width="80"
                color="#244fc5"
                radius="12.5"
                visible={visible}
            />
        </Spinner>
    )
}

Loader.propTypes = {
    visible: PropTypes.any.isRequired,
};