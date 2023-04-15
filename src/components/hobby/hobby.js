import hobbyList from './hobbyList'

function Hobby() {

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
			{
				hobbyList.map((listItem, index) => {
					return (
						<div key={index}>
							<img className="h-auto max-w-full" src={listItem.img} alt={listItem.title}></img>
						</div>
					)
				})
			}
		</div>
	);
}







export default Hobby;