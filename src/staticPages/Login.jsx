import axios from "axios"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    const initialState = {
        email: "",
        password: ""
    }
    const [state, setState] = useState(initialState)
    const handleLogin = async () =>{
        try{
            const user = await axios.post("http://localhost:5000/users/login", state)
            console.log(user)
        }catch(e){
            console.log(e)
        }
    }
    return <><h1>login</h1>
    <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setState({...state, "email": e.target.value})} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e => setState({...state, "password": e.target.value})} />
      </Form.Group>
      
      <Button variant="primary" type="submit"  onClick={handleLogin}>
        Log In
      </Button>
    </Form>
    </>
}



