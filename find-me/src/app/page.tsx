import { auth } from '@/auth';
import { Button } from '@nextui-org/button';
import { FaRegSmile } from 'react-icons/fa';

export default async function Home() {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session?.user)}
      HEllo{' '}
      <Button
        color='primary'
        variant='bordered'
        startContent={<FaRegSmile size={20} />}
      >
        Hello
      </Button>
    </div>
  );
}
