const Footer = () => {
    return (
        <section className="bg-yellow-400 py-8 w-full mt-4">
            <div className="container mx-auto px-8">
                <div className="table w-full ml-1 mr-1 p-5">
                    <div className="block sm:table-cell">
                        <p className="uppercase text-grey text-sm sm:mb-6"><b>About us</b></p>
                        <ul className="list-reset text-xs mb-6">
                            <li className="mt-2 inline-block mr-1 sm:block sm:mr-0">
                                We are a teaam of nurses, doctors, technologists and executives dedicated to
                                help nurses find jobs that they love                               
                            </li>
                            <li className="mt-2 inline-block mr-1 sm:block sm:mr-0">
                                All copyrights reserved © 2020 - Health Explore                              
                            </li>
                        </ul>
                    </div>
                    <div className="block sm:table-cell">
                        <p className="uppercase text-grey text-sm sm:mb-6"><b>Sitemap</b></p>
                        <ul className="list-reset text-xs mb-6">
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" className="text-grey hover:text-grey-dark">Nurses</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" className="text-grey hover:text-grey-dark">Employers</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" className="text-grey hover:text-grey-dark">Social Networking</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" className="text-grey hover:text-grey-dark">Jobs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="block sm:table-cell">
                        <p className="uppercase text-grey text-sm sm:mb-6"><b>Privacy</b></p>
                        <ul className="list-reset text-xs mb-6">
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" className="text-grey hover:text-grey-dark">Terms of use</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" className="text-grey hover:text-grey-dark">Privacy policy</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" className="text-grey hover:text-grey-dark">Cookie Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer