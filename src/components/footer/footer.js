function Footer() {

	let year = new Date();
	year = year.getFullYear();

	return (
	  <footer className="mt-[100px] pb-[250px] text-light-grey">
			@{year}, All Rights Reserved to Adib G Ahamed
	  </footer>
	);
}

export default Footer;