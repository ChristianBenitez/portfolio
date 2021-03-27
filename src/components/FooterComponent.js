import React from 'react';

function Footer () {
    return (
        <footer className = "site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h5>Social</h5>
                        <a className="btn btn-github" href="http://github.com/"><i className="fa fa-github-square" /></a>
                        <a className="btn btn-linkedin" href="http://www.linkedin.com/"><i className="fa fa-linkedin" /></a>
                        Created by Christian
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;