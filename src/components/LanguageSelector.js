import React, { Component } from 'react'

import LanguageContex from "../contexts/LanguageContext"

export class LanguageSelector extends Component {
  static contextType=LanguageContex

  render() {
    return (
        <div>
            Select a Language:
            <i className='flag us' onClick={()=>this.context.onLanguageChange("english")}/>
            <i className='flag nl' onClick={()=>this.context.onLanguageChange("dutch")}/>
        </div>
    )
  }
}

export default LanguageSelector