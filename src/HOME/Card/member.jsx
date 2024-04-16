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
					data-aos="zoom-in"
					data-aos-duration={500}
					onClick={() => bao()}
				>
					<div className="wrapper">
						<p className="title">Phạm Hồ Bảo</p>
						<img
							src="./img/card/Apple-Music-Awards-Artist-of-the.png"
							alt=""
							className="cover-image"
						/>
					</div>
				</div>
				{/* Tuan Minh */}
				<div
					className="card duc"
					data-aos="zoom-in"
					data-aos-duration={1000}
					onClick={() => minh()}
				>
					<div className="wrapper">
						<p className="title">Hoàng Tuấn Minh</p>
						<img
							src="./img/card/minh.jpg"
							alt=""
							className="cover-image"
						/>
					</div>
				</div>
				{/* Xuan Hung */}
				<div
					className="card duy"
					data-aos="zoom-in"
					data-aos-duration={1500}
					onClick={() => hung()}
				>
					<div className="wrapper">
						<p className="title">Nguyễn Xuân Hưng</p>
						<img
							src="./img/card/xuanhung.jpg"
							alt=""
							className="cover-image"
						/>
					</div>
				</div>

				{/* Thanh Tung */}
				<div
					className="card dat"
					data-aos="zoom-in"
					data-aos-duration={2000}
					onClick={() => tung()}
				>
					<div className="wrapper">
						<p className="title">Nguyễn Thanh Tùng</p>
						<img
							src="./img/card/tung.jpg"
							alt=""
							className="cover-image"
						/>
					</div>
				</div>

				{/* The Ngoc */}
				<div
					className="card dat"
					data-aos="zoom-in"
					data-aos-duration={2500}
					onClick={() => ngoc()}
				>
					<div className="wrapper">
						<p className="title">Đặng Thế Ngọc</p>
						<img
							src="./img/card/ngoc.jpg"
							alt=""
							className="cover-image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Member;
