import scss from "./Footer.module.scss";
import logo from "../../../assets/photos/Group 3703.png";
import logo2 from "../../../assets/photos/bxl_play-store.png";
import logo3 from "../../../assets/photos/ci_app-store.png";
import CustomButton from "../../Ul/CustomButton/CustomButton";
export const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className={scss.content}>
					<img src={logo} alt="logo" />
					<div className={scss.footerDiv1}>
						<p className={scss.p}>Be Our Friend</p>
						<p>3, Season Park, Jakarta</p>
						<p>support@foodyar.co,id</p>
						<p>021 - 1111 - 2222</p>
					</div>
					<div className={scss.footerDiv1}>
						<p className={scss.p}>Be Our Friend</p>
						<p>3, Season Park, Jakarta</p>
						<p>support@foodyar.co,id</p>
						<p>021 - 1111 - 2222</p>
					</div>
					<CustomButton>
						<img src={logo2} alt="logo2" />
						<span style={{ fontSize: "1.3rem", fontWeight: "600" }}>
							DOWNLOAD
						</span>
					</CustomButton>
					<CustomButton>
						<img src={logo3} alt="logo3" />
						<span style={{ fontSize: "1.3rem", fontWeight: "600" }}>
							DOWNLOAD
						</span>
					</CustomButton>
				</div>
				<p className={scss.textsFooterEnd}>All Rights Reserved tere by Codematics 2022</p>
			</div>
		</footer>
	);
};
