import { Fragment } from "react";

const ShowMore = ({ showMore, setShowMore, departments }) => {
  return (
    <Fragment>
      {showMore && (
        <div className="modal modal-active fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

          <div className="modal-container flex-wrap flex bg-white w-11/12 mx-auto rounded shadow-lg z-50 overflow-y-auto">
            
            <div className="modal-content py-4 text-center px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Departments</p>
                <div className="modal-close cursor-pointer z-50">
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    onClick = {() => setShowMore(false)}
                    >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
                </div>
              </div>

              {departments.map((department) => (
                <span className="text-sm my-2 mr-3">
                  {department.key}
                  <span className="text-xs text-gray-400 ml-1">
                    {department.doc_count}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default ShowMore;
