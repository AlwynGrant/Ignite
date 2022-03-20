import { useState, FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type Props = {
  category: string;
  setCategory: (val: string) => void;
};

export const SelectUI:FC<Props> = ({
    category,
    setCategory
}) => {
  const categories = [
        "Art",
        "Collectables",
        "Consumables",
        "Digital Media",
        "Games",
        "Health-care",
        "Pet Products",
        "Toys",
        "Technology",
        "Other"
    ]

  return (
    <div className='select-MUI'>
      <FormControl variant="filled" sx={{ m: 1, minWidth: "86%" }}>
        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
              categories.map((c:string, i) => {
                   return <MenuItem key={i} value={c}>{c}</MenuItem>
              })
          }
        </Select>
      </FormControl>
    </div>
  );
}
