import React from 'react'
import { addProduct } from '../../Features/CartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDisclosure, Alert, AlertTitle, AlertDescription, AlertIcon, Box, CloseButton, Button } from '@chakra-ui/react'

export default function Product(props) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const dispatch = useDispatch()
  const addHandler = (e) => {
    console.log(e.target.value)
    dispatch(addProduct(e.target.value))
    onToggle()
  }
  const url = `/product/${props.id}`
  return (

    <div className=''>
      
      
      
      <div className='flex flex-col items-center border-[1px] border-gray-200 rounded w-[300px]  mb-8 relative'>
      {isOpen ?
        <Alert status='success' position='absolute' top='-2' zIndex={100} left='0' alignItems='center' textAlign='center' justifyContent='center' >
          <AlertIcon />
          <p className='text-sm'>
          Item Added</p>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert> : ''
      }
        <Link to={url}>
          <img src={props.img} className='w-28 py-4 hover:scale-125 transition-all mx-auto' />
          <p className='font-semibold pb-3'>{props.name}</p>
        </Link>
        <div className='flex justify-between w-60 py-6'>
          <p className='text-lg font-bold text-red-600'>Rs {props.price}</p>
          <button className='border-[1px] border-red-500 text-white bg-red-500 rounded px-6 py-[3px] hover:text-red-600 hover:bg-red-200 hover:border-red-200' value={props.id} onClick={addHandler}>Add to Cart</button>

        </div>
      </div>
    </div>

  )
}
