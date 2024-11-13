import { UseQueryResult } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'sonner'
import { AirQualityData, GeocodingResponse, WeatherData } from './types'

export const getCodingQueryFn = async (city: string) => {
    const response = await axios.get<GeocodingResponse>(
        'https://geocoding-api.open-meteo.com/v1/search',
        {
            params: {
                name: city,
                count: 1,
                language: 'en',
                format: 'json',
            },
        }
    )

    if (!response.data.results || response.data.results.length === 0) {
        toast.error(
            `No location found for "${city}". Please check the spelling or try a different city.`
        )
        throw new Error(
            `No location found for "${city}". Please check the spelling or try a different city.`
        )
    }

    return response.data
}

export const weatherQueryFn = async (geocodingQuery: UseQueryResult<GeocodingResponse, Error>) => {
    if (!geocodingQuery.data?.results?.[0]) {
        toast.error('City not found')
        throw new Error('City not found')
    }
    const { latitude, longitude } = geocodingQuery.data.results[0]
    const response = await axios.get<WeatherData>('https://api.open-meteo.com/v1/forecast', {
        params: {
            latitude: latitude,
            longitude: longitude,
            current:
                'temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,precipitation,rain,showers,precipitation_probability',
            daily: 'temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max',
            timezone: 'auto',
        },
    })
    return response.data
}

export const airQualityQueryFn = async (
    geocodingQuery: UseQueryResult<GeocodingResponse, Error>
) => {
    if (!geocodingQuery.data?.results?.[0]) {
        toast.error('City not found')
        throw new Error('City not found')
    }
    const { latitude, longitude } = geocodingQuery.data.results[0]
    const response = await axios.get<AirQualityData>(
        'https://air-quality-api.open-meteo.com/v1/air-quality',
        {
            params: {
                latitude: latitude,
                longitude: longitude,
                current: 'us_aqi,european_aqi,pm10,pm2_5,carbon_monoxide',
            },
        }
    )
    return response.data
}
