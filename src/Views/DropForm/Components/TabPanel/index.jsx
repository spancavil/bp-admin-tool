import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';

export default function DropTabs() {
  const [value, setValue] = React.useState('one');
  const [form, setForm] = React.useState(
    {
      id: "",
      name: "",
      description: "",
      releaseStart: new Date(),
      releaseEnd: new Date(),
    }
  )
  const [validate, setValidate] = React.useState(
    {
      id: false,
      name: false,
      description: false,
      releaseStart: false,
      releaseEnd: false,
    }
  )

  const [files, setFiles] = React.useState(
    {
      mainImage: null,
      secondary: null
    }
  )

  const uploadMainRef = React.useRef(null)
  const uploadSecRef = React.useRef(null)

  const handleChangeStep = (event, newValue) => {
    setValue(newValue);
  };

  const handleForm = (property) => {
    setForm({ ...form, ...property })
    if (Object.values(property)[0] !== "") {
      setValidate({
        ...validate, [Object.keys(property)[0]]: false
      })
    } else {
      setValidate({
        ...validate, [Object.keys(property)[0]]: true
      })
    }
  }

  const onChangeMainImage = () => {
    console.log(uploadMainRef.current.files[0])
    setFiles({ ...files, mainImage: uploadMainRef.current.files[0] })
  }

  const onChangeSecImage = () => {
    console.log(uploadSecRef.current.files[0])
    setFiles({ ...files, secondary: uploadSecRef.current.files[0] })
  }

  console.log(validate);
  console.log(form);
  console.log(files);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChangeStep}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Set data" />
        <Tab value="two" label="Set images" />
        <Tab value="three" label="Confirm" />
      </Tabs>
      <Box sx={{ padding: '1rem' }}>

        {value === "one" && (
          <>
            <TextField
              id="id"
              label="id"
              variant="filled"
              value={form.id}
              error={validate.id}
              onChange={(e) => handleForm({ id: e.target.value })}
              helperText={validate.id && "Enter a valid value"}
            />
            <TextField
              id="Name"
              label="name"
              variant="filled"
              value={form.name}
              error={validate.name}
              onChange={(e) => handleForm({ name: e.target.value })}
              helperText={validate.name && "Enter a valid value"}
            />
            <TextField
              id="Description"
              label="Description"
              multiline
              rows={4}
              variant="filled"
              value={form.description}
              error={validate.description}
              onChange={(e) => handleForm({ description: e.target.value })}
              helperText={validate.description && "Enter a valid value"}
            />

            {/* you have to install @types/date-fns also */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Release Start"
                value={form.releaseStart}
                onChange={value => handleForm({ releaseStart: value })}
                renderInput={(params) => <TextField {...params} />}
              />
              <DateTimePicker
                label="Release End"
                value={form.releaseEnd}
                onChange={value => handleForm({ releaseEnd: value })}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </>
        )}

        {value === "two" && (
          <>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: '30px',
            }}>
              <input
                ref={uploadMainRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={onChangeMainImage}
              />
              <Button
                onClick={() => uploadMainRef.current && uploadMainRef.current.click()}
                variant="contained"
              >
                Upload main image
              </Button>
              {files.mainImage !== null && (
                <img
                  src={URL.createObjectURL(files.mainImage)}
                  alt="main"
                  style={{
                    height: '200px'
                  }}
                />
              )}
            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: '30px',
              marginTop: '20px',
            }}>
              <input
                ref={uploadSecRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={onChangeSecImage}
              />
              <Button
                onClick={() => uploadSecRef.current && uploadSecRef.current.click()}
                variant="contained"
              >
                Upload secondary image
              </Button>
              {files.secondary !== null && (
                <img
                  src={URL.createObjectURL(files.secondary)}
                  alt="main"
                  style={{
                    height: '200px'
                  }}
                />
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}