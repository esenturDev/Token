import { useState } from "react";
import scss from "./Projects.module.scss";
import { Button } from "../../Ul/button/Button";
import { createPortal } from "react-dom";
import Input from "../../Ul/input/Input";
import { useDeleteProductsMutation, useGetProductsQuery, usePostProductsMutation } from "../../../store/api/tools/products";
const Projects = () => {
	const [postProducts] = usePostProductsMutation();
  const {data: productsArray = []} =  useGetProductsQuery();
  const [deleteProducts] =  useDeleteProductsMutation();
  console.log(productsArray);
  
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [price, setPrice] = useState<string>("");
	const [productName, setProductName] = useState<string>("");
	const [quantity, setQuantity] = useState<string>("");
	const [photoUrl, setPhotoUrl] = useState<string>("");
	const handlePostProducts = async () => {
		await postProducts({ productName, quantity, price, photoUrl });
	};
  const handleDeleteProducts = async (id: number) => {
    await deleteProducts( id );
  }
	return (
		<>
			<div className={scss.products}>
				<div className="container">
					<div className={scss.content}>
						<Button onClick={() => setOpenModal(true)}>Add Products</Button>
            {productsArray.map((item) => (
              <div key={item._id}>
                <p>{item.price}</p>
                <Button onClick={() => handleDeleteProducts(item._id!)}>Delete</Button>
              </div>
            ))}
					</div>
				</div>
			</div>
			{openModal &&
				createPortal(
					<div>
						<div>
							<Input
								type="text"
								value={productName}
								setData={setProductName}
								placeholder="Название продукта"
							/>
							<Input
								type="text"
								value={quantity}
								setData={setQuantity}
								placeholder="quantity"
							/>
							<Input
								type="text"
								value={price}
								setData={setPrice}
								placeholder="price"
							/>
							<Input
								type="url"
								value={photoUrl}
								setData={setPhotoUrl}
								placeholder="Photo URL"
							/>
							<Button onClick={handlePostProducts}>Add Product</Button>
						</div>
					</div>,
					document.getElementById("modal")
				)}
		</>
	);
};

export default Projects;
