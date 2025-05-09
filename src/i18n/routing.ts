import { locales } from '@/constants/locales';
import { defineRouting } from 'next-intl/routing';
export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'es'
});