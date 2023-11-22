import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos"

function Home() {
    
    const { nome } = useContext(AuthContext)

    return (
        <>
            <div className="bg-sky-300 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                       <h2 className='text-5xl font-bold'>Seja bem vinde, { nome }!</h2>
                        <p className='text-xl'>
                        Gerenciamento de medicamentos, estoque e vendas
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <ListaProdutos />
        </>
    )
}

export default Home