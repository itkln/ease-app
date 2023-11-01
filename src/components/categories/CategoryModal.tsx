import React from 'react'
import CategorySettings from './CategorySettings'

export default function CategoryModal(props: any) {
    return (
        <>
            <div className="categories-modal z-10 absolute w-full h-full left-0 top-0 bg-[#9A9A9A] bg-opacity-40 rounded-3xl">
                <div className="h-full flex justify-center items-center">
                    <CategorySettings onClose={props.onClose} addCategory={props.addCategory}/>
                </div>
            </div>
        </>
    )
}
