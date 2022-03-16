import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function DropTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value)

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Set data" />
        <Tab value="two" label="Set images" />
        <Tab value="three" label="Item Three" />
      </Tabs>
      <Box sx={{padding: '1rem'}}>
        {value === "one" && <Typography> Inputs para completar los datos del drop </Typography> }
        {value === "two" && <Typography> Subir imágenes</Typography>}
      </Box>
    </Box>
  );
}