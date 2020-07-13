import React, { Component } from "react";
import { Col } from "react-flexbox-grid";
import { work } from "../data";

interface Props {
    work: work;
    openGallary: () => void;
}

interface States {
    imgLoaded: boolean;
}

export default class ProjectBlock extends Component<Props, States> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            imgLoaded: false,
        };
    }

    render() {
        const { openGallary, work } = this.props;
        const { imgLoaded } = this.state;
        return (
            <Col xs={4}>
                <div
                    className="work-class"
                    onClick={() => openGallary()}
                >
                    <div className="description flex">
                        <p>{work.name}</p>
                    </div>
                    <img
                        className={imgLoaded ? "" : "loading"}
                        src={work.fileRoot + "/1.jpg"}
                        alt={work.fileRoot + "/1.jpg"}
                        onLoad={() =>
                            this.setState({ imgLoaded: true })
                        }
                    />
                </div>
            </Col>
        );
    }
}
