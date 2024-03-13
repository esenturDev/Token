import scss from "./Section1.module.scss";
import logo from "../../../../assets/photos/Group 78.png";
import CustomButton from "../../../Ul/CustomButton/CustomButton";
import logo2 from "../../../../assets/photos/bxl_play-store.png";
import logo3 from "../../../../assets/photos/ci_app-store.png";

export const Section1 = () => {
	return (
		<div className={scss.section1}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.divContent1}>
						<h2>
							DOWNLOAD APP, <br /> SAVE MONEY, MAKE <br /> FRIENDS!
						</h2>
						<p>
							Its simple and its free. Play your part in reducing <br /> Carbon
							Footprint and help Mother Nature to <br /> sustain its beauty. So
							what are you waiting for ? <br /> Lets ride together
						</p>
						<div>
							<CustomButton>
								<img src={logo2} alt="logo2" />
								<span style={{ fontSize: "1.6rem", fontWeight: "600" }}>
									DOWNLOAD
								</span>
							</CustomButton>
							<CustomButton>
								<img src={logo3} alt="logo3" />
								<span style={{ fontSize: "1.6rem", fontWeight: "600" }}>
									DOWNLOAD
								</span>
							</CustomButton>
						</div>
					</div>
					<div className={scss.divContent2}>
						<img src={logo} alt="logo" />
					</div>
				</div>
			</div>
		</div>
	);
};
