import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import "./chatbox.scss"


interface Types{
  color: string;
  icon:string;
  number:string | number;
  dataKey:string;
  title:string,
  chartData:object[],
  percentage:number
}



export default function ChatBox(props : Types) {
  return (
    <div className='chatBox'>
        <div className="boxInfo">
          <div className="title">
              <img src={props.icon} alt="" />
              <span>{props.title}</span>
          </div>
          <h1>{props.number}</h1>
          <Link to="/" style={{color:props.color}}>View All</Link>
        </div>
        <div className="chatInfo">
          <div className="chat">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={props.chartData}>
                <Tooltip 
                contentStyle={{background:"transparent",border:"none"}}
                labelStyle={{display:'none'}}
                position={{x:10,y:60}}
                />
                <Line type="monotone"dot={false} dataKey={props.dataKey} stroke={props.color} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text">
            <span className="percentage" style={{color:props.percentage < 0 ? "tomato" : "limegreen"}}>{props.percentage}%</span>
            <span className="duration">this month</span>
          </div>
        </div>
    </div>
  )
}
