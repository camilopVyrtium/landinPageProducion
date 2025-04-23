import React from 'react';

export type TranslateFunction = (key: string) => string;

export type RichTranslateFunction = TranslateFunction & {
  rich: (key: string, options: Record<string, (text: string) => React.ReactNode>) => React.ReactNode;
};