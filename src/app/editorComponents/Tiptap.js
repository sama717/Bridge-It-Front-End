'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './css/editor.css'
const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })

  // Prevent rendering before editor is ready
  if (!editor) return <p>Loading Editor...</p>

  return (
    <div className="editor-container">
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap

