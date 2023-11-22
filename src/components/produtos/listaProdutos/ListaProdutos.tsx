import CardProdutos from "../cardProdutos/CardProdutos";

function ListaProdutos() {
    return (
        <>
            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                <CardProdutos />
            </div>
        </>
    );
}

export default ListaProdutos;