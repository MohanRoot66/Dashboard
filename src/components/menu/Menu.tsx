import { Link } from "react-router-dom";
import "./menu.scss"
import { menu } from "../../data";

export default function Menu() {
  
  return (
    <div className="main">
    {menu.map((item:any)=>{
      return (
        <>
          <div className="item">
            <span className="title">{item.title}</span>

            {
              item.listItems.map((item1:any)=>
                <Link to="/" className="ListItem">
                  <img src={item1.icon} alt="" />
                  <span className="listItemTitle">
                      {item1.title}
                  </span>
                </Link>
              )
            }
          </div>
      </>
      )
    })}
  </div>
  )
}
