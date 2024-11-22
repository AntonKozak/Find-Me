import { Button, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import Link from 'next/link';
import { GiMatchTip } from 'react-icons/gi';
import NavLink from './NAvLink';

export default function TopNav() {
  return (
    <Navbar
      maxWidth='xl'
      className='bg-gradient-to-r from-pink-400 to-blue-500'
      classNames={{
        item: [
          'text-xl',
          'text-white',
          'uppercase',
          'data-[active=true]:text-white',
        ],
      }}
    >
      <NavbarBrand as={Link} href={'/'}>
        <GiMatchTip size={40} />
        <div className='font-bold text-3xl flex'>
          <span>Find</span>
          <span className='text-white'>Me</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavLink label='Matches' href='/members' />
        <NavLink label='List' href='/lists' />
        <NavLink label='Messages' href='/messages' />
      </NavbarContent>
      <NavbarContent justify='end'>
        <Button
          as={Link}
          href='/login'
          variant='bordered'
          className='text-white'
        >
          Login
        </Button>
        <Button
          as={Link}
          href='/register'
          variant='bordered'
          className='text-white'
        >
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
