
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const HeaderSelectBox = () => {
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120, height: 40 }}>
                <InputLabel sx={{ height: 40,lineHeight:0.6 }} id="demo-simple-select-autowidth-label">currency</InputLabel>
                <Select
                    sx={{ height: 40 }}
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth

                    label="Currency"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Dollar</MenuItem>
                    <MenuItem value={21}>Euro</MenuItem>
                    <MenuItem value={22}>Lira</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default HeaderSelectBox