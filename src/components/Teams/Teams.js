import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Button,  } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './Teams.css';
import { useHistory } from 'react-router';


const Teams = (props) => {
    const {strTeamBadge, strTeam, strSport, idTeam} = props.team || {};
    const history = useHistory();
    const showTeamDetails = idTeam => {
        const url = `showTeam/${idTeam}`;
        history.push(url);
    }
    return (       
        <Container>      
            <Card className ="card-style mt-3 p-3" style={{ width: '20rem', height: '24rem', margin: '10px' }}>
            <Card.Img className ="img-fluid img-thumbnail"  variant="top" src={strTeamBadge} alt=""/>
            <Card.Title className ="mt-3">{strTeam}</Card.Title>
            <Card.Title>Sports Type: {strSport}</Card.Title>
            <Button onClick ={() => {showTeamDetails(idTeam)}}>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>      
            </Card>    
           
        </Container>

        // <Container>
        // <Row xs="1" sm="2" md="4">
        //     <Col >
        //     <img className="img-fluid" src={strTeamBadge} alt=""/>
        //     <p className ="mt-3">Card Title : {strAlternate}</p>
        //     <p>Card Title : {strSport}</p>         
        //     </Col>                     
        // </Row>
        // </Container>
    );
};

export default Teams;