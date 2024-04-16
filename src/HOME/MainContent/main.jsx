import React, { Component } from "react";
import AOS from "aos";
import "./main.css";
class Main extends Component {
	componentDidMount() {
		AOS.init();
	}
	render() {
		return (
			<div>
				<div className="video" style={{ marginLeft: "-12px" }}>
					<video
						className="object-fit-cover"
						width={"102%"}
						autoPlay
						muted
						loop
					>
						<source src="./video/bg2.mp4" type="video/mp4"></source>
					</video>
					<div
						data-aos="zoom-out"
						data-aos-duration="1000"
						className="main-title text-center text-light"
						style={{
							position: "absolute",
							top: "40rem",
							left: "50%",
							transform: "translate(-50%,-20rem)",
						}}
					>
						<p>NHÓM 2 TẬP CODE</p>
					</div>
					<div
						className="text-light small-title"
						style={{
							position: "absolute",
							top: "50rem",
							left: "50%",
							transform: "translate(-50%,-20rem)",
							fontSize: "30px",
						}}
					>
						<p>Hội anh em ĐHQG tập code</p>
					</div>
					<button
						className="comic-button"
						type="button"
						style={{
							position: "absolute",
							top: "70rem",
							left: "50%",
							transform: "translate(-50%,-19rem)",
						}}
					>
						CHECK INFO
					</button>
				</div>
			</div>
		);
	}
}

export default Main;
