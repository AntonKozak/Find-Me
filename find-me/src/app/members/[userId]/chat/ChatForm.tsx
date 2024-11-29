'use client';

import { useForm } from 'react-hook-form';
import { messageSchema, MessageSchema } from '@/lib/schemas/messageSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@nextui-org/react';
import { HiPaperAirplane } from 'react-icons/hi2';
import { useParams, useRouter } from 'next/navigation';
import { createMessage } from '@/app/actions/messageActions';
import { handleFormServerErrors } from '@/lib/util';
import { useEffect } from 'react';

export default function ChatForm() {
  const router = useRouter();
  const params = useParams<{ userId: string }>();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    setFocus,
    formState: { isSubmitting, isValid, errors },
  } = useForm<MessageSchema>({
    resolver: zodResolver(messageSchema),
  });

  const onSubmit = async (data: MessageSchema) => {
    const result = await createMessage(params.userId, data);
    if (result.status === 'error') {
      handleFormServerErrors(result, setError);
    } else {
      reset();
      router.refresh();
      setTimeout(() => (setFocus('text'), 500));
    }
  };

  useEffect(() => {
    setFocus('text');
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full '>
      <div className='flex items-center gap-2'>
        <Input
          fullWidth
          placeholder='Type a message'
          variant='faded'
          {...register('text')}
          isInvalid={!!errors.text}
          errorMessage={errors.text?.message}
        />
        <Button
          type='submit'
          isIconOnly
          color='secondary'
          radius='full'
          isLoading={isSubmitting}
          isDisabled={!isValid || isSubmitting}
        >
          <HiPaperAirplane size={18} />
        </Button>
      </div>
      <div className='flex flex-col'>
        {errors.root?.serverError && (
          <p className='text-danger text-sm'>
            {errors.root.serverError.message}
          </p>
        )}
      </div>
    </form>
  );
}