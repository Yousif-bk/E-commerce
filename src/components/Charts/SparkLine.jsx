import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
function SparkLine({ currentColor, id, height, width, color, type, data }) {
    return (
        <SparklineComponent
            id={id}
            dataSoucre={data}
            height={height}
            width={width}
            LineWidth={1}
            valueType="Numeric"
            fill={color}
            border={{ color: currentColor, width: 2 }}
            tooltipSettings={{
                visible: true,
                format: '${x} : data ${yval}',
                trackLineSettings: {
                    visible: true,
                },
            }}
            xName="x"
            yName="y"
            type={type}>
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    )
}

export default SparkLine