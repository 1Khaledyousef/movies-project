import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const NavBar = ({search}) => {

    const Onsearch=(word)=>{
        search(word)

    }
    return (
        <div className="nav-style w-100">
            <Container>
                <Row className="pt-2  d-flex    ">
                    <Col xs="2" lg="1"  >
                        <a href="/"  >
                            <img className="logo mt-0" src="./imges/logo.png" alt="khaled" />
                        </a>
                    </Col>
                    <Col xs="10" lg="11" className=" d-flex align-items-center">
                        <div className="search  w-100">
                            <i className="fa fa-search"></i>
                            <input onChange={(e)=>Onsearch(e.target.value)} type="text" className="form-control mt-3" placeholder="ابحث" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavBar;