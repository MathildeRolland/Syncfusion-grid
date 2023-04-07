import jsonTest from '../datasource.json';
import { columns } from '../columns';

import Page from '../components/Page';
import GridContainer from '../components/GridContainer';

const Grid = () => {
	return (
		<Page>
			<h1>GRID PAGE!!</h1>
			<GridContainer columns={columns} datasource={jsonTest} />
		</Page>
	);
};

export default Grid;
