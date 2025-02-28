import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Embrace() {
  return (
    <>
      <div className="bg-black text-white text-center pt-10 pb-20">
        <h1 className="text-[#0FF1F6]">GET STARTED</h1>
        <h1 className="text-3xl font-bold">Embrace the new era of outbound.</h1>
        <p className="w-96 mx-auto text-[14px] mt-3">
          Wizia lets you train, activate, and optimize aiDRs. Take your outbound
          to new levels of performance and efficiency.
        </p>
        <div className='flex justify-center mt-4'>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{
                marginTop: '10px',
                backgroundColor: '#0FF1F6',
                color: 'black',
                borderRadius: '50px',
                padding: '10px',
              }}
              endIcon={<ArrowOutwardIcon />}
            >
              Sign Up for the Beta
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}

export default Embrace;