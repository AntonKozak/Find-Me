'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { FaRegSmile } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      HEllo{' '}
      <Button
        as={Link}
        href='/members'
        color='primary'
        variant='bordered'
        startContent={<FaRegSmile size={20} />}
      >
        Hello
      </Button>
    </div>
  );
}
