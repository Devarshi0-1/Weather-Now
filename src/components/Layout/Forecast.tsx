import { ChartContainer, ChartTooltip } from '@/components/ui/chart'
import { WeatherData } from '@/helpers/types'
import { FC } from 'react'
import { Area, CartesianGrid, ComposedChart, Legend, Line, XAxis, YAxis } from 'recharts'

type ForeCastProps = {
    weatherQueryData: WeatherData
}

const Forecast: FC<ForeCastProps> = ({ weatherQueryData }) => {
    return (
        <div className='w-full'>
            <h3 className='font-semibold'>7 day Forecast</h3>
            <div>
                <ChartContainer
                    config={{
                        max: {
                            label: 'Max Temperature',
                            color: 'hsl(var(--chart-1))',
                        },
                        min: {
                            label: 'Min Temperature',
                            color: 'hsl(var(--chart-2))',
                        },
                        precip: {
                            label: 'Precipitation Sum',
                            color: 'hsl(var(--chart-3))',
                        },
                        precipProb: {
                            label: 'Precipitation Probability',
                            color: 'hsl(var(--chart-4))',
                        },
                    }}>
                    <ComposedChart
                        data={weatherQueryData.daily.time.map((date, index) => ({
                            date,
                            max: weatherQueryData.daily.temperature_2m_max[index],
                            min: weatherQueryData.daily.temperature_2m_min[index],
                            precip: weatherQueryData.daily.precipitation_sum[index],
                            precipProb: weatherQueryData.daily.precipitation_probability_max[index],
                        }))}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis
                            dataKey='date'
                            tickFormatter={(value) =>
                                new Date(value).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                })
                            }
                        />
                        <YAxis
                            yAxisId='temp'
                            label={{
                                value: 'Temperature (°C)',
                                angle: -90,
                                position: 'insideLeft',
                                offset: 25,
                            }}
                        />
                        <YAxis
                            yAxisId='precip'
                            orientation='right'
                            label={{
                                value: 'Precipitation (mm)',
                                angle: 90,
                                position: 'insideRight',
                                offset: 25,
                            }}
                        />
                        <YAxis yAxisId='prob' orientation='right' hide />
                        <ChartTooltip
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className='rounded-md bg-background p-2 shadow-md'>
                                            <p className='font-bold'>
                                                {new Date(label).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })}
                                            </p>
                                            <p className='text-chart-1'>
                                                Max: {payload[0].value}°C
                                            </p>
                                            <p className='text-chart-2'>
                                                Min: {payload[1].value}°C
                                            </p>
                                            <p className='text-chart-3'>
                                                Precipitation: {payload[2].value} mm
                                            </p>
                                            <p className='text-chart-4'>
                                                Precipitation Probability: {payload[3].value}%
                                            </p>
                                        </div>
                                    )
                                }
                                return null
                            }}
                        />
                        <Legend verticalAlign='bottom' height={36} />
                        <Line
                            type='monotone'
                            dataKey='max'
                            stroke='var(--color-max)'
                            name='Max Temperature'
                            yAxisId='temp'
                        />
                        <Line
                            type='monotone'
                            dataKey='min'
                            stroke='var(--color-min)'
                            name='Min Temperature'
                            yAxisId='temp'
                        />
                        <Area
                            dataKey='precip'
                            fill='var(--color-precip)'
                            name='Precipitation Sum'
                            yAxisId='precip'
                        />
                        <Area
                            dataKey='precipProb'
                            fill='var(--color-precipProb)'
                            name='Precipitation Probability'
                            yAxisId='prob'
                        />
                    </ComposedChart>
                </ChartContainer>
            </div>
        </div>
    )
}
export default Forecast
