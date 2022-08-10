function Job(props){
    return (
        <div className='job-card'>
            <div className='job-info-left'>
                <h3 className='job-time'>{props.jobTime}</h3>
                <h1 className='job-title'>{props.jobTitle}</h1>
                <h2 className='job-company'>{props.jobCompany}</h2>
                <h2 className='job-location'>{props.jobLocation}</h2>
            </div>
            <div className='job-info-right'>
                <p className='job-description'>{props.jobDescription}</p>
            </div>
        </div>
    )
}

export default Job;