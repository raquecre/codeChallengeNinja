const UserInfoCard = (props) => {
    const { titleName, firstName, lastName, gender, dobAge, username, userEmail, userImageUrl } = props

    return (
        <div key="userSelected" className="UserInfoCard   gap-10">

            <div className="flex flex-row justify-between text-xl bg-violet-700 text-black font-bold w-full p-5 pr-20">
                <p> {username}</p>
                <p>{gender}</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="Navbar flex flex-col m-5 p-3 gap-3 font-bold justify-start  w-1/2">
                    <img className="rounded-full w-1/4" alt="image-profile" src={userImageUrl} />
                    {/* //~esto es una navegación */}
                    <p className="bg-white bg-opacity-50 w-fit rounded hover:bg-opacity-0 ">Datos Personales</p>
                    <p className="bg-white bg-opacity-50 w-fit rounded hover:bg-opacity-0 ">Contacto</p>
                    <p className="bg-white bg-opacity-50 w-fit rounded hover:bg-opacity-0 ">Localización</p>
                </div>

                <div className="info  w-1/2  flex flex-col" >


                    <div className="CONTACT BasicInfo flex flex-col text-lg ">

                        <p><strong>Edad:</strong>{dobAge} años</p>


                        <div className="flex flex-row gap-1">
                            <p><strong>Nombre completo:</strong></p>
                            <p>{titleName}</p>
                            <p>{firstName}</p>
                            <p>{lastName}</p>
                        </div>

                        <div>
                            <p><strong>Email:</strong> {userEmail}</p>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>

            </div>

        </div>)
}


export default UserInfoCard