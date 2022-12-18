import React from "react";
import "./Product.scss";

const Product = () => {
	return (
		<div className="product">
			<div className="left">
				<div className="filterItem">
					<h2>Product Categories</h2>
					<div className="inputItem">
						<input type="checkbox" id="1" value={1} />
						<label htmlFor="1">Shoes</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id="2" value={2} />
						<label htmlFor="2">Skirt</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id="3" value={3} />
						<label htmlFor="3">Coats</label>
					</div>
				</div>
				<div className="filterItem">
					<h2>Filter By Price</h2>
					<div className="inputItem">
						<span>0</span>
						<input type="range" min={0} max={100} />
						<span>100</span>
					</div>
				</div>
				<div className="filterItem">
					<h2>Sort by</h2>
					<div className="inputItem">
						<input type="radio" id="asc" value="asc" name="price" />
						<label htmlFor="asc">Lowest Price</label>
					</div>
					<div className="inputItem">
						<input type="radio" id="asc" value="asc" name="price" />
						<label htmlFor="asc">Highest Price</label>
					</div>
				</div>
			</div>
			<div className="right">
				<div className="catImg"></div>
			</div>
		</div>
	);
};

export default Product;
