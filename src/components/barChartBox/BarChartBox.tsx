
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';

import "./barchartbox.scss"

interface Types{
    dataKey : string,
    chartData:object[]
    color:string,
    title:string
}

export default function BarChartBox(props : Types){
    return (
    <div className='barChart'>
        <h1>{props.title}</h1>
    
        <div className="chart">
      <ResponsiveContainer width="99%" height={150}>
        <BarChart data={props.chartData}>
            <Tooltip 
            contentStyle={{background:"#2a3447",borderRadius:"5px"}}
            labelStyle={{display:'none'}}
            cursor={{fill:"none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
    );
}
