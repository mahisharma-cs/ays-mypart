import React, {Component} from 'react';
import {WORKER} from '../../shared/workers';
import { connect } from 'react-redux';
import { Switch, Redirect, Route,withRouter } from 'react-router';
import {NavLink,Link} from 'react-router-dom';

class Bai extends Component{

    constructor(props){
        super(props);
        this.state = {
          baiData:WORKER
        }
    }

    render(){
        return(
            <div>
              <div className='container'>
                <div className='row'>
                  {
                    this.state.baiData.map(function(baiObj){
                      return (
                        <div className='col-sm-3'>
                          <Link to={`/workerinfo/${baiObj.id}`}>
                          <div className='card'>
                            <div className='card-body'>
                              {
                                baiObj.naam
                              }
                              <br/><br/><br/>
                            </div>
                          </div>
                          </Link>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
        )
    }
}

export default Bai;
// export default withRouter(connect(mapStateToProps)(Bai));
