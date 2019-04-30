import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2'

export default class Chart extends Component {

  render() {
    let jobList = this.props.jobList
  
    console.log(jobList)

    let stats=[];

      Object.keys(jobList).forEach(function(key) {
        var isPresent = stats.some(function(el){ return el.location === jobList[key].location});
        if (!isPresent) {
          stats.push({"location": jobList[key].location, "num": 1})
        }else{
          stats.find(x => x.location === jobList[key].location).num++;
        }
      });
 
      let locations=[]
      let numbers =[]

      if(stats.length>0){
       stats.sort((a,b)=>b.num - a.num)
       for(let i=0; i<6; i++){
         locations.push(stats[i].location)
         numbers.push(stats[i].num)
       }
      }

      const chartData={
        labels: locations,
        datasets:[
          {
            label:'Population',
            data: numbers,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }

  
    return (
      <div className="chart">
          <Pie 
            data = {chartData}

            options = {{
              title:{
                responsive:true,
                dispaly: true,
                text: "Statistical Information",
                fontSize: 25
              },
              legend:{
                display: true,
                position: 'right'
              }
            }}
          />
      </div>
    )
  }
}


