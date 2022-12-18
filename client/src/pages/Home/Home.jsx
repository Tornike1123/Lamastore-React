import React from "react";
import Categories from "../../components/Categories/Categories.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import "./Home.scss";

const Home = () => {
	return (
		<div className="home">
			<Slider />
			<FeaturedProducts type="Featured" />
			<Categories />
			<FeaturedProducts type="Trending" />
			<Contact />
		</div>
	);
};

export default Home;
