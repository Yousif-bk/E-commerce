import React, {useEffect, useState} from 'react'
import { contextMenuItems, ordersGrid } from '../assets/dummy';
import { Header, Button } from '../components';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axios from '../axios-orders';
import { firestore } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
function Orders() {

  const orderCollections = collection(firestore, 'orders');

  // initialize the state
  const editing = { allowDeleting: true, allowEditing: true };
  const { currentColor } = useStateContext();
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/addOrder");
  }

  // initialize the orders state
  const [orders, setOrders] = React.useState({});

  // fetch orders from firestore
  useEffect(() => {
    const getOrders = async () => {
      const data = await getDocs(orderCollections);
      setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getOrders();
  }, []);


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <div className="mb-4">
        <Button
          onClick={handleClick}
          color='white'
          bgColor={currentColor}
          text="Add Order"
          borderRadius="10px"
        />
      </div>
      <GridComponent
        id="gridcomp"
        dataSource={orders}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}>

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