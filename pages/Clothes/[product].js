import { useRouter } from "next/router";

export default function Product() {
	const { product } = useRouter().query;
	console.log(product);
	return (
		<div>
			hello {product}
		</div>
	);

}