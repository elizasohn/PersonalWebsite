function School(props) {
    return (
        <div className='School'>
            <h3 className='school-year'>{props.schoolYear}</h3>
            <h1 className='school-degree'>{props.schoolDegree}</h1>
            <h2 className='school-location'>{props.schoolLocation}</h2>
        </div>
    )
}

export default School;