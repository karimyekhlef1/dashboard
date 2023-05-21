import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
// import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';


const test = [
    { month: 'Jan', sales: 35,    Status: 'Open'}, { month: 'Feb', sales: 28,    Status: 'Testing' },
    { month: 'Mar', sales: 34,    Status: 'Open' }, { month: 'Apr', sales: 32,    Status: 'Testing' },
    { month: 'May', sales: 40,    Status: 'Open' }, { month: 'Jun', sales: 32 ,    Status: 'Testing' },
    { month: 'Jul', sales: 35,    Status: 'Open' }, { month: 'Aug', sales: 55,    Status: 'Testing' },
    { month: 'Sep', sales: 38 ,    Status: 'Open'}, { month: 'Oct', sales: 30 ,    Status: 'InProgress'},
    { month: 'Nov', sales: 200 ,    Status: 'InProgress'}, { month: 'Dec', sales: 32,    Status: 'InProgress' }
];
const test1=[
  { headerText: 'To Do',
  keyField: 'InProgress',
  allowToggle: true },

{ headerText: 'In Progress',
  keyField: 'Testing',
  allowToggle: true },

{ headerText: 'Testing',
  keyField: 'Open',
  allowToggle: true,
 },


];

const Test = () => (
  <div className="bg-red-500  h-screen flex  justify-center items-center ">
<GridComponent dataSource={test}>
        <ColumnsDirective>
            <ColumnDirective field='month' width='100' textAlign="left"/>
            <ColumnDirective field='sales' width='100'/>
            <ColumnDirective field='Status' width='100' textAlign="Right"/>
            {/* <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/> */}
        </ColumnsDirective>
    </GridComponent>
    
  </div>
);

export default Test;
