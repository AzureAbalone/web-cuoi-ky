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
							src="./img/card/baongu.jpg"
							alt=""
							className="cover-image"
						/>
					</div>
					<p className="title">Phạm Hồ Bảo</p>
					<img
						style={{ width: "200px" }}
						src="./img/card/baongu-card.png"
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
							src="./img/card/quang_duc.jpg"
							alt=""
							className="cover-image"
						/>
					</div>
					<p className="title">Hoàng Tuấn Minh</p>
					<img
						style={{
							width: "480px",
							display: "inline-block",
							left: "-190px",
						}}
						src="./img/card/duc.png"
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
							src="./img/card/xuan_dat.jpg"
							alt=""
							className="cover-image"
						/>
					</div>
					<p className="title">Nguyễn Thanh Tùng</p>
					<img
						style={{
							width: "150px",
							display: "inline-block",
							left: "-10px",
						}}
						src="./img/card/dat.png"
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
							src="./img/card/xuan_dat.jpg"
							alt=""
							className="cover-image"
						/>
					</div>
					<p className="title">Đặng Thế Ngọc</p>
					<img
						style={{
							width: "150px",
							display: "inline-block",
							left: "-10px",
						}}
						src="./img/card/dat.png"
						alt=""
						className="character"
					/>
				</div>
			</div>
		</div>
	);
};

export default Member;
