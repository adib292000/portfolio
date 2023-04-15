import projectList from './projectList'

function Card(prop) {


	return (

		<a href="./" className="flex flex-col lg:flex-row shadow-2xl">
				<div className='basis-2/3'>
					<img className="w-full h-full" src={prop.prop.img} alt={prop.prop.title}></img>
				</div>
				<div className="basis-1/3 p-10 flex flex-col justify-around" style={{backgroundColor: prop.prop.colour, color: prop.prop.font_colour}}>
					<div>
						<h5 className="text-5xl font-semibold">{prop.prop.title}</h5>
						<h5 className="text-2xl mt-2 mb-10">{prop.prop.role}</h5>
					</div>
					<p className="">{prop.prop.desc}</p>
				</div>
			</a>


	);
}

function Projects() {


	return (

		<div className="flex flex-col gap-[200px]">
			{
				projectList.map((listItem, index) => {
					return <Card key={index} prop={listItem} />
				})
			}
		</div>

	);
}

export default Projects;