import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';


const Chart =({chart, percentChange}) => {

    const close = Object.values( chart ).map( (stock, idx) => {
        // if (!stock.close) stock.close = Object.values(chat)[idx-1].close
        return ( stock.close )
    })
    let min = 0
    let max = 3000
    if ( close.length >= 1 ) {
        min = close.reduce( ( acc, el ) => ( Math.min( acc, el ) ) )
        max = close.reduce( ( acc, el ) => ( Math.max( acc, el ) ) )

        Object.values( chart ).forEach( stock => { stock.datetime = stock.date + ' ' + ( stock.minute || '' ) } )

    }

    return (
     <LineChart width={ 140 } height={50 } data={ Object.values( chart ) }
        margin={ { top: 5, right: 30, left: 20, bottom: 5 } }>

        <XAxis dataKey="dateTime" hide={ true } />
        <YAxis dateKey="close" hide={ true } domain={ [min, max] } />
        <Line type="monotone" dataKey="close" dot={ false } stroke={ percentChange > 0 ? '#21ce99' : '#ff0000'} yAxisId={ 0 } />
    </LineChart>
)
}
export default Chart;