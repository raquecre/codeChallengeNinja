import { Link } from "react-router-dom"

const Navbar = () => {


    return (
        <div className="bg-zinc-800 text-violet-500 w-full p-5 flex justify-end">
            <Link to='/'>

                <button className=" text-3xl font-bold pr-10 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400 ">Lista de Usuarios</button>
            </Link>
        </div>
    )
}

export default Navbar