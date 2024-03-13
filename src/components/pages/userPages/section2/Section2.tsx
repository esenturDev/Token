import CustomButton from "../../../Ul/CustomButton/CustomButton";
import scss from "./Section2.module.scss";

const Section2 = () => {
	return (
		<div className={scss.section2}>
			<div className="container">
				<div className={scss.content}>
					<h2>
						Let’s go. Get a link <br /> to download the app.
					</h2>
					<div className={scss.form}>
						<input type="text" placeholder="Enter mobile phone number" />
						<CustomButton>APPLY TO DRIVE</CustomButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section2;
