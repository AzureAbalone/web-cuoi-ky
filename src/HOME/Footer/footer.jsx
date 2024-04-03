import React from "react";

const Footer = () => {
	return (
		<div>
			<p
				className="text-center mt-5"
				style={{ fontSize: "clamp(20px,9vw,90px)" }}
			>
				Giải trí
			</p>
			<div
				className="mt-2 pb-3 d-flex border-bottom border-dark-subtle"
				style={{ justifyContent: "space-evenly" }}
			>
				<p
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1500"
					className="text-center mt-5"
					style={{ fontSize: "clamp(15px,7vw,70px)" }}
				>
					Game
				</p>
				<p
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1500"
					className="text-center mt-5"
					style={{ fontSize: "clamp(15px,7vw,70px)" }}
				>
					Đọc sách
				</p>
				<p
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1500"
					className="text-center mt-5"
					style={{ fontSize: "clamp(15px,7vw,70px)" }}
				>
					Âm Nhạc
				</p>
				<p
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1500"
					className="text-center mt-5"
					style={{ fontSize: "clamp(15px,7vw,70px)" }}
				>
					Code
				</p>
			</div>
			<div className="mt-5">
				<p
					className="text-center mt-5"
					style={{ fontSize: "clamp(18px,8vw,85px)" }}
				>
					Về Chúng Tớ
				</p>
				<div
					className="w-50 text-center"
					style={{
						position: "absolute",
						left: "50%",
						marginLeft: "-24%",
					}}
				>
					<div data-aos="flip-left" data-aos-duration="1000">
						<b
							className="text-center mt-5"
							style={{ fontSize: "clamp(10px,2vw,25px)" }}
						>
							{" "}
							<i>
								Chúng tớ là những sinh viên đang học tập tại Đại
								học Quốc gia Hà Nội cùng chuyên ngành là công
								nghệ thông tin. Chúng tớ rất đam mê code và có
								thể code hàng ngày mặc dù ngồi nhiều sẽ bị trĩ
								nhưng vì đam mê nên chúng tớ sẽ không bỏ cuộc
							</i>
						</b>
					</div>
					<br /> <br />
					<div data-aos="flip-up" data-aos-duration="1500">
						<i style={{ fontSize: "clamp(10px,2vw,25px)" }}>
							Các thành viên của <b>nhà quê đi code </b>góp phần
							tạo nên sản phẩm này.
						</i>
					</div>
				</div>
			</div>
			<div className="">
				<img
					className=""
					src="./img/logo.png"
					alt="logo"
					width={130}
					style={{
						display: "block",
						marginLeft: "auto",
						marginRight: "auto",
						marginTop: "230px",
					}}
				/>
				<div
					style={{
						textAlign: "center",
						fontSize: "clamp(10px,3vw,25px)",
					}}
				>
					<i>Email: 23070471@vnu.edu.vn</i>
					<br />
					<i>Email: phambao281005@gmail.com</i>
				</div>
			</div>
		</div>
	);
};

export default Footer;