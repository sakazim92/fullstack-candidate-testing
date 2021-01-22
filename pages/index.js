import useSwr from 'swr'
import Header from '../components/header'
import Footer from '../components/footer'
import FilterSection from '../components/filterSection'
import JobList from '../components/jobList'
import SearchBar from '../components/searchBar'
import { useState, useEffect } from 'react'


const Index = () => {
  const [searchData, setSearchData] = useState([])
  const fetcher = (url) => fetch(url).then((res) => { return res.json()})
  const { data, error } = useSwr('/api/jobs', fetcher)

  if (error) return <div>Failed to load jobs data</div>
  if (!data) return <div>Loading...</div>
 
  return (
   <div>
    <Header/>
    <SearchBar
    jobs={data.jobs}
    setSearchData = {setSearchData}/>
    <div className="flex">
      <FilterSection/>
      <JobList
      jobs = {searchData.length? searchData : data.jobs}
      setSearchData = {setSearchData}/>
    </div>
     <Footer/>
   </div>
  )
}
  
export default Index
