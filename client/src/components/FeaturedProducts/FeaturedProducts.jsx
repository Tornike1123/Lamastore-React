import React, { useState, useEffect } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Long Sleeve Graphic T-shirt",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			title: "Long Sleeve Graphic T-shirt",
			isNew: true,
			oldPrice: 19,
			price: 12,
		},
		{
			id: 3,
			img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			title: "Skirt",
			oldPrice: 19,
			price: 12,
		},
		{
			id: 4,
			img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			title: "Hat",
			oldPrice: 19,
			price: 12,
		},
		{
			id: 5,
			img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			title: "Skirt",
			oldPrice: 19,
			price: 12,
		},
		{
			id: 6,
			img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			title: "Hat",
			oldPrice: 19,
			price: 12,
		},
	];

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data2 = await axios.get(
					process.env.REACT_APP_API_URL + "/products",
					{
						headers: {
							Authorization:
								"bearer " + process.env.REACT_APP_API_TOKEN,
						},
					}
				);
				console.log(data2);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="featuredProducts">
			<div className="top">
				<h1>{type} Products</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Blanditiis dolores optio rem omnis laudantium veniam?
					Molestiae illo laborum quibusdam consequatur.
				</p>
			</div>
			<div className="bottom">
				{data.map((item) => (
					<Card item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
