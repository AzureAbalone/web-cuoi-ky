import React from "react";
import "./member.css";
const Member = () => {
	const bao = function () {
		window.location.href = "./bao.html";
	};
	const minh = function () {
		window.location.href = "./minh.html";
	};
	const hung = function () {
		window.location.href = "./hung.html";
	};
	const tung = function () {
		window.location.href = "./tung.html";
	};
	const ngoc = function () {
		window.location.href = "./ngoc.html";
	};
	return (
		<div>
			{/* Ho Bao */}
			<div className="cards">
				<div
					className="card tuan"
					data-aos="fade-up"
					data-aos-duration="1500"
					onClick={() => bao()}
				>
					<div className="wrapper">
						<img
							src="./img/card/Apple-Music-Awards-Artist-of-the.png"
							alt=""
							className="cover-image"
						/>
					</div>
					<p className="title">Phạm Hồ Bảo</p>
					<img
						style={{
							width: "350px",
							display: "inline-block",
							left: "-100px",
						}}
						src="./img/card/ts-card.png"
						alt=""
						className="character"
					/>
				</div>
				{/* Tuan Minh */}
				<div
					className="card duc"
					data-aos="fade-down"
					data-aos-duration="1500"
					onClick={() => minh()}
				>
					<div className="wrapper">
						<img
							src="./img/card/minh.jpg"
							alt=""
							className="cover-image"
						/>
					</div>
					<p className="title">Hoàng Tuấn Minh</p>
					<img
						style={{
							width: "350px",
							display: "inline-block",
							left: "-25px",
						}}
						src="./img/card/minh-card.jpg"
						alt=""
						className="character"
					/>
				</div>
				{/* Xuan Hung */}
				<div
					className="card duy"
					data-aos="fade-up"
					data-aos-duration="1500"
					onClick={() => hung()}
				>
					<div className="wrapper">
						<img
							src="./img/card/xuanhung.jpg"
							alt=""
							className="cover-image"
						/>
					</div>
					<p className="title">Nguyễn Xuân Hưng</p>
					<img
						style={{
							width: "370px",
							display: "inline-block",
							left: "-100px",
						}}
						src="./img/card/xuanhung-card.png"
						alt=""
						className="character"
					/>
				</div>

				{/* Thanh Tung */}
				<div
					className="card dat"
					data-aos="fade-down"
					data-aos-duration="1000"
					onClick={() => tung()}
				>
					<div className="wrapper">
						<img
							src="./img/card/tung.jpg"
							alt=""
							className="cover-image"
						/>
					</div>
					<p className="title">Nguyễn Thanh Tùng</p>
					<img
						style={{
							width: "200px",
							height: "225px",
							display: "inline-block",
						}}
						src="./img/card/tung-card.png"
						alt=""
						className="character"
					/>
				</div>

				{/* The Ngoc */}
				<div
					className="card dat"
					data-aos="fade-down"
					data-aos-duration="1000"
					onClick={() => ngoc()}
				>
					<div className="wrapper">
						<img
							src="./img/card/ngoc.jpg"
							alt=""
							className="cover-image"
						/>
					</div>
					<p className="title">Đặng Thế Ngọc</p>
					<img
						style={{
							width: "450px",
							left: "-157px",
							display: "inline-block",
						}}
						src="./img/card/thengoc-card.png"
						alt=""
						className="character"
					/>
				</div>
			</div>
		</div>
	);
};

export default Member;
