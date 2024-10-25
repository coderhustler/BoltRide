'use client'
import React from 'react'
import { Box } from '@mui/material'

const Layout = ({Children}) => {
  return (
    <main className="h-screen">
      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr', md: '2fr 3fr' }}
        className="h-screen w-full"
        sx={{ m: 0, p: 0, border: 'none' }}
      >
        <Box
          gridColumn={{ xs: 'span 1', md: 'span 1' }}
          sx={{ p: 0, m: 0 }}
        >
          {Children}
        </Box>
        <Box
          gridColumn={{ xs: 'span 0', md: 'span 1' }}
          className="h-screen w-full"
          sx={{ display: { xs: 'none', md: 'block' }, p: 0, m: 0 }}
        >
          <img
            className="w-full h-full object-cover object-right-top"
            src={"https://olawebcdn.com/images/v1/bg_city.jpg" || "/car.jpg"}
            alt="Background"
            style={{ margin: 0, padding: 0, border: 'none' }}
          />
        </Box>
      </Box>
    </main>
  )
}

export default Layout

// import React, { Children } from 'react'
// import {Box,TextField,Button} from '@mui/material'

// const Layout = ({Children}) => {
//   return (
//     <main className="h-screen border-red-500 border-">
//       <Box container>
//         <Box item xs={12} md={8} lg={5}>
//           { Children}
//         </Box>
//         <Box item className="h-screen w-full " xs={0} md={4} lg={7}>
//           <img
//             className="w-full h-full object-cover object-right-top"
//             src={
//              "https://olawebcdn.com/images/v1/bg_city.jpg" || "/car.jpg"
//             }
//           ></img>
//         </Box>
//       </Box>
//     </main>
//   )
// }

// export default Layout

// 'use client'
// import React from 'react'
// import { Box } from '@mui/material'

// const Layout = ({Children}) => {
//   return (
//     <main className="h-screen border-red-500 border-">
//       <Box 
//         display="Box" 
//         BoxTemplateColumns={{ xs: '1fr', md: '2fr 3fr' }} 
//         className="h-screen w-full"
//       >
//         <Box BoxColumn={{ xs: 'span 1', md: 'span 1' }} sx={{ p: 2 }}>
//           {Children}
//         </Box>
//         <Box
//           BoxColumn={{ xs: 'span 0', md: 'span 1' }}
//           className="h-screen w-full"
//           sx={{ display: { xs: 'none', md: 'block' } }}
//         >
//           <img
//             className="w-full h-full object-cover object-right-top"
//             src={"https://olawebcdn.com/images/v1/bg_city.jpg" || "/car.jpg"}
//             alt="Background"
//           />
//         </Box>
//       </Box>
//     </main>
//   )
// }

// export default Layout
