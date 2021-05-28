import React, {Component} from 'react';

class WorkerInfo extends Component {
    constructor(props){
        super(props);
    }
    renderlogin(){
        return(
            <div>
              <br/><br/><br/>
              <div className='row'>
              <div className='col-sm-2'>
              </div>
                <div className='col-sm-4'>
                  <div className='card'>
                    <div className='card-header'>
                    {
                      this.props.worker.naam
                    }
                    </div>
                    <div className='card-body'>
                      Id : {this.props.worker.id}<br/>
                      Exp : {this.props.worker.experience} yr<br/>
                      Gender : {this.props.worker.gender}<br/>
                      Phone : {this.props.worker.phno}<br/>
                      Specialization : {this.props.worker.specialization}<br/>
                    </div>
                  </div>
                </div>
              </div>
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

export default WorkerInfo;
