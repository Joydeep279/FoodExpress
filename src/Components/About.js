import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor Called");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Kolkata",
        ImgUrl: "",
      },
    };
  }
  async componentDidMount() {
    console.log("Parent ComponentDidMount Called!");
    const apiData = await fetch("https://api.github.com/users/Joydeep279");
    const userData = await apiData.json();
    this.setState({
      userInfo: userData,
    });
    console.log(this.state.userInfo);
    console.log("API called");
    
  }
  render() {
    console.log("Parent Render Called");
    return (
      <div>
        <h1>This is About Us Page!</h1>
        <UserClass
          name={this.state.userInfo.name}
          location={this.state.userInfo.location}
          ImgUrl={this.state.userInfo.avatar_url}
        />
      </div>
    );
  }
}
export default About;
