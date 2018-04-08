import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Login extends Component{

    render(){
        return(
            <div>
                <Button 
                    bsStyle="primary" 
                    bsSize="large" 
                    className="center-block" 
                    onClick={() => { 
                        window.open("https://api.instagram.com/oauth/authorize/?client_id=8de862a966d74b7fa4b53f192bf4bc8b&redirect_uri=http://localhost:3000/photos&response_type=token", "_parent")
                        }
                    }
                    style={{ marginTop: '80px' }}>
                    
                    Log in
                </Button>
            </div>
        )
    }
}
export default Login;