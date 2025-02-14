import type { Registry } from 'shadcx/registry';

export const blocks: Registry['items'] = [
  {
    categories: ['Editors'],
    dependencies: [
      '@udecode/cn',
      '@udecode/plate-ai',
      '@udecode/plate-basic-marks',
      '@udecode/plate-block-quote',
      '@udecode/plate-code-block',
      '@udecode/plate-comments',
      '@udecode/plate',
      '@udecode/plate-date',
      '@udecode/plate-emoji',
      '@emoji-mart/data@1.2.1',
      '@udecode/plate-excalidraw',
      '@udecode/plate-heading',
      '@udecode/plate-highlight',
      '@udecode/plate-horizontal-rule',
      '@udecode/plate-kbd',
      '@udecode/plate-layout',
      '@udecode/plate-link',
      '@udecode/plate-media',
      '@udecode/plate-mention',
      '@udecode/plate-slash-command',
      '@udecode/plate-table',
      '@udecode/plate-toggle',
      'sonner',
    ],
    files: [
      {
        path: 'blocks/editor-ai/page.tsx',
        target: 'app/editor/page.tsx',
        type: 'registry:page',
      },
      {
        path: 'blocks/editor-ai/components/editor/plate-editor.tsx',
        target: 'components/editor/plate-editor.tsx',
        type: 'registry:component',
      },
      {
        path: 'blocks/editor-ai/components/editor/use-create-editor.ts',
        target: 'components/editor/use-create-editor.ts',
        type: 'registry:component',
      },
      {
        path: 'components/editor/settings.tsx',
        target: 'components/editor/settings.tsx',
        type: 'registry:component',
      },
    ],
    name: 'editor-ai',
    registryDependencies: [
      'api-ai',
      'api-uploadthing',
      'plate-types',

      'editor-plugins',
      'copilot-plugins',
      'floating-toolbar-plugin',
      'fixed-toolbar-plugin',

      'ai-menu',
      'ghost-text',
      'comments-popover',
      'cursor-overlay',
      'editor',
      'block-context-menu',

      'ai-leaf',
      'blockquote-element',
      'code-block-element',
      'code-leaf',
      'code-line-element',
      'code-syntax-leaf',
      'column-element',
      'column-group-element',
      'comment-leaf',
      'date-element',
      'draggable',
      'equation-element',
      'inline-equation-element',
      'emoji-input-element',
      'excalidraw-element',
      'heading-element',
      'highlight-leaf',
      'hr-element',
      'image-element',
      'kbd-leaf',
      'link-element',
      'media-audio-element',
      'media-embed-element',
      'media-file-element',
      'media-placeholder-element',
      'media-video-element',
      'mention-element',
      'mention-input-element',
      'paragraph-element',
      'placeholder',
      'slash-input-element',
      'table-cell-element',
      'table-element',
      'table-row-element',
      'toc-element',
      'toggle-element',
    ],
    type: 'registry:block',
  },
  {
    categories: ['Editors'],
    files: [
      {
        path: 'blocks/editor-select/page.tsx',
        target: 'app/editor/page.tsx',
        type: 'registry:page',
      },
    ],
    name: 'editor-select',
    registryDependencies: ['select-editor-demo'],
    type: 'registry:block',
  },
  {
    categories: ['Editors'],
    dependencies: [
      '@udecode/plate-basic-elements',
      '@udecode/plate-basic-marks',
    ],
    files: [
      {
        path: 'blocks/editor-basic/page.tsx',
        target: 'app/editor/page.tsx',
        type: 'registry:page',
      },
      {
        path: 'blocks/editor-basic/components/editor/plate-editor.tsx',
        target: 'components/editor/plate-editor.tsx',
        type: 'registry:component',
      },
      {
        path: 'blocks/editor-basic/components/editor/use-create-editor.ts',
        target: 'components/editor/use-create-editor.ts',
        type: 'registry:component',
      },
    ],
    name: 'editor-basic',
    registryDependencies: ['editor'],
    type: 'registry:block',
  },
  {
    category: 'Serializers',
    files: [
      {
        path: 'blocks/slate-to-html/page.tsx',
        target: 'app/html/page.tsx',
        type: 'registry:page',
      },
      {
        path: 'components/editor/slate-to-html.tsx',
        target: 'components/editor/slate-to-html.tsx',
        type: 'registry:component',
      },
    ],
    name: 'slate-to-html',
    registryDependencies: [],
    rsc: true,
    type: 'registry:block',
  },
];
