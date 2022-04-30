import { useState, React } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import contactLight from '../media/Screenshot (1297).png';
import contactDark from '../media/contact-dark1.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import { Fade, Flip } from 'react-awesome-reveal';
import './styles.css';
import connectLight from '../media/connect-light1.svg';
import connectDark from '../media/connect-dark1.svg';
import resume from '../media/Ranjith.pdf';
import transcript from '../media/TejaswiChaudhari_transcript.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faTwitter,faMedium } from '@fortawesome/free-brands-svg-icons';
import {
	faFile,
	faEnvelope,
	faPhoneAlt,
	faHome,
} from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

const Contact = ({darkMode}) => {

    const [templateParams, setTemplateParams] = useState({
		from_name: '',
        message: ''
	});

    const onInputChange = e => {
		setTemplateParams({...templateParams,[e.target.name]: e.target.value})
	}

    const onSubmit = async (e) => {
		e.preventDefault();
            emailjs.send('service_3rrlmf6','template_8cqo6bb', templateParams, 'user_mNZI64CQWAWMujmZ1AWIk')
                .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                console.log('FAILED...', err);
                });
                swal({
                    title: "Sent Successfully!",
                    text: "Glad to hear from you! I will get back to you as soon possible",
                    icon: "success",
                  });
                setTemplateParams({
                    from_name: '',
                    message: ''
                })
    }

    return (
			<div data-theme={darkMode ? 'dark' : 'light'} >
				<br></br>
				<Container>
					<Row style={{marginLeft:"100px" ,marginRight:"-300px"}}>
						<Col lg={4} align="center">
							<Card className="nbcard">
								<Card.Body style={{marginTop:"-30px", marginBottom:"50px"}}>
									<Card.Title>
										<h2 className="lead">Let's Connect!</h2>
									</Card.Title>
									<br></br>
									<a
										href="https://www.linkedin.com/in/minakshi-kalambe/"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Button
											variant={
												darkMode ? 'outline-light' : 'outline-dark'
											}
											className="a"
										>
											<FontAwesomeIcon
												className="dark"
												size="lg"
												icon={faLinkedin}
											/>{' '}
											Minakshi
										</Button>
									</a>
									<a
										href="https://github.com/minakshikalambe"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Button
											variant={
												darkMode ? 'outline-light' : 'outline-dark'
											}
										>
											<FontAwesomeIcon
												className="dark"
												size="lg"
												icon={faGithub}
											/>{' '}
											Minakshi
										</Button>
									</a>
									<a
										href="https://twitter.com/MINAKSHI10OCT"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Button
											variant={
												darkMode ? 'outline-light' : 'outline-dark'
											}
										>
											<FontAwesomeIcon
												className="dark"
												size="lg"
												icon={faTwitter}
											/>{' '}
											Minakshi
										</Button>
									</a>
									<a
										href="https://medium.com/@minakshikalambe10"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Button
											variant={
												darkMode ? 'outline-light' : 'outline-dark'
											}
										>
											<FontAwesomeIcon
												className="dark"
												size="lg"
												icon={faMedium}
											/>{' '}
											Minakshi
										</Button>
									</a>
									<Button
										variant={
											darkMode ? 'outline-light' : 'outline-dark'
										}
									>
										<FontAwesomeIcon
											className="dark"
											size="lg"
											icon={faEnvelope}
										/>{' '}
										minakshikalambe10@gmail.com
									</Button>
									<Button
										variant={
											darkMode ? 'outline-light' : 'outline-dark'
										}
									>
										<FontAwesomeIcon
											className="dark"
											size="lg"
											icon={faHome}
										/>{' '}
										Nagpur,Maharashtra.
									</Button>
									<Button
										variant={
											darkMode ? 'outline-light' : 'outline-dark'
										}
									>
										<FontAwesomeIcon
											className="dark"
											size="lg"
											icon={faPhoneAlt}
										/>{' '}
										+91 9420397347
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<img
								src={darkMode ? connectDark : connectLight}
								alt="connect"
								className="connect-img img-fluid animated"
							/>
						</Col>
					</Row>
					<Row >
						<Col lg={4} >
							<br></br>
							<h2 className="lead">Contact me!</h2>
							<p className="contact-text">
								Drop a suggestion, feedback, opportunities or we can
								collaborate on a project. Please mention your contact
								details if you are expecting a reply.
							</p>
							<br></br>
							<img
								src={contactLight}
								style={{height:"130px" ,marginTop:"-20px"}}
								alt="contact"
								className="contact-img img-fluid"
							/>
						</Col>

						<Col lg={8}>
							<br></br>
							<Form onSubmit={(e) => onSubmit(e)}>
								<Form.Group>
									<Form.Control
										onChange={(e) => onInputChange(e)}
										value={templateParams.from_name}
										name="from_name"
										className="ph name"
										type="name"
										placeholder="Enter your name"
									/>
								</Form.Group>
								<Form.Group>
									<Form.Control
										onChange={(e) => onInputChange(e)}
										value={templateParams.message}
										name="message"
										as="textarea"
										rows={8}
										className="ph msg"
										placeholder="Enter your message"
									/>
								</Form.Group>
								<Button
									variant={darkMode ? 'outline-light' : 'outline-dark'}
									type="submit"
								>
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
				<br></br>
			</div>
		);
}

export default Contact
