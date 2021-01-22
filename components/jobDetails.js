const JobDetails = ({ job, id, id2 }) => {
  return (
    <div className="flex justify-between hidden" id={"job-"+id +"-detail-" + id2}>
        <div className="flow-root mr-5">
            <div className="flex mb-3">
                <p className="font-semibold mr-7">Department:</p>
                <p >{job?.department.reduce((dept, value) => dept + ", " + value)}</p>
            </div>
            <div className="flex mb-3">
                <p className="font-semibold mr-4">Hours / shifts:</p>
                <p>{job?.hours[0]} hours / {job?.work_schedule}</p>
            </div>
            <div className="flex">
                <p className="font-semibold mr-12">Summary:</p>
                <p>{job?.description}</p>
            </div>
        </div>
        
      <div className="flex flex-col">
        <div className="w-28 border rounded-lg border-blue-400 py-1 px-3 inline-block mr-4 cursor-pointer bg-blue-400">
          <p className="text-white text-sm py-1 px-1 text-center">
            Job details
          </p>
        </div>
        <div className="border rounded-lg border-blue-400 py-1 px-3 inline-block mr-4 cursor-pointer mt-2">
          <p className="text-blue-400 text-sm text-center py-1">Save job</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
