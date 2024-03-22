import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "../common/styles";
import { Key } from "phosphor-react";
import auth_service from "../services/auth_service";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../css/login.css'; 
import "bootstrap/dist/css/bootstrap.min.css";

const Login: React.FC = () => { 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async () => {  
    const usernames = email;
    const passwords = password;
    // 
    console.log(email+' '+password);
    try {
      const response = await auth_service.login(email, password);
      console.log(response);
      
    }catch(error){
      
    }
  }

  return (
    <div className="mains" style={styles["mains_login"]}>
      <div className="box-login">
        <h6>Selamat datang !</h6>
        <Container>
          <Row>
            <Col sm={12}>Email</Col>
            <Col sm={12}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  value={email} // Bind value to state
                  onChange={(event) => setUsername(event.target.value)}
                />
              </InputGroup>
            </Col>
            <Col sm={12}>Password</Col>
            <Col sm={12}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <Key size={13} />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  value={password} // Bind value to state
                  onChange={(event) => setPassword(event.target.value)}
                />
              </InputGroup>
            </Col>
            <Col sm={12}>
              <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Login