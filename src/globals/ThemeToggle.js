import { Component } from "react";
import { Button } from "../components/commons/Button";

class ThemedButton extends Component {
    render() {
        const props = this.props;
        const theme = this.context;
        return (
            <Button
                {...props}
                bgColor={theme.background}
            />
        )
    }
}

export default ThemedButton;