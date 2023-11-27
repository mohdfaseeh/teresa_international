import { cn } from '@/lib/utils';

import { Nunito } from 'next/font/google';

const nunitio = Nunito({
  subsets: ['latin'],
});

const ReactQuillEditor = (props) => {
  if (typeof document !== 'undefined') {
    const ReactQuill = require('react-quill');
    require('react-quill/dist/quill.bubble.css');

    return (
      <div className={cn('h-48 ', props.readOnly ? '' : 'border rounded-md')}>
        <ReactQuill
          {...props}
          theme="bubble"
          className={cn('h-full ', nunitio.className)}
          placeholder="Write something awesome..."
          modules={{
            toolbar: {
              container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ color: [] }, { background: [] }],
                [{ align: [] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['blockquote', 'code-block'],
                ['link'],
              ],
            },
          }}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default ReactQuillEditor;
