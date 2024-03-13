import scss from "./Section3.module.scss";

const Section3 = () => {
	return (
		<div className={scss.section3}>
			<div className="container">
				<div className={scss.content}>
					<p className={scss.p}>
						HOW <span>TERE</span>WORKS
					</p>
					<p>
						Download and install the tere app. Enter your phone <br /> number and make
						your user account. when approved you <br /> may start driving.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Section3;
