import { RotatingLines } from "react-loader-spinner";

export const Loader = ({ visible }) => {
    return (
        <div>
            <RotatingLines
                height="80"
                width="80"
                color="#244fc5"
                radius="12.5"
                visible={visible}
            />
        </div>
    )
}