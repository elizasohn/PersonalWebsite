import Job from "./cards/Job";
import School from "./cards/School";

function Resume() {
    return (
        <div className="container resume">
            <div className="resume-columns">
                <div className="education">
                    <h1>Education</h1>
                    <School 
                        schoolYear='2021 - Current'
                        schoolDegree='MS, Computer Science'
                        schoolLocation='Portland State University • Portland, Oregon'
                    />
                    <School 
                        schoolYear='2019 - 2020'
                        schoolDegree='Certificate, Web & Mobile Development'
                        schoolLocation='Epicodus • Portland, Oregon'
                    />
                    <School 
                        schoolYear='2005 - 2008'
                        schoolDegree='BFA, Intermedia - Focus in Photography'
                        schoolLocation='Pacific Northwest College of Art • Portland, Oregon'
                    />
                </div>
                <div className="skills">
                    <h1>Skills</h1>
                    <ul className='skills-list'>
                        <li className='list-item'>
                            <p>Strong Interpersonal and Collaborative Ability</p>
                        </li>
                        <li className='list-item'>
                            <p>Flexible, Creative</p>
                        </li>
                        <li className='list-item'>
                            <p>Javascript, C++, Ruby, Java, Python, Rails, React, React Native, Angular, Vim, CSS, HTML</p>
                        </li>
                        <li className='list-item'>
                            <p>Pair Programming & Team Programming Experience</p>
                        </li>
                        <li className='list-item'>
                            <p>Routing with Ruby, Relational Databases and APIs with PSQL, GraphQL, Active Record, Authentication & Authorization</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='jobs'>
                <h1>Work Experience</h1>
                <Job 
                    jobTime='2021 - Current'
                    jobTitle='Frontend & AB Test Developer'
                    jobCompany='The Good'
                    jobLocation='Portland, OR'
                    jobDescription='Creation and Implementation of conversion optimization tests on e-commerce websites. Targeting and deployment of tests with Google Optimize, data tracking in Google Analytics. Responsible for code quality of tests developed.'
                />
                <Job 
                    jobTime='2020 - 2021'
                    jobTitle='Software Engineer'
                    jobCompany='Nombolo'
                    jobLocation='Portland, OR'
                    jobDescription='Development of a cross-platform video sharing mobile application in React Native. Programming using Expo, AWS Amplify, Node.js & GraphQL. Agile Kanban Development Methodology. Translated Figma Boards to functional code and collaborated on the development and implementations of new features and design.'
                />
                <Job 
                    jobTime='2016 - 2019'
                    jobTitle='Wardrobe Assistant'
                    jobCompany='CNBC / NBC Universal'
                    jobLocation='New York, NY'
                    jobDescription='Weekly drycleaning, sorting, organizing and maintenance of over 15 on air talent wardrobe racks. Photographing daily looks and compiling into weekly style guides for 12 news anchors. Labeling and delivering looks weekly.'
                />
            </div>
            </div>
    )
};

export default Resume;