import { ImageResponse } from 'next/og';
import { siteConfig } from '@/content/site';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: '#ffffff',
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: '-1px',
        }}
      >
        {siteConfig.name}
      </div>
    ),
    {
      ...size,
    }
  );
}
