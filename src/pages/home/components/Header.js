import React from "react";

function Header() {
    return(
        <header className = "Header">
        <div className = "toolbar">
            <div>
                <a href = "/">Conecta Dev - Alteração</a>
            </div>

            <div>
                <button>Novo Post</button>
                <span>img1</span>
                <span>img2</span>
            </div>
        </div>
   </header>
    )
}

export default Header;