import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TextField, Button, Grid, Typography, Autocomplete } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import nftService from '../../../../Services/nft.service';

export default function DropTabs() {
  const [value, setValue] = React.useState('one');
  const [form, setForm] = React.useState(
    {
      id: "",
      name: "",
      description: "",
      nftProducts: [],
      releaseStart: new Date(),
      releaseEnd: new Date(),
    }
  )
  const [validate, setValidate] = React.useState(
    {
      id: false,
      name: false,
      nftProducts: [false, false, false, false, false],
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
  const [nftList, setNftList] = React.useState([])

  const [nft1, setNft1] = React.useState({ id: '', repName: '', price: '', limitAmount: 0, leftAmount: 0, inputValue: ''})
  const [nft2, setNft2] = React.useState({ id: '', repName: '', price: '', limitAmount: 0, leftAmount: 0, inputValue: '' })
  const [nft3, setNft3] = React.useState({ id: '', repName: '', price: '', limitAmount: 0, leftAmount: 0, inputValue: '' })
  const [nft4, setNft4] = React.useState({ id: '', repName: '', price: '', limitAmount: 0, leftAmount: 0, inputValue: '' })
  const [nft5, setNft5] = React.useState({ id: '', repName: '', price: '', limitAmount: 0, leftAmount: 0, inputValue: '' })

  const uploadMainRef = React.useRef(null)
  const uploadSecRef = React.useRef(null)

  React.useEffect(() => {

    const getList = async () => {

      try {
        const nftList = await nftService.getNft();
        const nftConcat = nftList.repIdListMap["1"].concat(nftList.repIdListMap["2"])
        const nftProcessed = nftConcat.map(nft => {
          return { label: `id: ${nft.id}, ${nft.name}`, data: { id: nft.id, name: nft.name } }
        })
        nftProcessed.push("");
        setNftList(nftProcessed);

      } catch (error) {
        alert(`Error at getting Nft List:`, error.message);
      }
    }

    getList();

  }, [])

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

  /* console.log(validate);
  console.log(form);
  console.log(files); */
  console.log(nft1);
  console.log(nftList)

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
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <TextField
                id="id"
                label="id"
                variant="filled"
                value={form.id}
                error={validate.id}
                onChange={(e) => handleForm({ id: e.target.value })}
                helperText={validate.id && "Enter a valid value"}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="Name"
                label="name"
                variant="filled"
                value={form.name}
                error={validate.name}
                onChange={(e) => handleForm({ name: e.target.value })}
                helperText={validate.name && "Enter a valid value"}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                fullWidth
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
            </Grid>

            <Grid item xs={12}>
              <Typography>
                Select NFT's for drops
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="nft1"
                value={nft1.repName}
                onChange={(event, newValue) => {
                  setNft1({...nft1, repName: newValue});
                }}
                inputValue={nft1.inputValue}
                onInputChange={(event, newInputValue) => {
                  setNft1({...nft1, inputValue: newInputValue});
                }}
                options={nftList}
                renderInput={(params) => <TextField {...params} label="nft1" />}
              />
              {nft1.inputValue &&
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: "100%"
                }}>
                  <TextField
                    fullWidth
                    id="nft1-price"
                    label="Price"
                    variant="filled"
                    value={nft1.price}
                    error={validate.nftProducts[0]}
                    onChange={(e) => setNft1({ ...nft1, price: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    id="nft1-left"
                    label="Left Amount"
                    variant="filled"
                    value={nft1.leftAmount}
                    error={validate.nftProducts[0]}
                    onChange={(e) => setNft1({ ...nft1, leftAmount: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    id="nft1-limit"
                    label="Limit Amount"
                    variant="filled"
                    value={nft1.limitAmount}
                    error={validate.nftProducts[0]}
                    onChange={(e) => setNft1({ ...nft1, limitAmount: e.target.value })}
                  />
                </Box>
              }
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="nft2"
                onChange={(event, newValue) => {
                  setNft2({...nft2, repName: newValue});
                }}
                inputValue={nft2.inputValue}
                onInputChange={(event, newInputValue) => {
                  setNft2({...nft2, inputValue: newInputValue});
                }}
                options={nftList}
                renderInput={(params) => <TextField {...params} label="nft2" />}
              />
              {nft2.inputValue &&
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <TextField
                    fullWidth
                    id="nft2-price"
                    label="Price"
                    variant="filled"
                    value={nft2.price}
                    error={validate.nftProducts[1]}
                    onChange={(e) => setNft2({ ...nft2, price: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    id="nft2-left"
                    label="Left Amount"
                    variant="filled"
                    value={nft2.leftAmount}
                    error={validate.nftProducts[1]}
                    onChange={(e) => setNft2({ ...nft2, leftAmount: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    id="nft2-limit"
                    label="Limit Amount"
                    variant="filled"
                    value={nft2.limitAmount}
                    error={validate.nftProducts[1]}
                    onChange={(e) => setNft2({ ...nft2, limitAmount: e.target.value })}
                  />
                </Box>
              }
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="nft3"
                onChange={(event, newValue) => {
                  setNft3({...nft3, repName: newValue});
                }}
                inputValue={nft3.inputValue}
                onInputChange={(event, newInputValue) => {
                  setNft3({...nft3, inputValue: newInputValue});
                }}
                options={nftList}
                renderInput={(params) => <TextField {...params} label="nft3" />}
              />
              {nft3.inputValue &&
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <TextField
                    fullWidth
                    id="nft3-price"
                    label="Price"
                    variant="filled"
                    value={nft3.price}
                    error={validate.nftProducts[2]}
                    onChange={(e) => setNft3({ ...nft3, price: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    id="nft3-left"
                    label="Left Amount"
                    variant="filled"
                    value={nft3.leftAmount}
                    error={validate.nftProducts[2]}
                    onChange={(e) => setNft3({ ...nft3, leftAmount: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    id="nft2-limit"
                    label="Limit Amount"
                    variant="filled"
                    value={nft3.limitAmount}
                    error={validate.nftProducts[2]}
                    onChange={(e) => setNft3({ ...nft3, limitAmount: e.target.value })}
                  />
                </Box>
              }
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="nft4"
                onChange={(event, newValue) => {
                  setNft4({...nft4, repName: newValue});
                }}
                inputValue={nft4.inputValue}
                onInputChange={(event, newInputValue) => {
                  setNft4({...nft4, inputValue: newInputValue});
                }}
                options={nftList}
                renderInput={(params) => <TextField {...params} label="nft4" />}
              />
              {nft4.inputValue &&
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <TextField
                    fullWidth
                    id="nft4-price"
                    label="Price"
                    variant="filled"
                    value={nft4.price}
                    error={validate.nftProducts[3]}
                    onChange={(e) => setNft4({ ...nft4, price: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    id="nft4-left"
                    label="Left Amount"
                    variant="filled"
                    value={nft4.leftAmount}
                    error={validate.nftProducts[3]}
                    onChange={(e) => setNft4({ ...nft4, leftAmount: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    id="nft4-limit"
                    label="Limit Amount"
                    variant="filled"
                    value={nft4.limitAmount}
                    error={validate.nftProducts[3]}
                    onChange={(e) => setNft4({ ...nft4, limitAmount: e.target.value })}
                  />
                </Box>
              }
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="nft5"
                onChange={(event, newValue) => {
                  setNft5({...nft5, repName: newValue});
                }}
                inputValue={nft5.inputValue}
                onInputChange={(event, newInputValue) => {
                  setNft5({...nft5, inputValue: newInputValue});
                }}
                options={nftList}
                renderInput={(params) => <TextField {...params} label="nft5" />}
              />
              {nft5.inputValue &&
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <TextField
                    fullWidth
                    id="nft5-price"
                    label="Price"
                    variant="filled"
                    value={nft5.price}
                    error={validate.nftProducts[4]}
                    onChange={(e) => setNft5({ ...nft5, price: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    id="nft5-left"
                    label="Left Amount"
                    variant="filled"
                    value={nft5.leftAmount}
                    error={validate.nftProducts[4]}
                    onChange={(e) => setNft5({ ...nft5, leftAmount: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    id="nft5-limit"
                    label="Limit Amount"
                    variant="filled"
                    value={nft5.limitAmount}
                    error={validate.nftProducts[4]}
                    onChange={(e) => setNft5({ ...nft5, limitAmount: e.target.value })}
                  />
                </Box>
              }
            </Grid>

            {/* you have to install @types/date-fns also */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Grid item xs={6}>
                <DateTimePicker
                  label="Release Start"
                  value={form.releaseStart}
                  onChange={value => handleForm({ releaseStart: value })}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={6}>
                <DateTimePicker
                  label="Release End"
                  value={form.releaseEnd}
                  onChange={value => handleForm({ releaseEnd: value })}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
            </LocalizationProvider>
          </Grid>
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

        {value === "three" && (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
          }}>
            <Typography>
              Please review all data and confirm.
            </Typography>
            <Button color="primary" variant="contained">
              Confirm
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}