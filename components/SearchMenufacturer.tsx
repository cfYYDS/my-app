"use client"
import { Combobox,Transition, } from '@headlessui/react'
import { SearchMenufacturerProps } from '@/types'
import React,{Fragment} from 'react'
import Image from 'next/image'
import { manufacturers } from '@/constants'

const SearchMenufacturer = ({manufacturer,setManufacturer}:SearchMenufacturerProps) => {
    const [query,setQuery] = React.useState('')
    const filterManufacturers =  query===""?manufacturers
    :manufacturers.filter(
        manufacturer => 
        manufacturer.toLowerCase().replace(/\s+/g,"")
        .includes(query.toLowerCase().replace(/\s+/g,""))
    )
    return (
    <div className="search-manufacturer">
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className="relative w-full">
                <Combobox.Button className='absolute top-[14px]'>
                    <Image alt='Car Logo' className='ml-4' src='/car-logo.svg' width='20' height='20' />
                </Combobox.Button>
               
                <Combobox.Input 
                displayValue={(manufacturer:string)=>manufacturer}
                placeholder='Volksawgen'
                className='search-manufacturer__input'
                onChange={(e)=>setQuery(e.target.value)}
                />
                 <Transition as={Fragment} leave="transition ease-in duration-100"
                leaveFrom="opcacity-100"
                leaveTo="opacity-0"
                afterLeave = {()=>setQuery('')}
                >
                    <Combobox.Options>
                        {filterManufacturers.length===0
                        &&query!==""
                        ?(
                            <Combobox.Option
                            value={query}
                            className='search-manufacturer__option'
                            >
                                Create "{query}"
                            </Combobox.Option>
                        ):(
                            filterManufacturers.map(item=>(
                                <Combobox.Option
                                key={item}
                                className={({active})=>`
                                relative search-manufacturer__option ${active?'bg-primary-blue text-white':'text-gray-900'}`}
                                value={item}
                                >
                                    {({selected,active})=>(
                                        <>
                                        <span className={`block truncate ${
                                            selected?'font-medium':'font-normal'
                                        }`}>
                                            {item}
                                        </span>
                                        {selected?(
                                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active?'text-white':'text-teal-600'}`}>
                                            </span>
                                        ):null}
                                        </>
                                        )
                                        }
                        
                                </Combobox.Option>
                                ))
                        )}
                    </Combobox.Options>
                 </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchMenufacturer