import scss from "./Section5.module.scss";
import logo from "../../../../assets/photos/01..png";
import logo1 from "../../../../assets/photos/Frame.png";
import logo2 from "../../../../assets/photos/Frame (1).png";
import logo3 from "../../../../assets/photos/Frame (2).png";

export const Section5 = () => {
	return (
		<div className={scss.section5}>
			<div className="container">
				<div className={scss.content}>
					<p className={scss.text}>
						TERE <span>BENEFITS</span>
					</p>
					<div className={scss.div1}>
						<div className={scss.divContents}>
							<div className={scss.contentsDiv1}>
								<img src={logo} alt="logo" />
								<p>
									Flexible <br />
									working hours
								</p>
							</div>
							<p className={scss.textsPTag}>
								You can decide when, and how much <br />
								time you want to drive.
							</p>
						</div>
						<img src={logo1} alt="logo1" />
					</div>
					<div className={scss.div1}>
						<img src={logo2} alt="logo1" />
						<div className={scss.divContents}>
							<div className={scss.contentsDiv1}>
								<img src={logo} alt="logo" />
								<p>Earnings</p>
							</div>
							<p className={scss.textsPTag}>
								By driving with tere you can <br /> earn more.
							</p>
						</div>
					</div>
					<div className={scss.div1}>
						<div className={scss.divContents}>
							<div className={scss.contentsDiv1}>
								<img src={logo} alt="logo" />
								<p>
									Customer <br /> support 24/7
								</p>
							</div>
							<p className={scss.textsPTag}>
								Tere is a local service provider and we are proud to <br />{" "}
								support you in your local language. We are proud <br /> to be at
								your service 24/7!
							</p>
						</div>
						<img src={logo3} alt="logo1" />
					</div>
				</div>
			</div>
		</div>
	);
};
