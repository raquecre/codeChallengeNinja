const TitleDetails = (props) => {
    const {icon, title} = props

    return (
        <div className="text-2xl font-bold text-white flex gap-2 items-center">
                <div>{icon}</div>
                <p>{title}</p>
            
        </div>
    )
}

export default TitleDetails