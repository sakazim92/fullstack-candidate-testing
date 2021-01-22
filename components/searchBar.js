import { useState, useEffect } from 'react'

const SearchBar = ({jobs, setSearchData}) => {
    const [searchString, setSearchString] = useState('')
    const fetcher = (url) =>
    fetch(url).then((res) => {
      return res.json();
    });

    const searchData = () => { 
        if(searchString === "")
        {
            setSearchData(null)
            return
        }
        fetcher("/api/jobs?search="+searchString).then((data) => {
            setSearchData(data.jobs)
        })
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