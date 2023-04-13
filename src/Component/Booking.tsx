import './booking.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function Booking() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  return (
    <div>
      <div className="price-and-book-btn-cnt">
        <button
          className="price-and-book-btn"
          onClick={() => setShowBookingForm(true)}
        >
          See Price And Book
        </button>
      </div>
      {/* {showBookingForm ? <BookingForm /> : ''} */}
      <BookingForm showBookingForm={showBookingForm} />
    </div>
  );
}

const styles = {
  '@media (max-width: 290px)': {
    flexDirection: 'column',
  },
};

function BookingForm(props: any) {
  let { showBookingForm } = props;
  return (
    <form
      action="#"
      className="booking-form"
      style={{
        opacity: showBookingForm ? 1 : 0,
      }}
    >
      <div
        className="flex "
        style={{
          marginBottom: '1.5rem',
        }}
      >
        <FormControl
          fullWidth
          sx={{
            // input
            '& .MuiInputBase-input': {
              padding: '0.75rem 1.25rem',
            },
            '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
              lineHeight: '1rem',
              fontSize: '0.90rem',
              color: '#9FA6B3',
            },

            // LABEL
            flexBasis: '48%',
            '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
              background: 'white',
              width: '160px',
              color: '#1976d2',
            },
            '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
              background: 'white',
              width: '160px',
            },

            // fieldset border
            '& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                // boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)',
              },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                // borderRadius: '0.35rem',
                // borderColor: '#E5E7EB',
              },
            },
          }}
        >
          <InputLabel>What's the occasion?</InputLabel>
          <Select
            name="occassion"
            style={{
              width: '100%',
              // flexBasis: 48%
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="Choose One"
            label="Occassion"
            // onChange={handleChange}
          >
            <MenuItem value="Campus">Campus</MenuItem>
            <MenuItem value="Video Shoutout">Video Shoutout</MenuItem>
          </Select>
        </FormControl>
        <div
          style={{
            flexBasis: '48%',
            width: '100%',
          }}
          className="mt-1rem"
        >
          <LocalizationProvider
            sx={{
              '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                padding: '0.75rem 1.25rem',
              },
            }}
            dateAdapter={AdapterDayjs}
          >
            <DatePicker label="Event Date" />
          </LocalizationProvider>
        </div>
      </div>

      <div className="flex" style={{ marginBottom: '1.5rem' }}>
        <TextField
          sx={{
            width: '100%',
            flexBasis: '48%',
          }}
          // onChange={handleChange}
          id="outlined-basic"
          name="venue"
          // value={venue}
          label="Venue"
          placeholder="Enter Your Venue Address"
        />

        <TextField
          sx={{
            width: '100%',
            // flexBasis: '48%',
          }}
          type="number"
          // onChange={handleChange}
          id="outlined-basic"
          name="budget"
          // value={venue}
          label="Budget"
          placeholder="Your Budget"
        />
      </div>

      <div className="flex" style={{ marginBottom: '1.5rem' }}>
        <TextField
          sx={{
            width: '100%',
            flexBasis: '48%',
          }}
          // onChange={handleChange}
          id="outlined-basic"
          name="people"
          // value={venue}
          label="How many people will attend?"
          placeholder="Enter In Numbers"
        />
      </div>

      <div
        className="flex"
        style={{ marginTop: '2.25rem', marginBottom: '1.5rem' }}
      >
        <TextField
          sx={{
            width: '100%',
            flexBasis: '48%',
          }}
          // onChange={handleChange}
          id="outlined-basic"
          name="fullname"
          // value={venue}
          label="Full Name"
          placeholder="Enter Your Full Name"
        />

        <div>
          <TextField
            sx={{
              width: '100%',
              flexBasis: '48%',
            }}
            type="email"
            // onChange={handleChange}
            id="outlined-basic"
            name="email"
            // value={venue}
            label="Email (No Spam)"
            placeholder="Your Email"
          />
        </div>
      </div>

      <div className="flex" style={{ marginBottom: '1.5rem' }}>
        <div
          style={{
            flexBasis: '48%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <FormControl
            fullWidth
            sx={{
              // input
              '& .MuiInputBase-input': {
                padding: '0.75rem 1.25rem',
              },
              '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                lineHeight: '1rem',
                fontSize: '0.90rem',
                color: '#9FA6B3',
              },

              // LABEL
              flexBasis: '27%',
              '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                {
                  background: 'white',
                  width: '160px',
                  color: '#1976d2',
                },
              '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
                background: 'white',
                width: '160px',
              },

              // fieldset border
              '& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  // boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)',
                },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  // borderRadius: '0.35rem',
                  // borderColor: '#E5E7EB',
                },
              },
            }}
          >
            <Select
              name="code"
              style={{
                width: '100%',
                // flexBasis: 48%
              }}
              value="🇮🇳 +91"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // onChange={handleChange}
            >
              <MenuItem value="🇮🇳 +91">🇮🇳 +91</MenuItem>
            </Select>
          </FormControl>

          <TextField
            sx={{
              flexBasis: '65%',
            }}
            // onChange={handleChange}
            id="outlined-basic"
            name="number"
            type="number"
            // value={venue}
            label="Phone Number"
            placeholder="Enter Your Phone Number"
          />
        </div>

        <TextField
          sx={{
            width: '100%',
            flexBasis: '48%',
          }}
          type="text"
          // onChange={handleChange}
          id="outlined-basic"
          name="more"
          // value={venue}
          label="Tell us more (we would love to listen)"
          placeholder="Type more details if you want"
        />
      </div>

      <div className="flex ">
        <FormControl
          fullWidth
          sx={{
            // input
            '& .MuiInputBase-input': {
              padding: '0.75rem 1.25rem',
            },
            '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
              lineHeight: '1rem',
              fontSize: '0.90rem',
              color: '#9FA6B3',
            },

            // LABEL
            // flexBasis: '%',
            '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
              background: 'white',
              // width: '160px',
              color: '#1976d2',
            },
            '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
              background: 'white',
              // width: '160px',
            },

            // fieldset border
            '& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                // boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)',
              },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                // borderRadius: '0.35rem',
                // borderColor: '#E5E7EB',
              },
            },
          }}
        >
          <InputLabel>Send more options in my budget</InputLabel>
          <Select
            name="code"
            style={{
              width: '48%',
            }}
            label="Send more options in my budget"
            value="Yes"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // onChange={handleChange}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </div>
    </form>
  );
}
