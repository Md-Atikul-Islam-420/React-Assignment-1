import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Hero() {
  return (
    <>
      <div className="bg-[url('./component/img.png')] w-full h-auto px-15 py-20 text-center md:text-left bg-black">
        <h3 className="text-[#0FF1F6] text-2xl text-center md:text-left">
          AI SDRs (aiDRs)
        </h3>
        <h1 className="text-white text-6xl md:pr-[500px] text-center md:text-left">
          More leads, less people.
        </h1>
        <p className="text-white text-lg md:pr-[500px] mt-2 text-center md:text-left mb-5">
          Train an aiDR on your ICP and messaging matrix. Activate it on a
          patch. It will send personalized sequences to every target contact.
        </p>
        <div className="justify-center md:justify-start flex mx-auto">
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

export default Hero;