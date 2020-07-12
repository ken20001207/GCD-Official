import React, { Component } from "react";
import { Row } from "react-flexbox-grid";
import { RouteComponentProps } from "react-router-dom";
import Footer from "../Components/Footer";
import Topbar from "../Components/Topbar";
import "../Styles/Contact.less";

interface Props {
    history: RouteComponentProps;
}

export default class Contact extends Component<Props> {
    render() {
        return (
            <div className="contact-page">
                <Topbar history={this.props.history} />
                <Row className="row1"></Row>
                <Footer />
            </div>
        );
    }
}
