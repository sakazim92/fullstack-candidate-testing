import { useState, useEffect } from 'react'
import useSwr from 'swr'

const NavBar = () =>{ 
const [showMore, setShowMore] = useState(false)
const fetcher = (url) => fetch(url).then((res) => res.json())
const { data, error } = useSwr('/api/filters', fetcher)

if (error) return <div>Failed to load filters data</div>
if (!data) return <div>Loading...</div>

const filter_title = {
    "job_type": "JOB TYPE",
    "department": "DEPARTMENT",
    "work_schedule": "WORK SCHEDULE",
    "experience": "EXPERIENCE",
}

const filters = Object.keys(filter_title)

 return (
    <>
        {filters.map(filter =>(
            <div className='w-48 h-auto mt-4 ml-2'>
                <div className='border border-gray-200 p-4'>
                <h6 className='font-semibold mb-2'>{filter_title[filter]}</h6>
                {data[filter].map((item) => (
                    <div>
                        <p className='text-sm my-2'>
                            {item.key}
                        <span className='text-xs text-gray-400 ml-1'>{item.doc_count}</span>
                        </p>
                    </div>                   
                    ))} 
                {(data[filter].length >10) && <span className='text-gray-400'>Show more</span>}             
                </div>
            </div>
        ))}
    </>
)}

export default NavBar