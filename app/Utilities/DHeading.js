import React from 'react'

export default function DHeading({ text }) {
    return (
        <h3 className=' colorPrimary my-5 border-b border-green-300'>
            {text || "heading missing!"}
        </h3>
    )
}
