import React from "react";
console.log("Child Class Called");

class UserClass extends React.Component {
  constructor(props) {
    super(props);
   
    console.log(this.props.name+" Child Constructor Called");
  }
 async componentDidMount() {
    console.log(this.props.name+" Child ComponentDidMount CAlled!");
  }
  render() {
    const { name, location ,ImgUrl} = this.props;
    console.log(this.props.name+" Child RenderCalled");

    return (
      <div className="User-details">
        <img src={ImgUrl} alt="profileIMG"/>
        <h1>{name}</h1>
        <span>{location}</span>
      </div>
    );
  }
}
export default UserClass;
