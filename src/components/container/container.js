function Container(props) {

	return (
		<div className='container mx-auto px-3'>
				{props.children}
		</div>
	);
}

export default Container;