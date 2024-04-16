import React, { Component } from "react";
import "./header.css";
// day la test
class Header extends Component {
	showContact = () => {
		alert("0928152468");
	};
	hobao = () => {
		window.location.href = "./bao.html";
	};
	tuanminh = () => {
		window.location.href = "./minh.html";
	};

	thanhtung = () => {
		window.location.href = "./tung.html";
	};

	xuanhung = () => {
		window.location.href = "./hung.html";
	};
	thengoc = () => {
		window.location.href = "./ngoc.html";
	};
	render() {
		return (
			<div className="">
				<div className="row border-info border-bottom border-2">
					<div className="col-10 ps-3 logo-center">
						<img
							src="./img/logo.png"
							className="ms-1"
							width={55}
							alt="logo"
						/>
						<a href={<Header />} className="logo-title">
							Nhóm 2 tập code
						</a>
					</div>
					<div className="col-2">
						<nav className="navbar navbar-expand-lg float-end pe-2">
							<div className="container-fluid">
								<button
									className="navbar-toggler"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="navbar-toggler-icon" />
								</button>
								<div
									className="collapse navbar-collapse"
									id="navbarSupportedContent"
								>
									<ul className="navbar-nav me-auto mb-2 mb-lg-0">
										<li className="nav-item me-4">
											<button
												className="nav-link zoom fs-5 color"
												aria-current="page"
												href={<Header />}
											>
												Home
											</button>
										</li>
										<li className="nav-item dropdown ms-4 me-4">
											<button
												className="nav-link zoom fs-5 color"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												Members
											</button>
											<ul
												className="dropdown-menu"
												style={{ width: "250px" }}
											>
												<div
													className="flex-column"
													id="v-pills-tab"
													role="tablist"
													aria-orientation="vertical"
												>
													<button
														className="nav-link fs-5"
														id="v-pills-home-tab"
														data-bs-toggle="pill"
														data-bs-target="#v-pills-home"
														type="button"
														role="tab"
														aria-controls="v-pills-home"
														aria-selected="true"
														onClick={() =>
															this.hobao()
														}
													>
														<li>Phạm Hồ Bảo</li>
													</button>
													<button
														className="nav-link fs-5"
														id="v-pills-profile-tab"
														data-bs-toggle="pill"
														data-bs-target="#v-pills-profile"
														type="button"
														role="tab"
														aria-controls="v-pills-profile"
														aria-selected="false"
														onClick={() =>
															this.tuanminh()
														}
													>
														<li>Hoàng Tuấn Minh</li>
													</button>
													<button
														className="nav-link fs-5"
														id="v-pills-duc-tab"
														data-bs-toggle="pill"
														data-bs-target="#v-pills-duc"
														type="button"
														role="tab"
														aria-controls="v-pills-duc"
														aria-selected="false"
														onClick={() =>
															this.thanhtung()
														}
													>
														<li>
															Nguyễn Thanh Tùng
														</li>
													</button>
													<button
														className="nav-link fs-5"
														id="v-pills-dat-tab"
														data-bs-toggle="pill"
														data-bs-target="#v-pills-dat"
														type="button"
														role="tab"
														aria-controls="v-pills-dat"
														aria-selected="false"
														onClick={() =>
															this.xuanhung()
														}
													>
														<li>
															Nguyễn Xuân Hưng
														</li>
													</button>
													<button
														className="nav-link fs-5"
														id="v-pills-profile-tab"
														data-bs-toggle="pill"
														data-bs-target="#v-pills-profile"
														type="button"
														role="tab"
														aria-controls="v-pills-profile"
														aria-selected="false"
														onClick={() =>
															this.thengoc()
														}
													>
														<li>Đặng Thế Ngọc</li>
													</button>
												</div>
											</ul>
										</li>
										<li className="nav-item me-4 ms-4">
											<button
												className="nav-link zoom fs-5 color"
												onClick={this.showContact}
											>
												Contact
											</button>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>

				<div className="tab-content" id="v-pills-tabContent">
					<div
						className="tab-pane fade"
						id="v-pills-home"
						role="tabpanel"
						aria-labelledby="v-pills-home-tab"
						tabIndex={0}
					></div>
					<div
						class="tab-pane fade"
						id="v-pills-profile"
						role="tabpanel"
						aria-labelledby="v-pills-profile-tab"
						tabindex="0"
					></div>
					<div
						class="tab-pane fade"
						id="v-pills-duc"
						role="tabpanel"
						aria-labelledby="v-pills-duc-tab"
						tabindex="0"
					></div>
					<div
						class="tab-pane fade"
						id="v-pills-dat"
						role="tabpanel"
						aria-labelledby="v-pills-dat-tab"
						tabindex="0"
					></div>
				</div>
			</div>
		);
	}
}

export default Header;
