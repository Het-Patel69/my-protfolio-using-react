import React from "react";
import { Card } from "react-bootstrap";
import python_cert from "../certificates/python.jpg";
import java_cert from "../certificates/java.jpg";
import linux_cert from "../certificates/linux.jpg";
import codejam_cert from "../certificates/codejam.jpg";

function Skills(props) {
    return (
        <React.Fragment>
            <div className={`min-h-screen container-fluid ${props.mode}`}>
                {/* <div className="card pt-2">
                    <div className="card-body">
                        <h5 className="card-title fw-bold pb-3">Technical Skills</h5>
                        <div className="row">
                            <div className="col-md-6 my-3">
                                <p className="mb-0">HTML</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "93%" }}>93%</div>
                                </div>
                            </div>
                            <div className="col-md-6 my-3">
                                <p className="mb-0">CSS</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "88%" }} >88%</div>
                                </div>
                            </div>
                            <div className="col-md-6 my-3">
                                <p>LARAVEL</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "34%" }}>34%</div>
                                </div>
                            </div>
                            <div className="col-md-6 my-3">
                                <p className="mb-0">REACTJS</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "40%" }} >40%</div>
                                </div>
                            </div>
                            <div className="col-md-6 my-3">
                                <p className="mb-0">Python</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "69%" }} >69%</div>
                                </div>
                            </div>
                            <div className="col-md-6 my-3">
                                <p className="mb-0">Java</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "54%" }} >54%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title fw-bold pb-3">Technical Skills</h5>
                        <div id="soft_skills" className="container-fluid d-flex flex-wrap">
                            <div className="m-2">
                                Web FrontEnd :- HTML | CSS | JavaScript | React.js | jQuery
                            </div>
                            <div className="m-2">
                                Web BackEnd :- Node.js | php | sql
                            </div>
                            <div className="m-2">
                                Programmin languages :- Java | Python | C | Kotlin | JavaScript | php
                            </div>
                            <div className="m-2">
                                Native Android Application Development
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title fw-bold pb-3">Soft Skills</h5>
                        <div id="soft_skills" className="container-fluid d-flex flex-wrap">
                            <div className="m-2">
                                Problem Solving : Solved over 80 Problems on <a href="https://dmoj.ca/user/Het" target="_blank">DMOJ</a> with
                                global rank under 4500
                            </div>
                            <div className="m-2">
                                Adaptability
                            </div>
                            <div className="m-2">
                                Creativity
                            </div>
                            <div className="m-2">
                                Teamwork
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Skills;