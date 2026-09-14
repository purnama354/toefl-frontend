// University logo marquee strip
const LOGOS: { name: string; url: string }[] = [
  { name: 'Universitas Indonesia', url: 'https://www.monsoonsim.com/uploads/190972_f18baac4e23711d2723e0f822030a77919694fe0.png' },
  { name: 'Institut Teknologi Bandung', url: 'https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png' },
  { name: 'Universitas Gadjah Mada', url: 'https://iconlogovector.com/uploads/images/2024/11/lg-673f9e2f068ed-Universitas-Gadjah-Mada.webp' },
  { name: 'IPB University', url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixYKuV2c5YoKDj9dHdJt5S1Lt-RSNZ0_3GgZbEbylP9emf5D9KGekhNq9RImhInYYgfcyOsyFFbDOdugmWwN2nWqxA2tDtJux26STvOi6BVFBM43oClQX5rK3aeIzbhUm_thZRVsKYxFgFJXa4AoumNIp5eBy3nYfzqgBpHIX_afCiFGRzAz-E_g/w320-h223/IPB%20University%20%28Institut%20Pertanian%20Bogor%29%20Logo.png' },
  { name: 'Universitas Airlangga', url: '/assets/unair.png' },
  { name: 'Universitas Padjadjaran', url: 'https://www.unpad.ac.id/wp-content/uploads/2025/12/logo-unpad-duo.svg' },
  { name: 'Institut Teknologi Sepuluh Nopember', url: 'https://katamata.wordpress.com/wp-content/uploads/2009/01/logo-its-biru-transparan.png' },
  { name: 'Universitas Diponegoro', url: 'https://bauk.undip.ac.id/wp-content/uploads/2023/11/web-undip-logo-1.png' },
  { name: 'University of Nottingham', url: 'https://www.nottingham.ac.uk/Brand/LegacyAssets/images-multimedia/2022/Logos/BrandEvolution-NottinghamBlue.png' },
  { name: 'Universität Stuttgart', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Universit%C3%A4t_Stuttgart_Logo.png' },
];

function LogoItem({ name, url }: { name: string; url: string }) {
  return (
    <div
      role="img"
      aria-label={name}
      className="[width:110px] [height:64px] [margin:0_20px] [flex-shrink:0] [background-size:contain] [background-repeat:no-repeat] [background-position:center]"
      style={{ backgroundImage: `url(${url})` }}
    />
  );
}

export default function SocialProofStrip() {
  return (
    <div className="[background:#F3F3F3] [padding:32px_0] [overflow:hidden]">
      <p className="[margin:0_0_18px] [text-align:center] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [text-transform:uppercase] [color:#9ca3af]">
        Alumni Kami Sekarang Kuliah Di
      </p>
      <div className="[overflow:hidden] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        {/* Duplicate logos for seamless infinite scroll */}
        <div className="[display:flex] [width:max-content] [animation:infiniteScroll_30s_linear_infinite]">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} name={logo.name} url={logo.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
