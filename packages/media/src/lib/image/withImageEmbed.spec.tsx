/** @jsx jsx */

import { getEditorPlugin } from '@udecode/plate-common';
import { createSlateEditor } from '@udecode/plate-common';
import { jsx } from '@udecode/plate-test-utils';

import { BaseImagePlugin } from './BaseImagePlugin';
import { withImageEmbed } from './withImageEmbed';

jsx;

describe('withImageEmbed', () => {
  const input = (
    <editor>
      <hp>test</hp>
    </editor>
  ) as any;

  const output = (
    <editor>
      <hp>test</hp>
      <himg url="https://i.imgur.com/removed.png">
        <htext />
      </himg>
    </editor>
  ) as any;

  it('should insert image from the text', () => {
    const editor = withImageEmbed(
      getEditorPlugin(createSlateEditor({ editor: input }), BaseImagePlugin)
    );

    const data = {
      getData: () => 'https://i.imgur.com/removed.png',
    };
    editor.insertData(data as any);

    expect(input.children).toEqual(output.children);
  });
});