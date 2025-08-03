"use client";  // Ensuring client-side rendering

import React, { useEffect, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { Link } from '@tiptap/extension-link';
import { Underline } from '@tiptap/extension-underline';
import { TextAlign } from '@tiptap/extension-text-align';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import { Underline as UnderlineIcon,  Link as LinkIcon, AlignLeft, AlignCenter, AlignRight, ListOrdered, List } from 'lucide-react'; 

interface EditorProps {
  onChange: (content: string) => void;
  initialContent?: string; // optional initial content
}

const LokkhoEditor = ({ onChange, initialContent = '' }: EditorProps) => {
  const [content, setContent] = useState<string>(initialContent);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        listItem: false,
      }), 

      Link.configure({
        openOnClick: false,
      }),

      Underline,

      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),

      BulletList,
      OrderedList,
      ListItem,
    ],
    content,
    onUpdate({ editor }) {
      setContent(editor.getHTML());
      onChange(editor.getHTML());
    },
  });


  useEffect(() => {
    if (editor && initialContent) {
      editor.commands.setContent(initialContent);
    }
  }, [editor, initialContent]);

  if (!editor) {
    return null; // or loader if you want
  }
  

  const alignLeft = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent page reload
    editor?.chain().focus().setTextAlign('left').run();
  };

  const alignCenter = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent page reload
    editor?.chain().focus().setTextAlign('center').run();
  };

  const alignRight = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent page reload
    editor?.chain().focus().setTextAlign('right').run();
  };

  const toggleBulletList = (e: React.MouseEvent) => {
    e.preventDefault();
    editor?.chain().focus().toggleBulletList().run();
  };

  const toggleOrderedList = (e: React.MouseEvent) => {
    e.preventDefault();
    editor?.chain().focus().toggleOrderedList().run();
  };


  return (
    <div className="editor-container p-4 border rounded-lg shadow-lg  relative">
      <div className="toolbar flex gap-2 mb-4 sticky top-8 z-10">
        
        <button type="button" onClick={alignLeft} title="Align Left" className="p-2 hover:bg-gray-200 rounded">
          <AlignLeft />
        </button>
        <button type="button" onClick={alignCenter} title="Align Center" className="p-2 hover:bg-gray-200 rounded">
          <AlignCenter />
        </button>
        <button type="button" onClick={alignRight} title="Align Right" className="p-2 hover:bg-gray-200 rounded">
          <AlignRight />
        </button>
        <button type="button" onClick={toggleBulletList} title="Bullet List" className="p-2 hover:bg-gray-200 rounded">
          <List />
        </button>
        <button type="button" onClick={toggleOrderedList} title="Numbered List" className="p-2 hover:bg-gray-200 rounded">
          <ListOrdered />
        </button>

      </div>
      <EditorContent editor={editor} className="editor-content border p-4 rounded-lg shadow-inner min-h-72 dark:bg-black" />

    </div>
  );
};

export default LokkhoEditor;
