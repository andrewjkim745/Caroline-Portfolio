import React from 'react';
import './App.css';
import  {Navbar} from './components/Navbar/Navbar'
import { SideDrawer } from './components/SideDrawer/SideDrawer'
import { BackDrop } from './components/SideDrawer/BackDrop'
import { Footer } from './components/Footer'
import { Routes } from './routes/index.js'

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

toggleHambuger = () => {
  this.setState({
    open: !this.state.open
  })
}

renderBackdrop = () => {
  if (this.state.open) {
    return (
      <>
      <BackDrop onClick={this.toggleHamburger}/>
      </>
    )
  }
}

renderSideDrawer = () => {
  return (
    <>
      <SideDrawer
        open={this.state.open}
        toggleHamburger={this.toggleHamburger}
      />
      {this.renderBackdrop()}
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
        toggleHamburger={this.toggleHamburger}
        />
        {this.renderSideDrawer()}
        <Routes/>
        <Footer/>
      </div>
    );
  }

}

export default App;
