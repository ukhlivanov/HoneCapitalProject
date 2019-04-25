import React from 'react'



export default  class DashboardForm extends React.Component{
    onSubmit = (e) => {
        e.preventDefault()
        this.props.getJobs(this.location.value, this.jobTitle.value)
    }




    render(){
        return(
            <div className="dashboard-form">
                <form onSubmit={this.onSubmit}>
                
                <input
                    name="location"
                    type="text"
                    placeholder="city, state, zip code, country "
                    ref = {location => {this.location = location}}
                />

                <input
                    name="jobtitle"
                    type="text"
                    placeholder="title, companies, expertise"
                    ref = {jobTitle => {this.jobTitle = jobTitle}}

                />

                <input
                    type = 'submit'
                    value = 'Find'  
                />      
            </form>
               
            </div>
        )
    }
}
