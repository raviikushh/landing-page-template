const Hero = () => {
	return (
			<section className='relative container flex flex-col-reverse lg:flex-row gap-12 mt-14 lg:mt-28 w-full'>
				{/* Content */}
				<div className='flex flex-1 flex-col items-center lg:items-start'>
					<h2 className='text-template-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6'>
						A Simple Landing Page
					</h2>
					<p className='text-template-grey text-lg text-center lg:text-left mb-6'>
						A clean and simple interface to display your company
						portfolio - developed in Next.js and tailwind css. Try it
						for free.
					</p>
					<div className='flex justify-center flex-wrap gap-6'>
						<button type='button' className='btn btn-purple'>
							Get it on Chrome
						</button>
						<button type='button' className='btn btn-white'>
							Get it on Firefox
						</button>
					</div>
				</div>
				{/* Image */}
				<div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
					<img
						src='./img/hero-bg.png'
						alt=''
						className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full'
					/>
				</div>
				{/* Rounded Rectangle */}
				<div className='hidden md:block overflow-hidden bg-template-purple rounded-l-full absolute h-80 w-1/2 top-32 right-0 lg:-bottom-28 lg:-right-36'></div>
			</section>
	);
};

export default Hero;
