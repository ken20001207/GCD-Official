import React, { Component } from "react";
import { RouteChildrenProps } from "react-router-dom";
import Topbar from "../Components/Topbar";

interface Props {
    history: RouteChildrenProps;
}
export default class Projects extends Component<Props> {
    render() {
        return (
            <div>
                <Topbar history={this.props.history} />
            </div>
        );
    }
}
