import React from 'react';
import { useTranslations } from 'next-intl';
export type TranslateFunction = ReturnType<typeof useTranslations>;

export type RichTranslateFunction = (key: string) => string & {
  rich: (key: string, options: Record<string, (text: string) => React.ReactNode>) => React.ReactNode;
};