import * as React from 'react';

const AddIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    {...props}
  >
    <path
      fill="red"
      width="20"
      height="20"
      style={{ paddingTop: 2 }}
      d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm8 18H8v-4h16v4z"
    />
  </svg>
);

export default AddIcon;
