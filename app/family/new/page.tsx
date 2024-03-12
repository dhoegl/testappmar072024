'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import React from "react"
import { useRouter } from 'next/navigation';

interface FamilyForm {
    churchid: number;
    address: string;
    last: string;
    first: string;
}

const NewFamilyMember = () => {
    const router = useRouter();
    const { register, control, handleSubmit } = useForm<FamilyForm>();



    return (
        <>
            <form
                onSubmit={handleSubmit( async (data) => {
                    await axios.post('api/contacts', data);
                    router.push('/family');
                })}>
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
                        name="address"
                        control={control}
                        render={({ field }) => <SimpleMDE className='space-y-3' placeholder='Street Address' {...field} />}
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
