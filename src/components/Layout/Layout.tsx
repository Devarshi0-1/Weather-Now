import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { airQualityQueryFn, getCodingQueryFn, weatherQueryFn } from '@/helpers/QueryFunctions'
import { useQuery } from '@tanstack/react-query'
import { FormEvent, useRef } from 'react'
import AirQuality from './AirQuality'
import Forecast from './Forecast'
import Weather from './Weather'

const Layout = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    // First query to get coordinates from city name
    const geocodingQuery = useQuery({
        queryKey: ['geocoding', inputRef.current?.value],
        queryFn: () => getCodingQueryFn(inputRef.current?.value! || 'London'),
        enabled: true,
        retry: false,
    })

    // Weather query
    const weatherQuery = useQuery({
        queryKey: [
            'weather',
            geocodingQuery.data?.results?.[0]?.latitude,
            geocodingQuery.data?.results?.[0]?.longitude,
        ],
        queryFn: () => weatherQueryFn(geocodingQuery),
        enabled: !!geocodingQuery.data?.results?.[0],
        retry: false,
    })

    // Air quality query
    const airQualityQuery = useQuery({
        queryKey: [
            'airQuality',
            geocodingQuery.data?.results?.[0]?.latitude,
            geocodingQuery.data?.results?.[0]?.longitude,
        ],
        queryFn: () => airQualityQueryFn(geocodingQuery),
        enabled: !!geocodingQuery.data?.results?.[0],
        retry: false,
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!inputRef.current?.value) return
        geocodingQuery.refetch()
    }

    const isLoading =
        geocodingQuery.isLoading || weatherQuery.isLoading || airQualityQuery.isLoading

    return (
        <div className='flex h-screen items-center justify-center p-4'>
            <Card className='h-full w-full overflow-auto shadow-xl'>
                <CardHeader>
                    <CardTitle className='text-center text-2xl font-bold'>
                        Weather & Air Quality
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-center'>
                        <Input
                            ref={inputRef}
                            className='text-center'
                            type='text'
                            placeholder='Enter city name'
                            required
                        />

                        {weatherQuery.data &&
                            geocodingQuery.data?.results &&
                            airQualityQuery.data && (
                                <div className='space-y-6'>
                                    <p className='text-3xl font-semibold md:text-xl'>{`${geocodingQuery.data.results[0].name}, ${geocodingQuery.data.results[0].country}`}</p>
                                    <div className='flex gap-4 md:flex-col'>
                                        <div className='flex flex-1 flex-col items-center justify-center gap-4'>
                                            <Weather weatherQueryData={weatherQuery.data} />
                                            <AirQuality
                                                airQualityQueryData={airQualityQuery.data}
                                            />
                                        </div>
                                        <div className='flex-[2]'>
                                            <Forecast weatherQueryData={weatherQuery.data} />
                                        </div>
                                    </div>
                                </div>
                            )}

                        <Button type='submit' className='w-full' disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Get Weather'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Layout
