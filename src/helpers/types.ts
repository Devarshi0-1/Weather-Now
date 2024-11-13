export interface WeatherData {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    current_units: {
        time: string
        interval: string
        temperature_2m: string
        relative_humidity_2m: string
        apparent_temperature: string
        wind_speed_10m: string
        wind_direction_10m: string
    }
    current: {
        time: string
        interval: number
        temperature_2m: number
        relative_humidity_2m: number
        apparent_temperature: number
        wind_speed_10m: number
        wind_direction_10m: number
        precipitation: number
        rain: number
        showers: number
        precipitation_probability: number
    }
    daily_units: {
        time: string
        temperature_2m_max: string
        temperature_2m_min: string
        precipitation_sum: string
        precipitation_probability_max: string
    }
    daily: {
        time: string[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
        precipitation_sum: number[]
        precipitation_probability_max: number[]
    }
}

export interface AirQualityData {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    current_units: {
        time: string
        interval: string
        us_aqi: string
        european_aqi: string
        pm10: string
        pm2_5: string
        carbon_monoxide: string
        nitrogen_dioxide: string
        sulphur_dioxide: string
        ozone: string
    }
    current: {
        time: string
        interval: number
        us_aqi: number
        european_aqi: number
        pm10: number
        pm2_5: number
        carbon_monoxide: number
    }
}

export interface GeocodingResponse {
    results: {
        id: number
        name: string
        latitude: number
        longitude: number
        elevation: number
        feature_code: string
        country_code: string
        admin1_id: number
        admin2_id: number
        timezone: string
        population: number
        country_id: number
        country: string
        admin1: string
        admin2: string
    }[]
    generationtime_ms: number
}
