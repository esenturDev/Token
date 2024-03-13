import scss from "./Section4.module.scss";
import logo from "../../../../assets/photos/Group 3693.png";
import logo1 from "../../../../assets/photos/Group 3694.png";
const Section4 = () => {
	return (
		<div className={scss.section4}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.div1}>
						<div className={scss.texts}>
							<img src={logo1} alt="logo1" />
							<p>REQUEST A RIDE</p>
							<p className={scss.p}>
								Have to reach office or going <br />
								for shopping ? <br /> Just put your current location <br /> and
								destination and search a <br /> ride that suits you
							</p>
						</div>
						<div className={scss.texts}>
							<img src={logo1} alt="logo1" />
							<p>INSTANT NOTIFICATIONS</p>
							<p className={scss.p}>
								Get instant notifications for <br /> your rides and be in
								contact <br /> with fellow riders <br /> all the time
							</p>
						</div>
					</div>
					<img src={logo} alt="logo" />
					<div className={scss.div2}>
						<div className={scss.texts}>
							<img src={logo1} alt="logo1" />
							<p>POST A RIDE</p>
							<p className={scss.p}>
								Going somewhere but hate <br /> to travel alone - just post{" "}
								<br /> your ride details and <br /> publish it
							</p>
						</div>
						<div className={scss.texts}>
							<img src={logo1} alt="logo1" />
							<p>CASHLESS PAYMENT</p>
							<p className={scss.p}>
								Payment made easy by using <br /> your own Wallet - no more cash{" "}
								<br /> to carry
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section4;
