

function ListDrinks({ drinks }) {
    return (
        <section>
            {drinks.map(item => <article key={item.id}>
                <img src={item.image} alt="" />
                <h4>{item.name}</h4>
                <p>{item.category}</p>

            </article>)}
        </section>
    )
}

export default ListDrinks