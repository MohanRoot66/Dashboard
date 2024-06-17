import "./topbox.scss"
import { topDealUsers } from "../../data"

export default function TopBox() {
  return (
    <div className="topbox">
      <h1>Top Deals</h1>
      {
        topDealUsers.map((item)=>(
          <>
          <div className="container">
            <div key={item.id} className="user">
              <img src="avatar1.jpg"alt=""/>
              <div className="userDetails">
                <span>{item.username}</span>
                <span>{item.email}</span>
              </div>
            </div>
            <span className="price">
              ${item.amount}
            </span>
          </div>
          </>
        ))
      }
    </div>
  )
}
