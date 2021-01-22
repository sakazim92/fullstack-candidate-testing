import { useState, useEffect, Fragment } from 'react'
import JobDetail from './jobDetails'
import moment from 'moment'

const JobList = ({jobs, setSearchData, originalData}) => {
const [sort, setSort] = useState({job_title: 1, experience: 1, work_schedule: 1})

const getJobsCount = (jobs) => {
    let total = 0
    jobs.forEach(job => {
        total += job.total_jobs_in_hospital
    });
    return total
}

const getPostedDate = (pastDate) => {
    return moment(pastDate).fromNow()
}

const sortData = (key) => {
    let newJobs = [...jobs]
    setSort({...sort, [key]: sort[key] * -1})
    newJobs.map(job => {
     job.items.sort((a,b) => sort[key] ===1 ? a[key].localeCompare(b[key]): b[key].localeCompare(a[key]))
    })
    setSearchData(newJobs)
}

const showHideJobs = id => {
    const e = document.getElementById(id)
    e.classList.contains('hidden') ? e.classList.remove("hidden") : e.classList.add('hidden')
}

return (
    <Fragment>
        <div className='flex-1 h-auto mt-4 sm:ml-4 inline-block mr-2'>
        <div className='border border-gray-300 p-4'>
          <div className='flex justify-between mb-8'>
            <div className='text-sm'>
              <span>
                <span className='font-semibold text-sm pr-2'>{getJobsCount(jobs)}</span>
                job postings
              </span>
            </div>  
            <div className='text-sm'>
              <span className='text-gray-400'>Sort by</span>
              <span className='pl-2 cursor-pointer' onClick={() => sortData("work_schedule")}>Work Schedule</span>
              <span className='pl-2 cursor-pointer' onClick={() => sortData("job_title")}>Job Title</span>
              <span className='pl-2 cursor-pointer' onClick={() => sortData("experience")}>Experience</span>
            </div>
          </div>
          {jobs.map((job, id) => (
              <div className='ml-2 relative' key={id}>
                <div className='h-10 w-10 rounded-lg bg-gray-500 inline-block cursor-pointer mb-2'>
                <p className='text-white font-semibold text-2xl mt-0.5 text-center' onClick={() => showHideJobs('job-'+id)}>{job.name.substring(0,2).toUpperCase()}</p>
                </div>
                <span className='absolute top-2 ml-4 cursor-pointer' onClick={() => showHideJobs('job-'+id)}>{`${job.total_jobs_in_hospital} jobs for ${job.name}`}</span>
                <div className="hidden" id={"job-"+id}>
                {job.items.map((item, id2) => (
                    <div key={"key-"+id2}>
                        <div className='my-4 flex justify-between border-t py-4' onClick={() => showHideJobs("job-"+id +"-detail-" + id2)}>
                        <div>
                        <p className='font-semibold'>{item.job_title}</p>
                        <span className='text-sm'>{item.job_type} | </span>
                        <span className='text-sm'>${item.salary_range[0]} - ${item.salary_range[1]} an hour | </span>
                        <span className='text-sm'>{item.city}</span>
                        </div>
                        <h6 className='mt-2 mr-4'>{getPostedDate(item?.created)}</h6>
                        </div>
                        <JobDetail
                        job = {item}
                        id = {id}
                        id2 = {id2}
                        />
                    </div>    
                ))}
                </div>
              </div>
            ))
            }
        </div>
      </div>
    </Fragment>
)

}

export default JobList
