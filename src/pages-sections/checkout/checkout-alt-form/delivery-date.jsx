import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";
import Heading from "./heading";

// ==============================================================
export default function DeliveryDate({
  errors,
  handleChange,
  touched,
  values
}) {
  const [dateList, setDateList] = useState([]);
  useEffect(() => {
    let list = [];
    let today = new Date();
    let dateCount = today.getDate();
    list.push({
      label: format(today, "dd MMMM"),
      value: today.toISOString()
    });

    for (let i = 1; i < 10; i++) {
      today.setDate(dateCount + i);
      list.push({
        label: format(today, "dd MMMM"),
        value: today.toISOString()
      });
    }

    setDateList(list);
  }, []);
  const timeList = [{
    label: "9AM - 11AM",
    value: "9AM - 11AM"
  }, {
    label: "11AM - 1PM",
    value: "11AM - 1PM"
  }, {
    label: "3PM - 5PM",
    value: "3PM - 5PM"
  }, {
    label: "5PM - 7PM",
    value: "5PM - 7PM"
  }];
  return <Card sx={{
    p: 3,
    mb: 3
  }}>
      <Heading number={1} title="Delivery Date and Time" />

      <Box mb={3.5}>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <TextField select fullWidth type="text" name="date" label="Delivery Date" value={values.date} onChange={e => handleChange(e)} helperText={touched.date && errors.date} error={Boolean(touched.date && errors.date)}>
              {dateList.map(item => <MenuItem value={item.value} key={item.label}>
                  {item.label}
                </MenuItem>)}
            </TextField>
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField select fullWidth type="text" name="time" value={values.time} label="Delivery Time" onChange={handleChange} helperText={touched.time && errors.time} error={Boolean(touched.time && errors.time)}>
              {timeList.map(item => <MenuItem value={item.value} key={item.value}>
                  {item.value}
                </MenuItem>)}
            </TextField>
          </Grid>
        </Grid>
      </Box>
    </Card>;
}