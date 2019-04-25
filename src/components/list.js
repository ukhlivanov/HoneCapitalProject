import React, { Component } from 'react'

export class list extends Component {


  render() {

    const jobs = this.props.jobList.map((item, index) =>
        <li key={index}>
            <div className="job_info">
                    <p id="job_title">{item.title}</p>
                    <p id="job_type"><span id="job_company">{item.company}</span> - <span id="job_type">{item.type}</span></p>
                    <p id="job_location">{item.location}</p> 
            </div>
        </li>
    )

    return (
      <div className="job">
            <ul>
                {jobs}
            </ul>
      </div>
    )
  }
}

export default list
