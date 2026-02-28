interface SocialButtonProps {
  href: string;
  src: string;
  alt: string;
}

export default function SocialButton({ href, src, alt }: SocialButtonProps) {
  const isEmail = href.startsWith('mailto:');
  return (
    <a
      href={href}
      {...(!isEmail && { target: '_blank', rel: 'noopener noreferrer' })}
      className="opacity-80 hover:opacity-100 transition-opacity duration-200"
      aria-label={alt}
    >
      <img src={src} alt={alt} className="w-7 h-7 object-contain" />
    </a>
  );
}
