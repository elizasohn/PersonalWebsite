function Job(props){
    return (
        <div className='job-card'>
            <h3 className='job-time'>{props.jobTime}</h3>
            <h1 className='job-title'>{props.jobTitle}</h1>
            <h2 className='job-company'>{props.jobCompany}</h2>
            <p className='job-description'>{props.jobDescription}</p>
        </div>
    )
}

export default Job;