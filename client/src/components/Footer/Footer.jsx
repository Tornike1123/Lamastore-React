import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<div className="footer">
			<div className="top">
				<div className="item">
					<h1>Categories</h1>
					<span>Woman</span>
					<span>Man</span>
					<span>Shoes</span>
					<span>Accesories</span>
					<span>New Arivals</span>
				</div>
				<div className="item">
					<h1>Links</h1>
					<span>FAQ</span>
					<span>Pages</span>
					<span>Stores</span>
					<span>Compare</span>
					<span>Cookies</span>
				</div>
				<div className="item">
					<h1>About</h1>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sequi a magnam alias tempore eligendi eveniet!
						Odit unde sapiente hic dolorum magnam numquam accusamus
						quaerat natus quidem, veritatis impedit ipsum optio.
					</span>
				</div>
				<div className="item">
					<h1>Contact</h1>
					<span>
						Lorem ispansum dolor sit, amet consectetur adipisicing
						elit. Quia, ab nesciunt. Totam unde beatae alias iste
						similique quam eum obcaecati repudiandae ut, asperiores
						laborum aperiam repellendus, corporis temporibus, earum
						labore.
					</span>
				</div>
			</div>
			<div className="bottom">
				<div className="left">
					<span className="logo">Lamastore</span>
					<span className="copyright">
						&#169; Copyright 2023. All Rights Reserved
					</span>
				</div>
				<div className="right">
					<img src="/img/payment.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
