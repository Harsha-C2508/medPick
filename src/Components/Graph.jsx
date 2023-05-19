import { Flex } from '@chakra-ui/react'
import React from 'react'
import Departments from '../Pages/Departments'
import BarChart from '../Pages/BarChart'

const Graph = () => {
  return (
      <Flex gap={'20px'}>
          <Departments />
          <BarChart/>
    </Flex>
  )
}

export default Graph