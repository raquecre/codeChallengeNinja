const UserInfoCard = (props) => {
    const { titleName, firstName, lastName, gender, dobAge, username, userEmail,userImageUrl } = props

    return (
        <div className="UserInfoCard flex w-1/2 flex justify-around">

            <div className="Navbar flex flex-col m-5  justify-around ">
                <img className="rounded-full" alt="image-profile" src={userImageUrl} />
                {/* //~esto es una navegación */}
                <p>Contacto</p>
                <p>Localización</p>
                <p>Datos Personales</p>
            </div>

            <div className="info bg-pink-400  w-1/2">
                <div className="CONTACT BasicInfo flex justify-around ">
                    <div>
                        <p>{username}</p>
                        <p>{dobAge}</p>
                        <p>{gender}</p>
                    </div>

                    <div className="flex">
                        <p>{titleName}</p>
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>

                    <div>
                        <p>{userEmail}</p>
                    </div>
                </div>
                <div>

                </div>

            </div>


        </div>)
}


export default UserInfoCard