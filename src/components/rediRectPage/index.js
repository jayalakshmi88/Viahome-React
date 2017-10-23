import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';


class rediRectPage extends Component {
       constructor() {
		
				super();
				this.state = {
                    redirectCondition:false
                }
       }

    
     componentWillMount() {
         console.log("Redire Page")
         this.setState({redirectCondition:true})

     }
    render() {
        
        window.location.reload();
        let id = this.props.match.params.id;
        let UserId = this.props.match.params.userId;
       
        if (this.state.redirectCondition) {
            return <Redirect to={{
                pathname: '/forgetPassword', state:{id:id,UserId:UserId} 
            }}/>
        }

        return (
            <div>
                <p>Redirect page</p>
            </div>
        );
    }
}

export default rediRectPage;