import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Inject,
	Page,
	Sort,
	Filter,
	Group,
	Selection,
	Reorder,
	Resize,
} from '@syncfusion/ej2-react-grids';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const GridContainer = ({ columns, datasource }) => {
	const [gridDataSource, setGridDataSource] = useState([]);

	const gridRef = useRef(null);

	useEffect(() => {
		if (datasource) {
			setGridDataSource(datasource);
		}
	}, [datasource]);

	return (
		<GridComponent
			id='adaptivebrowser'
			allowPaging
			allowFiltering
			allowGrouping
			allowSorting
			allowSelection
			allowResizing
			allowReordering
			ref={gridRef}
			dataSource={gridDataSource}
		>
			<ColumnsDirective>
				{columns.map((column) => (
					<ColumnDirective
						key={column.field}
						field={column.field}
						headerText={column.headerText}
						format={undefined}
					/>
				))}
			</ColumnsDirective>
			<Inject
				services={[
					Page,
					Sort,
					Filter,
					Group,
					Selection,
					Reorder,
					Resize,
				]}
			/>
		</GridComponent>
	);
};

export default GridContainer;
