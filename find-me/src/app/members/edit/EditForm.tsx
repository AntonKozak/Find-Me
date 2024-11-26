'use client';

import { updateMemberProfile } from '@/app/actions/userActions';
import {
  MemberEditSchema,
  memberEditSchema,
} from '@/lib/schemas/member.EditSchema';
import { handleFormServerErrors } from '@/lib/util';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@nextui-org/react';
import { Member } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

type Props = {
  member: Member;
};

export default function EditForm({ member }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { isValid, isDirty, isSubmitting, errors },
  } = useForm<MemberEditSchema>({
    resolver: zodResolver(memberEditSchema),
    mode: 'onTouched',
  });

  useEffect(() => {
    if (member) {
      reset({
        name: member.name,
        city: member.city,
        country: member.country,
        description: member.description || '',
      });
    }
  }, [member, reset]);

  const onSubmit = async (data: MemberEditSchema) => {
    const nameUpdate = member.name !== data.name;
    const result = await updateMemberProfile(data, nameUpdate);

    if (result.status === 'success') {
      toast.success('Member updated successfully');
      router.refresh();
      reset({ ...data });
    } else {
      handleFormServerErrors(result, setError);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
      <Input
        label='name'
        variant='bordered'
        {...register('name')}
        defaultValue={member.name}
        isInvalid={!!errors.name}
        errorMessage={errors.name?.message}
      />

      <Input
        label='City'
        variant='bordered'
        {...register('city')}
        defaultValue={member.city}
        isInvalid={!!errors.city}
        errorMessage={errors.city?.message}
      />
      <Input
        label='Country'
        variant='bordered'
        {...register('country')}
        defaultValue={member.country}
        isInvalid={!!errors.country}
        errorMessage={errors.country?.message}
      />
      <Textarea
        label='Description'
        variant='bordered'
        {...register('description')}
        defaultValue={member.description || ''}
        isInvalid={!!errors.description}
        errorMessage={errors.description?.message}
      />
      {errors.root?.serverError && (
        <p className='text-danger text-sm'>{errors.root.serverError.message}</p>
      )}
      <Button
        type='submit'
        className='flex self-end'
        variant='solid'
        isDisabled={!isValid || !isDirty}
        isLoading={isSubmitting}
        color='secondary'
      >
        Submit
      </Button>
    </form>
  );
}
