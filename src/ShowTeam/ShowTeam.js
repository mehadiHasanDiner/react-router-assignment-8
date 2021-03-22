import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useParams, Link } from 'react-router-dom';
import maleImg from '../images/male.png';
import femaleImg from '../images/female.png';
import { Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './ShowTeam.css';
import Loading from '../images/loading.gif'


const ShowTeam = () => {
    const {idTeam} = useParams();
    const [showTeam, setShowTeam] = useState({});
    const [loading, setLoading] = useState(true);
    // const [image, setImage] = useState(false);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setShowTeam(data.teams[0])
            setLoading(false);
            console.log((data.teams[0]))
        })
    }, [idTeam])
   

    const showImage = () =>{
        let gender = showTeam.strGender;
        let image;
        if (gender === 'Male'){
            image = <img className = "img-fluid" src = {maleImg} alt = ""/>
        } else if (gender === 'Female'){
            image = <img className = "img-fluid" src = {femaleImg} alt = ""/>
        }
        return image;
    }
    const facebook = "https://"+showTeam.strFacebook;
    const twitter = "https://"+showTeam.strTwitter;
    const youTube = "https://"+showTeam.strYoutube;
    
    return (
        <div>
            <section className = "home-header">
                {
                    loading ? <img style ={{width:'50px'}} src={Loading} alt=""/> :
                    <img width = "160px" src = {showTeam.strTeamBadge} alt =""/>
                }
                
            </section>
            <Container>
                <div className="team-summary">
                    <Row>
                        <Col xs ={12} md ={6}>
                        <h3>{showTeam.strTeam}</h3>
                        <ul>
                            <li> <FontAwesomeIcon icon={faMapPin}/> Founded: {showTeam.intFormedYear} </li>
                            <li> <FontAwesomeIcon icon={faFlag}/> Country: {showTeam.strCountry} </li>
                            <li> <FontAwesomeIcon icon={faFutbol}/> Sports Type: {showTeam.strSport} </li>
                            <li> <FontAwesomeIcon icon={faMars}/> Gender: {showTeam.strGender} </li>
                            
                        </ul>
                        </Col>
                        <Col xs={12} md={6}>
                            {                                  
                                showImage()
                            }  
                        </Col> 
                    </Row>
                </div>
                <div className="description">
                    <p>{showTeam.strDescriptionEN}</p>
                    <br/>
                    <p>{showTeam.strStadiumDescription}</p>
                </div>
                <div className="social">
                    <ul>
                        <li><a target="_blank" rel="noreferrer" href={facebook}><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a target="_blank" rel="noreferrer" href={twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a target="_blank" rel="noreferrer" href={youTube}><FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                </div>
                <div className="back-home">
                <Button><Link to="/"> <FontAwesomeIcon icon={faArrowLeft} /> Back To Home  </Link></Button>
                </div>
            </Container>
            
        </div>
    );
};

export default ShowTeam;