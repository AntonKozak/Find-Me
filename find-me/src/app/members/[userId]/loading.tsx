import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className='flex justify-center items-center vertical-center'>
      <Spinner color='secondary' label='Loading....' labelColor='secondary' />
    </div>
  );
}
