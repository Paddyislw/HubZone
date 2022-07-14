import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart, selectTotal } from '../../Features/CartSlice'
import { removeProduct } from '../../Features/CartSlice'

export default function Drawers() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const btnRef = React.useRef()
    const data = useSelector(selectCart)
    const total = useSelector(selectTotal)
    const deleteHandler = (e) => {
        dispatch(removeProduct(e.target.value))
    }
    return (
        <>
            <Button ref={btnRef} colorScheme='red' onClick={onOpen} variant='ghost' >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'sm'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader><p className='text-2xl border-black pb-4 border-b-2 text-center text-red-600'>Your Cart</p></DrawerHeader>

                    <DrawerBody>
                        {data.length === 0 ? <p className='text-lg text-center'>Your cart is empty </p> :
                            <div className='flex flex-col py-1 space-y-5'>
                                {data.map((e) => {
                                    return (
                                        <div className='flex items-center space-x-4 justify-between w-full '>
                                            <div className='flex items-center space-x-4'>
                                                <img src={e.image01} className='w-12' />
                                                <p className='font-bold'>{e.title}</p>
                                            </div>
                                            <div className='flex items-center space-x-4'>
                                                <p>x {e.quantity}</p>
                                                <button className='border-[1px] border-red-100 text-red-600 bg-red-100 rounded px-3 py-[3px] hover:text-white hover:bg-red-400 hover:border-red-400 ' onClick={deleteHandler} value={e.id}>Delete</button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}
                    </DrawerBody>

                    <DrawerFooter>
                        <div className='flex justify-between items-center w-full'>
                            <p className='text-lg font-bold'>Subtotal: <span className='text-red-500 font-bold'>Rs {total}</span></p>
                            <div>
                                <Button variant='outline' mr={3} onClick={onClose}>
                                    Cancel
                                </Button>
                                <button className='border-[1px] border-red-500 text-white bg-red-500 rounded px-6 py-[5px] hover:text-red-600 hover:bg-red-200 hover:border-red-200 ' >Chekout</button>
                            </div>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
