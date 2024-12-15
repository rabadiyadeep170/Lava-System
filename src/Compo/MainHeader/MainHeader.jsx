import React from 'react'


export default function MainHeader() {
  return (
    <>
    <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                
                <a href="" className="logo">
                  Lava
                </a>

                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="" className="menu-item" style={{marginLeft: '1500%' , position: 'absolute' , fontSize: '1rem'}}>
                    Home
                    </a>
                  </li>
                 
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    
    </>
  )
}
