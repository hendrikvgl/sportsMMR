/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from "react";
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import '../../styles/matchmanagement.css';

export class MatchItem extends React.Component {
    render() {
        return (
                (
                        <Container>
                            <Row className="standard-font row-match-item">
                                <Col xs={5} >{this.props.teamOne}</Col> 
                                <Col xs={2} className="col-history-match-result">{this.props.results[0]}:{this.props.results[1]}</Col> 
                                <Col xs={5} className="col-history-match-teamtwo" >{this.props.teamTwo}</Col>
                            </Row>
                        </Container>
                        )
                );
    }
}

