import React from 'react'

type Props = {
  children: React.ReactNode;
  className?: string;
}

const Page = (props: Props) => {
  return (
    <main className={`${props.className}`}></main>
  )
}

export default Page