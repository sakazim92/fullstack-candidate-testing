import { useState } from 'react'
import ShowMore from './showMore'
import useSwr from 'swr'

const FilterSection = () =>{ 
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
    <div className='hidden md:inline-block w-48 h-auto mt-4 ml-2'>
        {filters.map((filter, id) =>(
            <div className='border border-gray-300 p-4 mb-2' key={"filter"+id}>
            <h6 className='font-semibold mb-2'>{filter_title[filter]}</h6>
            {data[filter].map((item, index) => (
              index < 10 ? 
                <div key={index}>
                    <p className='text-sm my-2'>
                        {item.key}
                    <span className='text-xs text-gray-400 ml-1'>{item.doc_count}</span>
                    </p>
                </div> : null                   
                ))} 
            {(data[filter].length >10) && <span className='text-gray-400 text-sm'>
              <button onClick={() => setShowMore(true)}>Show more</button>
              </span>}             
            </div>
        ))}
      <ShowMore
        showMore = {showMore}
        setShowMore = {setShowMore}
        departments = {data['department']}
      />
    </div>
)}

export default FilterSection