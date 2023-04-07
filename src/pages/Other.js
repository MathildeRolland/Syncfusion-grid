import Page from '../components/Page';

const Other = ({ history }) => {
	const handleClick = () => {
		history.goBack();
	};

	return (
		<Page>
			<button onClick={handleClick}>Cancel</button>
		</Page>
	);
};

export default Other;
