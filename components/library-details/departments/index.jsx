import React from 'react';

const Departments = (props) => {
    return (
        <div>
            {props.items.map((dep) => {
                return (
                    <div>
                        <h5 className="departments-name">{dep.name}</h5>
                        {dep.weeks.map((day) => {
                            return (
                                <div>
                                    <div className="layout-row">
                                        <p>Day</p>
                                        <p>Hours</p>
                                    </div>
                                    {Object.keys(day).map((key, idx) => {
                                        let val = day[key] || {};
                                        return (
                                            <div className={"layout-row even-odd " + (idx % 2 == 0 ? "even" : "")}>
                                                <p className="schedule">{key}</p>
                                                <p className="schedule">
                                                    <span>{((val.times.status != 'closed' && val.times.status != 'open') ? val.times.status : "")}</span>
                                                    <span>{(val.times.status == 'closed' ? val.times.status : "")}</span>

                                                    {val.times.hours && val.times.hours.map((time) => val.times.status == 'open' ? (<span>{time.from} - {time.to}<br /></span>) : "")}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    )
}

export default Departments;