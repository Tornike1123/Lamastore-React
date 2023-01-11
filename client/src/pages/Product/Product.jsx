import React, { useState } from "react";
import "./Product.scss";
import AddShoppinaCarticon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Balancelcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Product = () => {
	const id = useParams().id;
	const [selectedImg, setSelectedImg] = useState("img");
	const [quantity, setQuantity] = useState(1);

	const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

	return (
		<div className="product">
			{loading ? (
				"loading"
			) : (
				<>
					<div className="left">
						<div className="images">
							<img
								src={
									process.env.REACT_APP_UPLOAD_URL +
									data?.attribute?.img?.data?.attributes?.url
								}
								alt=""
								onClick={(e) => setSelectedImg("img1")}
							/>
							<img
								src={
									data?.attribute?.img2?.data?.attributes?.url
								}
								alt=""
								onClick={(e) => setSelectedImg("img2")}
							/>
						</div>
						<div className="mainImg">
							<img
								src={
									data?.attribute[selectedImg].data
										?.attributes?.url
								}
								alt=""
							/>
						</div>
					</div>
					<div className="right">
						<h1>Title</h1>
						<span className="price">$199</span>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Natus quam placeat sed ipsam dolorem. Aliquam
							voluptate asperiores illo odio eum.
						</p>
						<div className="quantity">
							<button
								onClick={() => setQuantity((prev) => prev + 1)}
							>
								+
							</button>
							<span>{quantity}</span>
							<button
								onClick={() =>
									setQuantity((prev) =>
										prev === 1 ? 1 : prev - 1
									)
								}
							>
								-
							</button>
						</div>
						<button className="add">
							<AddShoppinaCarticon /> ADD TO CART
						</button>
						<div className="links">
							<div className="item">
								<FavoriteBorderIcon /> ADD TO WISH LIST
							</div>
							<div className="item">
								<Balancelcon /> ADD TO COMPARE
							</div>
						</div>
						<div className="info">
							<span>Vendor: Polo</span>
							<span>Product Type: T-Shirt</span>
							<span>Tag: T-Shirt, Men, Top</span>
						</div>
						<hr />
						<div className="info">
							<span>DESCRIPTION</span>
							<hr />
							<span>ADDITIONAL INFORMATION</span>
							<hr />
							<span>FAQ</span>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Product;
