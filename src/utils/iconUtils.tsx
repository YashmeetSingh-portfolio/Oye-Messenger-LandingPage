import React from 'react';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

// Helper function to render icons safely with TypeScript
export const renderIcon = (Icon: IconType, props: IconBaseProps = {}) => {
  // Cast the icon to any to bypass TypeScript's strict checking
  return React.createElement(Icon as any, props);
};