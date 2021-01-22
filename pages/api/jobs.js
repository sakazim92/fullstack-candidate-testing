const jobs = require('../../data/jobs') 

module.exports = async (req, res) => {
  res.statusCode = 200
  const dataKeys = Object.keys(jobs[0].items[0])
  const searchString = req?.query?.search
  
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

  if(!searchString || searchString === "") return res.json({jobs: jobs})

  const searchData = []
  jobs.forEach(job => {
    for(let i=0; i<job.items.length; i++){
        const item = job.items[i]
        let breakFlag = false
        for(let j=0; j<dataKeys.length; j++)
        {
            const key = dataKeys[j]
            if(item[key].toString().toLowerCase().includes(req.query.search.toLowerCase()))
            {
                searchData.push(job)
                breakFlag = true
                break
            }
        }
        if(breakFlag) break
    }
  })
  return res.json({jobs: searchData})
}
