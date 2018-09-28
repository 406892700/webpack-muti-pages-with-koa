import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component{
  render () {
    return (
      <ul>
        <li><Link to="/portals">portals</Link></li>
        <li><Link to="/errorBoundaries">ErrorBoundaries</Link></li>
      </ul>
    )
  }
}