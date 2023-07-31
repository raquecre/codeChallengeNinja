import TitleDetails from "./titleDetails"

const UserInfoCard = (props) => {
    const {userCountry, userState, userCity,userTimezone, titleName, firstName, lastName, gender, dobAge, username, userEmail, userImageUrl,userphone } = props

    return (
        <div key="userSelected" className="UserInfoCard h-screen w-screen flex flex-col items-center gap-10">

            <div className="flex justify-center text-xl bg-violet-700 text-black font-bold w-full p-5 pr-20 w-full">
                <img className="rounded-full" alt="image-profile" src={userImageUrl} />   
            </div>
            <div className="flex items-center gap-2 m-2 grid grid-col sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <div className="Details w-30 h-50  bg-pink-400 bg-opacity-30 m-5 p-3 gap-1 rounded-xl flex flex-col items-center  ">
                    <TitleDetails
                        title="Datos Personales"
                        icon={<svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                        </svg>} />
                    <div className="flex  text-lg gap-1 items-center ">
                        <p><strong>Nombre: </strong></p>
                        <p>{titleName === "Mr" ? "Sr." : "Sra."}</p>
                        <p>{firstName}</p>
                        <p>{lastName}</p>

                    </div>
                    <p><strong>Sexo:</strong>{gender === "male" ? "Hombre" : "Mujer"}</p>
                    <p><strong>Edad:</strong>{dobAge} años</p>

                </div>

                <div className="Contact w-30 h-50  bg-pink-400 bg-opacity-30 m-5 p-3 gap-1 rounded-xl flex flex-col items-center ">
                    <TitleDetails
                        title="Contacto"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                      </svg>
                      } />

                    <p><strong>Email:</strong> {userEmail}</p>
                    <p><strong>Teléfono:</strong> {userphone}</p>
                    <p><strong>Nombre de usuario:</strong> {username}</p>

                </div>
                <div className="Direction w-30 h-50 bg-pink-400 bg-opacity-30 m-5 p-3 gap-1 rounded-xl flex flex-col items-center ">
                    <TitleDetails
                        title="Dirección"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                      
                      } />

                    <p><strong>País</strong> {userCountry}</p>
                    <p><strong>Estado</strong> {userState}</p>
                    <p><strong>Ciudad</strong> {userCity}</p>
                  


                </div>
















            </div>

        </div>)
}


export default UserInfoCard