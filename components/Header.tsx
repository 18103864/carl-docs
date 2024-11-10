import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({ children, className } : HeaderProps) => {
  return (
    <div className={cn('header',className)}>
        <Link href='/' className='md:flex-1'>
          <div className="flex items-center">
            <Image 
              src='/assets/images/logo.png'
              alt='logo with name'
              width={50}
              height={32}
              className='hidden md:block'
            />
            <p className='ml-2'>CarlDocs</p>
          </div>
            <Image 
                src='/assets/icons/logo-icon.svg'
                alt='logo'
                width={32}
                height={32}
                className='mr-2 md:hidden'
            />
        </Link>
        {children}
    </div>
  )
}

export default Header