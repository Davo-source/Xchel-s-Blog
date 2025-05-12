import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom"


function HeroSection() {
 let navigate = useNavigate();
 const handleClick = () => {
  navigate(`/post/64bd662884090d2bc3bc9cfe`)
 }; 
  return (
   <Box sx={{
    minHeight: '80vh',
    mt: 6,
    display: 'flex',
    flexDirection: 'column'
   }}>
    <Typography variant="h6"
    sx={{
     color: 'text.secondary',
     lineHeight: 1.6,
     fontWeight: "lighter"
   }}>Online Guides:</Typography> 
    <Box sx={{ display: 'flex', gap: 2, ml: 10}}>
     <Button color="secondary">Android Install</Button>
     <Button color="secondary">Swift Install</Button>
    </Box>
    <Box
      sx={{
       borderTop: '1px solid rgb(185, 185, 185)',
       display: 'flex',
       flexDirection: { xs: 'column', md: 'row' },
       alignItems: 'center',
       justifyContent: 'center',
       minHeight: '60vh',
       gap: 4
      }}>
     <Box
      sx={{
         width: '100%',
         textAlign: 'center',
         flex: { md: '0 0 50%' },
         mb: { xs: 4, md: 0 },
        }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Hi, I'm Xchel 👋
      </Typography>

      <Typography variant="h6" sx={{ mb: 4, color: 'text.primary', textAlign: 'center' }}>
        I want to contribute in helping others who are getting into the mobile developing world, let it be{' '}
       <Box component="span" sx={{ color: 'green', fontStyle: 'italic' }}>
        Android
       </Box>{' '} or iOS{' '}(
       <Box component="span" sx={{ color: 'red', fontStyle: 'italic' }}>
        Swift
       </Box>), by sharing practical and straight to the point articules. <br></br>Join me on this great joruney
       we are about to embark.
      </Typography>
      <Button variant="text" onClick={()=> handleClick()}>Get to know me better</Button>
     </Box>

     <Box
       sx={{
         display: 'flex',
         flex: { md: '0 0 40%' },
         justifyContent: 'center',
        }}>
      <Box
        component="img"
        src="/android&ios.png"
        alt="Dev Ilustration"
        sx={{
          maxWidth: '100%',
          height: 'auto'
         }}/>
     </Box>
    </Box>
   </Box>
  );
}

export default HeroSection;
