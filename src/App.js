import './App.css';
import Card from './HOME/Card/card';
import Footer from './HOME/Footer/footer';
import Footer2 from './HOME/Footer2/footer2';
import Header from './HOME/Header/header';
import Main from './HOME/MainContent/main';
import { SpeedInsights } from "@vercel/speed-insights/react"
/** import các thư viện 
 * app(đoạn mã trả về JSX (JavaScript XML) để render ra các component và phần tử trên giao diện.)
*/
function App() {
	return (
		<div className="container-fluid">
			<div className='col-12 position-fixed' style={{ marginLeft: '-12px', marginTop: '0px', background: 'rgba(0,0,0,0.2)', backdropFilter: "blur(6px)", zIndex: '10' }}>
				<Header />
			</div>
			<div className='col-12' style={{ marginTop: '0px' }}>
				<Main />
			</div>
			<div className='col-12'>
				<Card />
			</div>
			<div className='col-12'>
				<Footer />
			</div>
			<div className='col-12'>
				<Footer2 />
			</div>
			<SpeedInsights />
		</div >
	);
}

export default App;
/**Dòng này xuất App để có thể sử dụng App như một component trong các module khác. */