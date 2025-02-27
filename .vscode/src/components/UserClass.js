import React from 'react';

class  UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInfo : {
                name : "dummy",
                location : "default"
            }
        };
//             console.log(this.props.name +"constructor");
 }
   async componentDidMount() {
        const data = await fetch("https://api.github.com/users/sha0718");
        const json = await data.json(); 
        console.log(json);
    //     console.log(this.props.name +  "componentDidMount");
    this.setState({userInfo : json});
   
 }

 componentDidUpdate() {
     console.log("componentDidUpdate");                     
 }

 componentWillUnmount() {    
     console.log("componentWillUnmount");
 }
    render() {
// NEVER UPDATE THE STATE DIRECTLY
        // const {name, location} = this.props;
        const {name, location , avatar_url} = this.state.userInfo;
        // console.log(this.props.name + "render");
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>{name}</h2>
                <h3> Location : {location}</h3>
                <h3>Instagram : shailendra_sharma</h3>
            </div>
        );
    }
}

export default UserClass;