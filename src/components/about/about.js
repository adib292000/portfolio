import Hobby from '../hobby/hobby';

const aboutMeImage = require("../../assets/proj.png")



function AboutSection() {

	return (
		<div>
			<div className="my-[200px] flex flex-col-reverse lg:flex-row gap-10">
				<div className="flex flex-col basis-1/2 justify-between">
					<div>
						<h3 className="text-2xl tracking-widest text-light-blue font-semibold">HELLO THERE!</h3>
						<h1 className="text-6xl text-dark-blue mt-8 mb-10">I'm Adib G Ahamed</h1>
						<p className="text-xl text-dark-blue leading-8">
							I'm a IJI/UX Designer in Mnagalore. I am currently pursuing my
							enhineering degree at Sahyadri College Of Engineering And
							Managemnet. I am in love with the art of creation and human
							understanding which makes UI/UX the perfect platform for me to
							excel at. PS, I'm also a self proclaimed artist and illustrator.
						</p>
					</div>
					<p className="font-semibold text-2xl text-light-blue mt-10">resume: <a className="" href="./">click here</a></p>
				</div>
				<div className="basis-1/2">
					<img src={aboutMeImage} alt="Adib G Ahamed" />
				</div>
			</div>


			<div className="my-[100px] font-semibold text-4xl text-light-blue flex flex-col md:flex-row gap-y-5 gap-x-56 place-content-center">
				<div className="flex flex-col gap-y-5">
					<div className="text-center md:text-left">UX Design</div>
					<div className="text-center md:text-left">UI Design</div>
					<div className="text-center md:text-left">UX Research</div>
				</div>
				<div className="flex flex-col gap-y-5">
					<div className="text-center md:text-left">Wireframing</div>
					<div className="text-center md:text-left">Prototyping</div>
					<div className="text-center md:text-left">Usability Testing</div>
				</div>
			</div>


			<div className="my-[200px]">
				<h1 className="text-5xl md:text-6xl" >My Hobby</h1>
				<div className="my-[50px] md:my-[100px]">
				<Hobby />

				</div>

			</div>
		</div>
	);
}

export default AboutSection;