import React from 'react'

function Experience(props) {

    function buildDesc(arr) {
        return arr.map(d => {
                return <li><p>{d}</p></li>
            }
        )
    }

    function buildRole() {
        return props.exp.map(e => {
            return (
                <div className="role">
                    <p>
                        <strong>{e.position}</strong> @
                        <span className="career-company">{e.companyName}</span>
                    </p>
                    <p>
                        <em>{e.timeFrame}</em>
                    </p>

                    <ul>
                        {buildDesc(e.details)}
                    </ul>

                </div>
            )
        })
    }

    return (
        <div className="exp-history">
            <h3>Work Experience</h3>

            <div className="exp-history-desc">
                {buildRole()}
            </div>

        </div>
    )
}

export default Experience;