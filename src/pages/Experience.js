import React from "react";

function Experience(props) {
    return (
        <React.Fragment>
            <div className={`min-h-screen ${props.mode}`}>
                <div className="container py-5">
                    <h1 className="text-center mb-5">Experience</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Intern <span className="h6">at  Praxware Technologies</span></h5>
                                    <p className="mb-0">Jan 2023 · 1 mo</p>
                                    <small>I worked as an intern at Praxware Technologies for
                                        one month in android application development.
                                        Worked on a live project and learned about native
                                        android application development with android
                                        studio.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Intern <span className="h6">at Coding Gujju</span></h5>
                                    <p className="mb-0">June 2022 · 1 mo</p>
                                    <small>I worked as an intern at Coding gujju for one
                                        month in web development.
                                        Learned basics of web development, Node.js and
                                        React.js</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;