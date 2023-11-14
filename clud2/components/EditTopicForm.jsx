import React from 'react'

export default function EditTopicForm() {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Topic title"
          className="border border-slate-500 p-3"
        />
        <textarea
          type="text"
          placeholder="Topci description"
          className="border border-slate-500 p-3 h-32"
        />
        <butto className="bg-green-800 text-white font-bold w-fit px-6 py-3 rounded-md">
          Update Topic
        </butto>
      </form>
    </div>
  )
}
