export function isDesktop(userAgent: string): boolean {
    const mobileKeywords =
      /Android(?!.*Mobile)|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return !mobileKeywords.test(userAgent);
  }
  