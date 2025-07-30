import { useEffect } from 'react';
import { Box } from '@mui/material';

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'banner';
  style?: React.CSSProperties;
  className?: string;
}

export default function AdSense({ adSlot, adFormat = 'auto', style, className }: AdSenseProps) {
  useEffect(() => {
    try {
      // Push the ad to Google AdSense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <Box 
      sx={{ 
        textAlign: 'center', 
        my: 2,
        minHeight: adFormat === 'banner' ? '90px' : '250px',
        ...style 
      }}
      className={className}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7330358024378491"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </Box>
  );
} 