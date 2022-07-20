import React from 'react'
import { ordersData, contextMenuItems, ordersGrid } from '../assets/dummy';
import { Header } from '../components';
import axios from '../axios-orders';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
function Orders() {

  const editing = { allowDeleting: true, allowEditing: true };
  const [order, setOrder] = React.useState(null)
  React.useEffect(() => {
    axios.get('/orders.json').then((response) => {
      console.log("React Product Response",response.data);
      setOrder(response.data)
    }) .catch((error) => {
      console.log(error.message)
    })
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={order}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders