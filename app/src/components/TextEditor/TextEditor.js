import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography
} from '@material-ui/core';

import RichTextEditor from 'react-rte';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  richTextEditor: {
    fontFamily: "inherit"
  }
}));

const TextEditor = props => {
  const { className, style, placeholder,  ...rest } = props;

  const classes = useStyles();
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  const onChange = (newValue) => {
    setValue(newValue);
  };

  const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['HISTORY_BUTTONS', 'INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'BLOCK_TYPE_DROPDOWN'],
    INLINE_STYLE_BUTTONS: [
      { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
      { label: 'Italic', style: 'ITALIC' },
      { label: 'Underline', style: 'UNDERLINE' }
    ],
    BLOCK_TYPE_DROPDOWN: [
      { label: 'Normal', style: 'unstyled' },
      { label: 'Heading 1 (Large)', style: 'header-one' },
      { label: 'Heading 2 (Medium)', style: 'header-two' },
      { label: 'Heading 3 (Small)', style: 'header-three' }
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: 'UL', style: 'unordered-list-item' },
      { label: 'OL', style: 'ordered-list-item' }
    ]
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography >
        <RichTextEditor
          toolbarConfig={toolbarConfig}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classes.richTextEditor}
        /></Typography>
    </div>
  );
};

TextEditor.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextEditor;
