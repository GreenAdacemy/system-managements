import React from 'react'
import './home.scss'
import { locale } from '../../config/locale';
import { Button } from 'react-bootstrap';

class HomePage extends React.Component {
  constructor() {
    super()
  }

  componentDidUpdate() {
  }

  refresh = () => {
    this.setState({})
  }

  render() {
    return (
      <React.Fragment>
        <h1>{locale.home}</h1>
        <Button onClick={()=>this.refresh()}>Refresh</Button>
      </React.Fragment>
    )
  }
}

export default HomePage