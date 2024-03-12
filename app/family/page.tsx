import React from 'react'
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const Family = () => {
  return (
    <><div className="p-5 text-xl font-bold">
      Family Members
    </div>
      <div>
        <Button>
          <Link href="/family/new">New Family Member</Link>
        </Button>
      </div>
    </>
  )
}

export default Family
