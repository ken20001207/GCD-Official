import React, { Component } from "react";
import { Row } from "react-flexbox-grid";
import { RouteComponentProps } from "react-router-dom";
import Footer from "../Components/Footer";
import Topbar from "../Components/Topbar";
import "../Styles/Contact.less";

interface Props {
    history: RouteComponentProps;
}

interface State {
    loadedImg: string[];
}

export default class Contact extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = { loadedImg: [] };
    }

    getImgStatus = (imgUrl: string) => {
        return this.state.loadedImg.includes(imgUrl)
            ? "loaded"
            : "loading";
    };

    imgLoadedHandler = (imgUrl: string) => {
        this.setState({
            loadedImg: [...this.state.loadedImg, imgUrl],
        });
    };

    render() {
        return (
            <div className="contact-page">
                <Topbar history={this.props.history} />
                <Row className="row1">
                    <img
                        src="/images/contactbg.png"
                        className={this.getImgStatus(
                            "/images/contactbg.png"
                        )}
                        alt="/images/contactbg.png"
                        onLoad={() =>
                            this.imgLoadedHandler(
                                "/images/contactbg.png"
                            )
                        }
                    />
                </Row>
                <Footer />
            </div>
        );
    }
}
