import React, { Component } from 'react';
import {Grid, Row, Col, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


class PhotosContainer extends Component {

    constructor(props){
        super(props);
        this.state = { 
            photos: [], 
            loading: true, 
            accessToken: ""
        }
    }

    fetchPhotos(accessToken) {  
        let fetchString = "https://api.instagram.com/v1/users/self/media/recent/?access_token="
        let newUrl = fetchString + accessToken
        fetch(newUrl) //GET, POST
        .then((response) => response.json())
        .then(res => {
            this.setState({
                photos: res.data,
                loading: false
            })
            let data = res.data
            console.log(JSON.stringify(data))
            console.log("Response: " + JSON.stringify(res)) 
        }) 
    }

    componentDidMount(){
        if (this.props.location.hash) { // esli net v url
            let hash = this.props.location.hash
            let accessToken = hash.replace("#access_token=", "")
            this.setState({accessToken : accessToken}, () => {
                this.fetchPhotos(accessToken)
            })
            sessionStorage.setItem("token", accessToken);
        } else if (sessionStorage.getItem("token") === null || sessionStorage.getItem("token") === undefined) { // esli net v session storage
            this.props.history.push('/login')
        }
        
        let accessToken = sessionStorage.getItem("token")
        this.fetchPhotos(accessToken)
    }

    renderRow(index){
        let arrPhotos = [];
        for (let i = index; i < index + 3 ; i++ ){
            if(this.state.photos.length > i){
                arrPhotos.push(
                    <Col xs={4}  key ={this.state.photos[i].id}>  
                        <img src={this.state.photos[i].images.low_resolution.url} alt={this.state.photos[i].caption}/>
                    </Col>
                )        
            }
            
        } 
        return arrPhotos;
    }

    renderPhotos(){
        let photosRow = [];
        for (let i = 0; i < this.state.photos.length; i = i+3){
            photosRow.push(
                <Row style={{paddingTop:"20px", paddingBottom:"20px"}}>
                    {this.renderRow(i)}
                </Row>
            )
        }
        return photosRow;
    }


    render(){
        return(
            <div>
                <Grid>
                    {this.renderPhotos()}
                </Grid>   
            </div>
        )
    }  
}

export default PhotosContainer;