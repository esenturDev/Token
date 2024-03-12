import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import ProvidersResult from '../providers/providers'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<ProvidersResult>
					<Layout />
				</ProvidersResult>
			</BrowserRouter>
		</>
	);
};

export default App;
