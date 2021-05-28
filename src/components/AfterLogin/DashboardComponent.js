import React, {Component} from 'react';
import Bai from './BaiComponent';
import {NavLink,Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    renderlogin(){
        return(
            <div>
            <br/><br/><br/>
            <h4>{this.props.client.naam}</h4>
            <br/><br/><br/>
            <Bai />
            <br/><br/><br/>
            <Link to={`/myprofile/${this.props.client.id}`}>My Profile</Link>
            <br/><br/><br/>
            </div>
        );
    }
    render(){
        return(
        <div>
            {this.renderlogin()}
        </div>
        );
}
}

export default Dashboard;
