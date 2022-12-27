import React from "react";
import Card from "../Card/Card";
import "./List.scss";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
	const { data, loading, error } = useFetch(
		`/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
			(item) => `&[filters][sub_categories][id][$eq]=${item}`
		)}`
	);
	return (
		<div className="list">
			{loading
				? "loading"
				: data?.map((item) => <Card item={item} key={item.id} />)}
		</div>
	);
};

export default List;
