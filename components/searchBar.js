import { useState, useEffect } from 'react'

const SearchBar = ({jobs, setSearchData}) => {
    const [searchString, setSearchString] = useState('')

    const searchData = () => {
        if(searchString === "")
        {
            setSearchData([])
            return
        }
        const dataKeys = Object.keys(jobs[0].items[0])
        const searchData = []
        jobs.forEach(job => {
            for(let i=0; i<job.items.length; i++){
                const item = job.items[i]
                let breakFlag = false
                for(let j=0; j<dataKeys.length; j++)
                {
                    const key = dataKeys[j]
                    if(item[key].toString().toLowerCase().includes(searchString.toLowerCase()))
                    {
                        searchData.push(job)
                        breakFlag = true
                        break
                    }
                }
                if(breakFlag) break
            }
        })
        setSearchData(searchData)
    }

    useEffect(() => {
        searchData()
    }, [searchString])

    return (
        <section className="bg-gray-100 h-30 p-5">
            <div className="container mx-auto">
                <input className="w-full h-16 rounded mb-2 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg text-gray-400" 
                type="search" 
                placeholder="Search for any job, title, keywords, company"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                />     
            </div>
        </section>
    )
}

export default SearchBar