import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

export default function TopicList() {
  return (
    <>
      <div className="bg-slate-100 border borderlslate-300 p-4 my-3 flex justify-between items-start">
        <div>
          <h2 className="text-2wl font-bold text-blue-900">Topic Title</h2>
          <div>Topic description</div>
        </div>

        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  )
}
