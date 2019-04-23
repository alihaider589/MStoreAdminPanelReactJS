import React, {Component} from 'react';
class Header extends Component {
    render() {
        return (
            <div>
                <header className="main-header">

                    <a href="index2.html" className="logo">

                        <span className="logo-mini"><b>A</b>LT</span>

                        <span className="logo-lg"><b>Woo Commerce Admin</b>Panel</span>
                    </a>


                    <nav className="navbar navbar-static-top">

                        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>

                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                        <li>
                                            <div className="pull-right">
                                                <button onClick={()=>{
                                                    
                                                }} className="btn btn-primary"><i className={'fas fa-sign-out-alt'}   /> Sign out</button>
                                            </div>
                                        </li>

                            </ul>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;