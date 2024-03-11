'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React from 'react'

const NewFamilyMember = () => {
    return (
        <>
            <div>
                <div className="p-5 text-xl font-bold">
                    New Family Member
                </div>
                <div className='max-w-sm'>
                    <TextField.Root>
                        <TextField.Input className='my-2' size="3" placeholder='Church ID' />
                    </TextField.Root>
                    <TextField.Root className='space-y-3'>
                        <TextField.Input className='my-2' size="3" placeholder='Last Name' />
                    </TextField.Root>
                    <TextField.Root className='space-y-3'>
                        <TextField.Input className='my-2' size="3" placeholder='First Name' />
                    </TextField.Root>
                    {/* <TextArea className='space-y-3' placeholder='Description' /> */}
                    <SimpleMDE className='space-y-3' placeholder='Description' />
                </div>
                <div className='py-3'>
                    <Button>Submit New Family Member</Button>
                </div>
            </div>
        </>
    )
}

export default NewFamilyMember
