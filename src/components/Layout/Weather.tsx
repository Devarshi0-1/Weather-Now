import { WeatherData } from '@/helpers/types'
import { FC } from 'react'

type WeatherProps = {
    weatherQueryData: WeatherData
}

const Weather: FC<WeatherProps> = ({ weatherQueryData }) => {
    return (
        <div className='flex w-full gap-3'>
            <div className='flex aspect-square w-fit flex-1 flex-col items-center justify-center rounded-full border'>
                <p className='text-3xl md:text-xl font-semibold'>
                    {Math.round(weatherQueryData.current.temperature_2m)}°C
                </p>
                <div className='flex items-center justify-center gap-3'>
                    <p>H: {Math.round(weatherQueryData.daily.temperature_2m_max[0])}°</p>
                    <p>L: {Math.round(weatherQueryData.daily.temperature_2m_min[0])}°</p>
                </div>
            </div>
            <div className='flex flex-1 flex-col gap-2 text-md'>
                <div className='flex flex-1 items-center justify-center rounded-full border font-medium'>
                    <p>Humidity {Math.round(weatherQueryData.current.relative_humidity_2m)}%</p>
                </div>
                <div className='flex flex-1 items-center justify-center rounded-full border font-medium'>
                    <p>Feels Like {Math.round(weatherQueryData.current.apparent_temperature)}°</p>
                </div>
            </div>
        </div>
    )
}
export default Weather
