import React, { useEffect, useContext } from 'react';
import SliderFilter from '../components/SliderFilter';
import { SongsContext, SongFiltersContext } from './Songs';

const SliderFilters = (props) => {

    const songs = useContext(SongsContext);
    const {songFilters, setSongFilters} = useContext(SongFiltersContext);

    useEffect(() => {
        console.log(songFilters);
        if(songs.length && !songFilters.duration.length && !songFilters.popularity.length && !songFilters.tempo.length && !songFilters.loudness.length) {
            let filter = {...songFilters};
            if(!songFilters.duration.length) {
                filter['duration'] = [0, Math.max(...[...songs.map(song => song.duration)])];
            }
            if(!songFilters.popularity.length) {
                filter['popularity'] = [1, Math.max(...[...songs.map(song => song.popularity)])];
            }
            if(!songFilters.tempo.length) {
                filter['tempo'] = [0, Math.max(...[...songs.map(song => song.tempo)])];
            }
            if(!songFilters.loudness.length) {
                filter['loudness'] = [Math.min(...[...songs.map(song => song.loudness)]), Math.max(...[...songs.map(song => song.loudness)])];
            }
            setSongFilters(filter);
        }
    }, [songs]);

    return (
        <div>
            <SliderFilter
                category={'duration'}
                title={'Duration (s)'}
            />
            <SliderFilter
                category={'popularity'}
                title={'Popularity'}
            />
            <SliderFilter
                category={'tempo'}
                title={'Tempo'}
            />
            <SliderFilter
                category={'loudness'}
                title={'Loudness (dB)'}
            />
        </div>
    )
}

export default SliderFilters