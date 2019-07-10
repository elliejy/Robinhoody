import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';


const Chart =({chart}) => {
    const close = Object.values( chart ).map( stock => ( stock.close ) )
    let min = -Infinity
    let max = Infinity
    if ( close.length >= 1 ) {
        min = close.reduce( ( acc, el ) => ( Math.min( acc, el ) ) )
        max = close.reduce( ( acc, el ) => ( Math.max( acc, el ) ) )

        Object.values( chart ).forEach( stock => { stock.datetime = stock.date + ' ' + ( stock.minute || '' ) } )

    }

    return (
     <LineChart width={ 1030 } height={ 250 } data={ Object.values( chart ) }
        margin={ { top: 5, right: 30, left: 20, bottom: 5 } }>

        <XAxis dataKey="dateTime" hide={ true } />
        <YAxis dateKey="close" hide={ true } domain={ [min, max] } />
        <Tooltip />

        <Line type="monotone" dataKey="close" dot={ false } stroke='#21ce99' yAxisId={ 0 } />
    </LineChart>
)
}
export default Chart;