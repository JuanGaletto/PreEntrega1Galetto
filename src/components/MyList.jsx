import "./MyList.css";


function MyList(){
    return(
        <nav>
            <ul className="myList_container">
                <li>
                    <a href="/#">Inicio</a>
                </li>
                <li>
                    <a href="/#">Productos</a>
                </li>
                <li>
                    <a href="/#">Ofertas</a>
                </li>
                <li>
                    <a href="/#">Noticias</a>
                </li>
            </ul>
        </nav>
    )
}


export default MyList