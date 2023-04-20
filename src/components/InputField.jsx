import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ value, onChange }) => {
  const [editorHtml, setEditorHtml] = useState(value);

  const handleChange = (html) => {
    setEditorHtml(html);
    onChange && onChange(html);
  };

  return (
    <ReactQuill
      theme="snow"
      value={editorHtml}
      onChange={handleChange}
      modules={Editor.modules}
      formats={Editor.formats}
      placeholder="Enter description here..."
    />
  );
};

Editor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block',
];

export default Editor;
