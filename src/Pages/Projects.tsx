import React, { useEffect, useState } from "react";
import { Col, Row } from "react-flexbox-grid";
import { BrowserRouter, Route, RouteComponentProps } from "react-router-dom";
import Footer from "../Components/Footer";
import Gallary from "../Components/Gallary";
import ProjectBlock from "../Components/ProjectBlock";
import Topbar from "../Components/Topbar";
import { classes, works } from "../data";
import "../Styles/Project.less";
import { work } from "../types";

const Projects = () => {
    const [watchingProject, setWatchingProject] = useState<work | undefined>(undefined);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);

        if (window.location.pathname.split("/")[3] !== undefined) {
            works.map((wk) => {
                if (wk.id === window.location.pathname.split("/")[3]) setWatchingProject(wk);

                return null;
            });
        }
    });

    const updateWindowDimensions = () => {
        setWindowWidth(window.innerWidth);
    };

    const openGallary = (history: RouteComponentProps, work: work) => {
        history.history.push("/projects/" + work.class + "/" + work.id);
        setWatchingProject(work);
    };

    return (
        <div>
            <div className="project-page">
                <Topbar />
                <BrowserRouter>
                    {windowWidth >= 768 ? (
                        <Row className="row1">
                            <Route
                                render={(history) =>
                                    classes.map((cl) => (
                                        <Col
                                            className="col flex"
                                            xs
                                            onClick={() => {
                                                history.history.push("/projects/" + cl.id);
                                            }}
                                        >
                                            <p
                                                style={{
                                                    color: history.location.pathname.split("/")[2] === cl.id ? "#003CCC" : "",
                                                }}
                                            >
                                                {cl.title}
                                            </p>
                                        </Col>
                                    ))
                                }
                            />
                        </Row>
                    ) : (
                        <Row className="row1">
                            <Route
                                render={(history) => (
                                    <select onChange={(e) => history.history.push("/projects/" + e.target.value)}>
                                        {classes.map((cl) => (
                                            <option value={cl.id}>{cl.title}</option>
                                        ))}
                                    </select>
                                )}
                            />
                        </Row>
                    )}

                    <Route
                        render={(history) => (
                            <Row className="row2">
                                {works
                                    .filter((wk) => wk.class === history.location.pathname.split("/")[2])
                                    .map((wk) => (
                                        <ProjectBlock key={wk.id} openGallary={() => openGallary(history, wk)} work={wk} />
                                    ))}
                            </Row>
                        )}
                    />
                    <Route
                        path="/projects/:class/:project"
                        render={(history) => <Gallary history={history} watchingProject={watchingProject} />}
                    />
                </BrowserRouter>
            </div>

            <Footer />
        </div>
    );
};

export default Projects;
