'use client';

import React from 'react'
import {useFormStatus} from 'react-dom';

export default function AddCommentBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      disable={pending}
      type="submit"
      className="bg-black text-white p-1 rounded"
    >
      {pending ? "Adding" : "Add"}
    </button>
  );
}
