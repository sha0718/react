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
                <h1 className = "text-2xl font-bold text-center m-4 p-4"> About Us Page :</h1>
                <div className = "text-center m-4 p-4">
                    <UserContext.Consumer>
                        {({loggedInUser}
                        ) => <h1 className = "font-bold text-xl">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2 className = "text-xl font-bold text-center m-4 p-4">This is the eco food delivery app.</h2>
                {/* <User /> */}
                <UserClass name={"Shailendra Sharma (class)"} location={"Ahemdabad class"} />
            </div>
        );
    }
}

export default About;
