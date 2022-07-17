import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../assets/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
export default function Stacked({ width, height }) {
    return (
        <ChartComponent
            id="charts"
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            width={width}
            height={height}
            legendSettings={{ background: 'white' }}>
            <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
            <SeriesCollectionDirective>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}
