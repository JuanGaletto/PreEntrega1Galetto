 import "./ItemListContainer.css";




function ItemListContainer({saludo}){

    return(
        <div className="itemlist_container">
            <h1>
                {saludo}
            </h1>
        </div>

    )
}

export default ItemListContainer