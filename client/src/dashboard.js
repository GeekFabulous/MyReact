import React, { Component } from "react";
// import './style.css';
import { Button } from 'react-bootstrap';


class dashboard extends Component {
    render() {
        return <div>
       <Button variant="success">Success</Button>{'button booots'}
                <body>
                <div className="sidebar close">
                    <div className="logo-details">
                        <div className="logo-content">
                            <img className="image_logo" src="image/pencom_big.png" alt="profileImg" />
      
                        </div>
                        <span className="logo_name">PenCom</span>
                        <Button variant="success">Accrued</Button>

                    </div>
                    <ul className="nav-links">
                        <li>
                            <a href="#">
                                <i className='bx bx-grid-alt' ></i>
                                <span className="link_name">Dashboard</span>
                            </a>
                            <ul className="sub-menu blank">
                                <li><a className="link_name" href="#">Dashboard</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="iocn-link">
                                <a href="#">
                                    <i className='bx bx-yen' ></i>
                                    <span className="link_name">Accrued Rights</span>
                                </a>
                                <i className='bx bxs-chevron-down arrow' ></i>
                            </div>
                            <ul className="sub-menu">
                                <li><a className="link_name" href="#">Accrued Rights</a></li>
                                <li><a href="#">Retirees</a></li>
                                <li><a href="#">Deceased</a></li>
                                <li><a href="#"><h3>Pension Increase</h3></a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="iocn-link">
                                <a href="#">
                                    <i className='bx bx-euro' ></i>
                                    <span className="link_name">Death Benefit</span>
                                </a>
                                <i className='bx bxs-chevron-down arrow' ></i>
                            </div>
                            <ul className="sub-menu">
                                <li><a className="link_name" href="#">Death Benefit</a></li>
                                <li><a href="#">Computed</a></li>
                                <li><a href="#">New</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="iocn-link">
                                <a href="#">
                                    <i className='bx bx-user-plus' ></i>
                                    <span className="link_name">Administration</span>
                                </a>
                                <i className='bx bxs-chevron-down arrow' ></i>
                            </div>
                            <ul className="sub-menu">
                                <li><a className="link_name" href="#">Administration</a></li>
                                <li><a href="#">Maintain User</a></li>
                                <li><a href="#">Manage Roles</a></li>
                                <li><a href="#">Manage Privileges</a></li>
                                <li><a href="#">Map Privileges to Roles</a></li>
                                <li><a href="#">Reset Password</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="iocn-link">
                                <a href="#">
                                    <i className='bx bx-book-open' ></i>
                                    <span className="link_name">Reports</span>
                                </a>
                                <i className='bx bxs-chevron-down arrow' ></i>
                            </div>
                            <ul className="sub-menu">
                                <li><a className="link_name" href="#">Reports</a></li>
                                <li><a href="#">Static</a></li>
                                <li><a href="#">Dynamic</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className='bx bx-home-circle' ></i>
                                <span className="link_name">Home</span>
                            </a>
                            <ul className="sub-menu blank">
                                <li><a className="link_name" href="#">Home</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="profile-details">
                                <div className="profile-content">
                                    <img src="image/logo.png" alt="profileImg" />
                                </div>
                                <div className="name-job">
                                    <div className="profile_name">PenCom</div>
                                    <div className="job">Development Team</div>
                                </div>
                                <i className='bx bx-log-out' ></i>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <section className="home-section">
                    <div className="home-content">
                        <i className='bx bx-menu' ></i>
                        <span className="text">Menu</span>
                    </div>
                </section>

                <script src="script.js"></script>
            </body>
        </div>
    
                        
        
    
        
    }
}

export default dashboard;