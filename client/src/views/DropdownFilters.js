import React from 'react';
import DropdownFilter from '../components/DropdownFilter';
import './DropdownFilter.css';

const DropdownFilters = (props) => {

    return (
        <div>
            <DropdownFilter
                category={'artists'}
                title={'Artists'}
            />
            <DropdownFilter
                category={'album'}
                title={'Album'}
            />
            <DropdownFilter
                category={'year'}
                title={'Year'}
            />
        </div>
    )
}

export default DropdownFilters
