import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<div className="categories">
			<div className="col">
				<div className="row">
					<img
						src="https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
					/>
					<button>
						<Link className="link" to="./products/1">
							SALE
						</Link>
					</button>
				</div>
				<div className="row">
					<img
						src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
					/>
					<button>
						<Link className="link" to="./products/2">
							WOMAN
						</Link>
					</button>
				</div>
			</div>
			<div className="col">
				<div className="row">
					<img
						src="https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
					/>
					<button>
						<Link className="link" to="./products/3">
							NEW SEASON
						</Link>
					</button>
				</div>
			</div>
			<div className="col col-l">
				<div className="row">
					<div className="col">
						<div className="row">
							<img
								src="https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt=""
							/>
							<button>
								<Link className="link" to="./products/4">
									MEN
								</Link>
							</button>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<img
								src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt=""
							/>
							<button>
								<Link className="link" to="./products/5">
									Acceseries
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<img
						src="https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
					/>
					<button>
						<Link className="link" to="./products/6">
							SHOES
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Categories;
