import React from 'react'
import Calibrated from '../Pages/Calibrated'
import { Flex } from '@chakra-ui/react'
import Manula from '../Pages/Manula'
import Warrenty from '../Pages/Warrenty'
const Last = () => {
  return (
      <Flex gap={'20px'} marginTop={'20px'} marginLeft={'10px'} marginBottom={'50px'}>
          <Calibrated />
          <Manula />
          <Warrenty/>
      </Flex>
  )
}

export default Last