import React from 'react'
import './course.scss'
import { locale } from '../../config/locale';
import { ListenService } from '../../services/listen';

class CoursePage extends React.Component {
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
        <h1> {locale.course} </h1>
      </React.Fragment>
    )
  }
}

export default CoursePage