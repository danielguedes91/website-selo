import { useMediaQuery } from '@mantine/hooks';

// Ref: https://mantine.dev/core/media-query/#configure-breakpoints
export default function useMediaQueryMd(): boolean {
     return useMediaQuery('(max-width: 62em)');
}