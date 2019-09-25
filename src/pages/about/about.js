import React from 'react'
import './about.scss'
import { locale } from '../../config/locale'
import { ListenService } from '../../services/listen';

class AboutPage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    ListenService.onSwitchLang().subscribe(
      () => {
        this.setState({})
      }
    )
  }

  render() {
    return (
      <React.Fragment>
        <h1>{locale.about}</h1>
      </React.Fragment>
    )
  }
}

export default AboutPage