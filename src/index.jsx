import React from 'react';
import ReactDOM from 'react-dom';
class NavigationSquare extends React.Component {
  render() {
    return (
      <button className="square" onClick={()=> alert('navigation click')}>
        {this.props.label}
      </button>
    );
  }
}
class NavigationBar extends React.Component {
  renderNavigationSquares(i){
    return <NavigationSquare label={i} />; 
  }
  render(){
    return (
      <div className="navigation-bar">
        {this.renderNavigationSquares("Search")}
        {this.renderNavigationSquares("Saved")}
        {this.renderNavigationSquares("Profile")}
        {this.renderNavigationSquares("More")}
      </div> 
    )
    
  }
}

class ResourceCategoriesButton extends React.Component{
  render(){
    return (
      <button className="category" onClick={() => alert('category click')}>
        {this.props.label}
      </button>
    ); 
  }
}

class ProfileSettingButton extends React.Component{
  render(){
    return (
      <button className="profile-setting" onClick={() => alert('profile setting click')}>
        {this.props.label}
      </button>
    ); 
  }
}
var renderNext = (button_label) => 
  <button className="next" onClick={()=> alert('next click')}>
  {button_label}
  </button>

class Profile extends React.Component {
  renderProfileSettings(i){
    return <ProfileSettingButton label={i}/>
  }
  render(){
    return(
      <div className="profile-settings">
        <div className="page-name">
          Profile
        </div>
        <li>{this.renderProfileSettings("Gender")}</li>
        <li>{this.renderProfileSettings("Age")}</li>
        <li>{this.renderProfileSettings("Special Conditions")}</li>
        <li>{renderNext("Continue")}</li>
      </div>
    ); 
  }
}

class ResourceCategories extends React.Component {
  renderResourceCategories(i){
    return <ResourceCategoriesButton label={i}/>
  }
  render(){
    return(
      <div className="categories">
        <div className="page-name">
          What are you looking for today?
        </div>
        <li>{this.renderResourceCategories("Shelter")}</li>
        <li>{this.renderResourceCategories("Food")}</li>
        <li>{this.renderResourceCategories("Medical Assistance")}</li>
      </div>
    ); 
  }
}

class CurrentPage extends React.Component {
  // lazy eval function 
  
  // renderNext(button_label){
  //   return(
  //     <button className="next" onClick={()=> alert('next click')}>
  //       {button_label}
  //   </button>
  //   )
    
  // }
  render(){
    return(
      <div className="current-view">
        {/* will need to control this section with state / routers later */}
        {/* <ResourceCategories /> */}
        <Profile />
      </div>
    ); 
  }
}

class App extends React.Component {
    render() {
      return (
        <div className="app">
          RESOURCEFUL
          <CurrentPage />
          <NavigationBar />
        </div>
      );
    }
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );