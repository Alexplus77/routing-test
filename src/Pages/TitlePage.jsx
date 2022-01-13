import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

const TitlePage=()=>{


    return(
        <div className='container'>
           <h1>Главная страница</h1>
            <ul className="nav">
                <li className="nav-item">
                    <Link class="nav-link" to={'/registration'}>Регистрация</Link>
                </li>
                <li className="nav-item">
                    <Link class="nav-link" to={'/private'}>Приватная страница</Link>
                </li>
                <li className="nav-item">
                    <Link class="nav-link" to={'/private2'}>Приватная страница2</Link>
                </li>
            </ul>

        </div>
    )
}
export {TitlePage}