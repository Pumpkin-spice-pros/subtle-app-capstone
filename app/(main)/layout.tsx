import Link from 'next/link'
import React from 'react'
// added .env and prisma to gitignore
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <nav>
     <Link href='/home'>Home</Link>
     <Link href='/habits'>Habits</Link>
     <Link href='/followers'>Followers</Link>
     <Link href='/calendar'>Calendar</Link>
     <Link href='/profile'>Profile</Link>
    </nav>
  )
}
