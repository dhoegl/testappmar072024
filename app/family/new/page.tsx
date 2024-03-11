'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import React from 'react'

interface FamilyForm {
    churchid: number;
    descriptor: string;
    last: string;
    first: string;
}

const NewFamilyMember = () => {
    const { register, control, handleSubmit } = useForm<FamilyForm>();
    console.log(register('descriptor'))


    return (
        <>
            <form
                onSubmit={handleSubmit((data) => console.log(data))}>
                <div className="p-5 text-xl font-bold">
                    New Family Member
                </div>
                <div className='max-w-sm'>
                    <TextField.Root>
                        <TextField.Input className='my-2' size="3" placeholder='Church ID' {...register('churchid')} />
                    </TextField.Root>
                    <TextField.Root className='space-y-3'>
                        <TextField.Input className='my-2' size="3" placeholder='Last Name' {...register('last')}/>
                    </TextField.Root>
                    <TextField.Root className='space-y-3'>
                        <TextField.Input className='my-2' size="3" placeholder='First Name' {...register('first')} />
                    </TextField.Root>
                    <Controller
                        name="descriptor"
                        control={control}
                        render={({ field }) => <SimpleMDE className='space-y-3' placeholder='Description' {...field} />}
                    />
                    {/* <TextArea className='space-y-3' placeholder='Description' /> */}
                    {/* <SimpleMDE className='space-y-3' placeholder='Description' /> */}
                </div>
                <div className='py-3'>
                    <Button>Submit New Family Member</Button>
                </div>
            </form>
        </>
    )
}

export default NewFamilyMember
