import { AirQualityData } from '@/helpers/types'
import { getAQIColor, getAQIDescription } from '@/lib/utils'
import { FC } from 'react'

type AirQualityProps = {
    airQualityQueryData: AirQualityData
}

const AirQuality: FC<AirQualityProps> = ({ airQualityQueryData }) => {
    return (
        <div className='w-full'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col items-center rounded-full border p-2'>
                    <p className='text-sm text-gray-600'>US AQI</p>
                    <p
                        className={`text-xl font-medium ${getAQIColor(
                            airQualityQueryData.current.us_aqi
                        )}`}>
                        {Math.round(airQualityQueryData.current.us_aqi)}
                    </p>
                    <p className='text-sm'>
                        {getAQIDescription(airQualityQueryData.current.us_aqi)}
                    </p>
                </div>
                <div className='flex flex-col items-center rounded-full border p-2'>
                    <p className='text-sm text-gray-600'>PM2.5</p>
                    <p className='text-xl font-medium'>
                        {Math.round(airQualityQueryData.current.pm2_5)}{' '}
                        {airQualityQueryData.current_units.pm2_5}
                    </p>
                </div>
                <div className='flex flex-col items-center rounded-full border p-2'>
                    <p className='text-sm text-gray-600'>PM10</p>
                    <p className='text-xl font-medium'>
                        {Math.round(airQualityQueryData.current.pm10)}{' '}
                        {airQualityQueryData.current_units.pm10}
                    </p>
                </div>
                <div className='flex flex-col items-center rounded-full border p-2'>
                    <p className='text-sm text-gray-600'>CO</p>
                    <p className='text-xl font-medium'>
                        {Math.round(airQualityQueryData.current.carbon_monoxide)}{' '}
                        {airQualityQueryData.current_units.carbon_monoxide}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AirQuality
