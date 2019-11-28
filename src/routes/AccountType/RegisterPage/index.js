// Themes
import './index.scss';

import React, {useState} from 'react';
import {Alert, Button, Card, CardBody, Col, Container, FormGroup, Label, Row} from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';
import LockOpenlined from '@material-ui/icons/LockOpenOutlined';
import { makeStyles } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';

import {Link} from 'react-router-dom';
import {AvCheckbox, AvCheckboxGroup, AvFeedback, AvForm, AvGroup, AvInput} from 'availity-reactstrap-validation';
import Typography from '@material-ui/core/Typography';

import axios from "axios";


const useStyles = makeStyles(theme => ({
    
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: lightBlue['A400'],
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

const Index = ({history}) => {

    const classes = useStyles();
    const [errorState, setErrorState] = useState('');
    const [errorVisible, setErrorVisible] = useState(false);

    const handleValidSubmit = async (event, values) => {
        try {
            const registerResponce = await axios.post('URL',
                {
                    "email": values.email,
                    "name" : values.name,
                    "password": values.password
                });
            window.alert('회원가입이 완료되었습니다! 로그인해주세요.')
            history.push('/account/login')
        } catch (e) {
            window.alert('양식이 잘못되었습니다. 상단 에러를 확인해주세요.')
            setErrorVisible(true);
            setErrorState(e.response.data.message)
        }
    };
    
    return (
        <React.Fragment>
            <div className="account-pages mt-5 mb-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <div className="text-center">
                                <div className={classes.paper}>
                                    <Avatar className={classes.avatar}><LockOpenlined /></Avatar>
                                </div>
                                <Typography component="h1" variant="h5">Register</Typography>
                            </div>
                            <Card>
                                <CardBody className="pt-2 position-relative">
                                    <AvForm onValidSubmit={handleValidSubmit}>
                                        <AvGroup className="mb-3">
                                            <Label for="id">Email</Label>
                                            <AvInput type="text" name="email" id='email' placeholder="abc@gmail.com"
                                                     required/>
                                            <AvFeedback>Insert Your Email</AvFeedback>
                                        </AvGroup>

                                        <AvGroup className="mb-3">
                                            <Label for="id">Name</Label>
                                            <AvInput type="text" name="name" id='name' placeholder="홍길동"
                                                     required/>
                                            <AvFeedback>Insert Your Name</AvFeedback>
                                        </AvGroup>

                                        <AvGroup className="mb-3">
                                            <Label for="password">Password</Label>
                                            <AvInput type="password" name="password" id="password" placeholder="*******"
                                                     required/>
                                            <AvFeedback>Insert Your Password</AvFeedback>
                                        </AvGroup>

                                        <FormGroup>
                                            <Button color="primary" className="btn-block">Register</Button>
                                        </FormGroup>
                                    </AvForm>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
};

export default Index