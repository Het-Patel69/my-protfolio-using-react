import React from "react";

function Home(props) {
    return (
        <div className={`min-h-screen ${props.mode}`}>
            <div className="container">
                <div className="pt-4 mb-4">
                    <h4>About Me :</h4>
                    <p>Hello! I'm Het Patel, I'm an intern at codding gujju and currently pursuing B.Tech from Silver Oak University, Ahmedabad. I'm a tech nerd so naturally I love to know and discuss about letest technologies used in smartphones and computers. I have a good knowledge of HTML, CSS and Java Script and I'm constatantly trying to improve and gain more knowledge.</p>
                </div>
                <div className="mt-4 pb-4">
                    <h4>Personal Information :</h4>
                    <div id="inner_about">
                        <div>
                            Full Name :
                            <div>
                                Het K. Patel
                            </div>
                        </div>
                        <div>
                            Birthdate :
                            <div>
                                09 January 2004
                            </div>
                        </div>
                        <div>
                            Mobile :
                            <div>
                                +91 9157233711
                            </div>
                        </div>
                        <div>
                            Email :
                            <div>
                                phet9429@gmail.com
                            </div>
                        </div>
                        <div>
                            Address :
                            <div>
                                K-103, Samruddh Greens residency, Pranaminagar, Vastral,
                                Ahmedabad
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;