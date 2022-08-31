import axios from "axios"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    const initialState = {
        username: "",
        password: ""
    }
    const [state, setState] = useState(initialState)
    const handleLogin = async (e) =>{

        try{
          e.preventDefault();
            const user = await axios.post("https://mohammadusman.herokuapp.com/users/login", state)
            console.log(user)
        }catch(er){
            console.log(er)
        }
    }
    return <><h1>login</h1>
    <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={e => setState({...state, "username": e.target.value})} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e => setState({...state, "password": e.target.value})} />
      </Form.Group>
      
      <Button variant="primary" type="submit"  onClick={handleLogin}>
        LogIn
      </Button>
    </Form>
    </>
}



