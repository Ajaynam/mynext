"use client";

import CompanyJourney from "./journey";


const AboutCompany = () => {
  return (
    <>
      {/* <section className="text-center">
     <img src="/images/teams/Group-3.svg" className="w-[100%]" style={{ marginTop: '0%' }} ></img>
      </section> */}

      <section className="overflow-hidden pb-20  xl:pb-25 ">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-rose " >
                Our information
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">Introduction</h1>
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                We are a team of experienced professionals with thorough expertise in marketing, developing and designing.
                We build brands success digitally through our exceptional IT solutions like web development, mobile app development,
                full-stack web development, UI/UX development, etc. Our expertise extends to developing software, games, mobile applications,
                and much more in all their forms that you can think of. striving to minimize our carbon footprint and contribute positively to our communities.
              </h4>


            </div>

            <div className=" hidden lg:block">
              <div className="">
                {/* <img src="https://5techg.com/assets/media/banner/about-office.svg" alt="Apple"> */}
                <img src="https://5techg.com/assets/media/banner/about-office.svg" className="w-[800px] "></img>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="container text-center mb-10">
          <div className="heading_container" style={{ alignItems: 'center' }}>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">Our Journey Timeline</h1>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <CompanyJourney />
      </div>

      <section className="team_section" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="heading_container" style={{ alignItems: 'center' }}>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">Meet The Team</h1>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>



        <div className="team_container flex justify-center py-6 px-6 md:px-0 flex-wrap">
          <div className="box pb-4 b-1 m-4 hover:bg-gradient-to-r  hover:shadow-xl transform transition duration-500 hover:scale-105 rounded-lg  overflow-hidden">
            <div className="img-box flex justify-center items-center rounded-lg relative">
              <img src="/images/teams/ceo.jpeg" alt="" width={300} height={300} />
              <div className="absolute top-0 left-1/2 w-12/10 h-3/4 bg-blue-800 rounded-lg transform -translate-x-1/2 -rotate-15"></div>
            </div>
            <div className="detail-box mt-4">
              <h5 className="font-bold text-gray-600">Mr. Rushikesh Koli</h5>
              <label className="font-bold text-gray-600 text-xl pt-2">Founder & CEO</label>
            </div>
          </div>

          <div className="box b-1 pb-4 m-4 hover:bg-gradient-to-r  hover:shadow-xl transform transition duration-500 hover:scale-105 rounded-lg  overflow-hidden">
            <div className="img-box flex justify-center items-center rounded-lg relative">
              <img src="/images/teams/Sambhuraj.jpeg" alt="" width={300} height={300} />
              <div className="absolute top-0 left-1/2 w-12/10 h-3/4 bg-blue-800 rounded-lg transform -translate-x-1/2 -rotate-15"></div>
            </div>
            <div className="detail-box mt-4">
              <h5 className="font-bold text-gray-600">Mr. Sambhuraj Bhosale</h5>
              <label className="font-bold text-gray-600 text-xl pt-2">Co-Founder</label>
            </div>
          </div>

          <div className="box b-1 pb-4 m-4 hover:bg-gradient-to-r  hover:shadow-xl transform transition duration-500 hover:scale-105 rounded-lg  overflow-hidden">
            <div className="img-box flex justify-center items-center rounded-lg relative">
              <img src="/images/teams/satish.jpeg" alt="" width={300} height={300} />
              <div className="absolute top-0 left-1/2 w-12/10 h-3/4 bg-blue-800 rounded-lg transform -translate-x-1/2 -rotate-15"></div>
            </div>
            <div className="detail-box mt-4">
              <h5 className="font-bold text-gray-600">Mr. Satish Vishwakarma</h5>
              <label className="font-bold text-gray-600 text-xl pt-2">Full Stack Developer</label>
            </div>
          </div>


        </div>



        <div className="team_container flex justify-center py-6 px-6 md:px-0 flex-wrap">
          <div className="box b-1 pb-4 m-4 hover:bg-gradient-to-r  hover:shadow-xl transform transition duration-500 hover:scale-105 rounded-lg  overflow-hidden">
            <div className="img-box flex justify-center items-center rounded-lg relative">
              <img src="/images/teams/ajay.jpeg" alt="" width={300} height={300} />
              <div className="absolute top-0 left-1/2 w-12/10 h-3/4 bg-blue-800 rounded-lg transform -translate-x-1/2 -rotate-15"></div>
            </div>
            <div className="detail-box mt-4">
              <h5 className="font-bold text-gray-600">Mr. Ajay Namdev</h5>
              <label className="font-bold text-gray-600 text-xl pt-2">UI/UX Head</label>
            </div>
          </div>
        </div>

        {/* <div className="btn-box flex justify-center">
    <a href="#" className="inline-block px-8 py-3 bg-yellow-600 text-white rounded-lg">View All</a>
  </div> */}
      </section>

    </>
  );
};


export default AboutCompany;
