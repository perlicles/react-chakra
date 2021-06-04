import { Box, Text } from "@chakra-ui/layout";

const IconWithBadge = ( {icon, value}) => {

  const ico = {
    style: {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer'
    }
  }
  
  const badge = {
    style: {
      position: 'absolute',
      background: 'red',
      borderRadius: '5px',
      padding: '0.5em 0.5em 0.5em 0.27em',
      width: '0.9em',
      height: '0.9em',
      top: '-0.2em',
      right: '-0.2em'
    }
  };


  const badgeValue = (val) => {
    if (val !== '0') {
      return <Box style={badge.style}><Text style={badgeText.style}>{value}</Text></Box>
    }
    return 
  } 

  const badgeText = {
    style: {
      position: 'absolute',
      top: '0',
      padding: '0',
      color: 'white',
      fontSize: '0.6em',
      fontWeight: 'bold',
      margin: '0'
    }
  }
  
  return (
    <Box style={ico.style}>
      <span>{icon}</span>
      {badgeValue(value)}
    </Box>
  )
}
export default IconWithBadge;
