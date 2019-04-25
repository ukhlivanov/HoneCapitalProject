import React from 'react';
import Form from './form'
import List, { list } from './list'
import Chart from './chart'
// import {API_BASE_URL} from '../config';




export default class Dashboard extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            jobList: []
        }
    }

    getJobs=(location, jobTitle)=>{

    //Get data from API and get around “No Access-Control-Allow-Origin header” problems
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://jobs.github.com/positions.json?description=${jobTitle}&full_time=false&location=${location}&page=1`; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url)
        .then(response => response.json())
        .then(jobList => this.setState({jobList}))   
        .catch(() => console.log("Can’t access " + url + " response."))
    }
 

    render() {
        return (
            <div className="block">
                <Form getJobs={this.getJobs}/>
                <List jobList = {this.state.jobList} />
                <Chart jobList = {this.state.jobList}/>

            </div>
        );
    }
}

