/* eslint-disable @next/next/no-img-element */

const Sponsors = () => {
  return (
    <div>
  <div className="sm:max-w-5xl pt-8 rounded-xl bg-white mx-4 sm:mx-8 md:mx-auto">
    <div className="w-11/12 sm:w-2/3 mx-auto mb-10">
      <h1 className="focus:outline-none xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pt-4">
        Donors, Partners & Sponsors
      </h1>
      <p className='pt-2 font-semibold text-base text-gray-700 text-center'>
        Here at cantaveK we focus on markets where technology, innovation, and capital can unlock long-term value.
      </p>
    </div>
    <div className="sm:py-6 px-8 sm:24 flex flex-wrap justify-center items-center">
      <div
        className="w-1/3 sm:w-1/6 flex flex-col justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-125 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
        <img className="focus:outline-none w-16 rounded-full" src="/IMG_4879.jpg"
          alt="Adidas" role="img" />
          <span className='font-semibold'>Izi Connect</span>
      </div>
      <div
        className="w-1/3 sm:w-1/6 flex flex-col justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-125 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl ">
        <img className="focus:outline-none w-16 rounded-full" src="/PHOTO-2023-06-01-17-58-35.jpg"
          alt="Chanel" role="img" />
          <span className='font-semibold'>Tap tap send</span>
      </div>
      <div
        className="w-1/3 sm:w-1/6 flex flex-col justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-125 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
        <img className="focus:outline-none w-16 rounded-full" src="/IMG_4880.jpg"
          alt="Nike" role="img" />
          <span className='font-semibold'>Izi Access</span>
      </div>
      <div
        className="w-1/3 sm:w-1/6 flex flex-col justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-125 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
        <img className="focus:outline-none w-16 rounded-full" src="https://cdn-icons-png.flaticon.com/128/732/732242.png"
          alt="Toyota" role="img" />
        <span className='font-semibold'>Ras APA</span>
      </div>
    </div>
  </div>
</div>
  )
}

export default Sponsors