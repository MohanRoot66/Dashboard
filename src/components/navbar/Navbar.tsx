import "./navbar.scss"

export default function Navbar() {
  return (
    <div className="navbar"> 
        <div className="logo">
            <img src="logo.svg" alt="" />
            <span>Joe rootyyy</span>
        </div>
        <div className="icons">
            <img src="search.svg" alt="" className="icon" />
            <img src="app.svg" alt="" className="icon" />
            <img src="expand.svg" alt="" className="icon" />
            <div className="notification">
              <img src="notifications.svg" alt="" />
              <span>1</span>
            </div>
            <div className="user">
              <img src="./avatar1.jpg" alt="" />
              <span>Joeyyy</span>
            </div>
            <img src="settings.svg" alt="" className="icon" />
        </div>
    </div>
  )
}
