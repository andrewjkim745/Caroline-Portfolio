import React from 'react';
import './App.css';
import  {Navbar} from './components/Navbar/Navbar'
import  Home  from './components/Home/Home'
import SideDrawer from './components/SideDrawer/SideDrawer'

class App extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      windowSize: 0,
      visible: true,
      open: false, 
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    console.log(window.pageYOffset)
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = (e) => {
  if (window.pageYOffset > 40) {
      console.log('scrolled')
      this.setState({
          visible: false, 
      })
  } else {
      this.setState({
          visible: true,
      })
  }
}

renderSideDrawer = () => {
  return (
    <>
      <SideDrawer
        show={this.state.open}
        toggleHamburger={this.toggleHamburger}
      />
    </>
  )
}

toggleHamburger = () => {
  this.setState({
    open: !this.state.open
  })
}

  render() {


    const { visible } = this.state;
    return (
      <div className="App">
        <Navbar
        className={visible ? "navbar is-transparent" : "navbar is-fixed"}
        />
        <Home/>
      </div>
    );
  }

}

export default App;
