import User from './User';
import UserClass from './UserClass';
import React from 'react';
import UserContext from '../utils/UserContext';

class About extends React.Component {
    constructor(props) {
        super(props);
        //console.log("Parent constructor");
    }

    componentDidMount() {
        //console.log("Parent componentDidMount");

    }

    render() {
        
        return (
            <div>
                <h1>About</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}
                        ) => <h1 className = "font-bold text-xl">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is the about page</h2>
                {/* <User /> */}
                <UserClass name={"Shailendra Sharma (class)"} location={"Ahemdabad class"} />
            </div>
        );
    }
}

export default About;
