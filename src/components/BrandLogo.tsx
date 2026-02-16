type BrandLogoProps = {
  className?: string;
  compact?: boolean;
};

const BrandLogo = ({ className, compact = false }: BrandLogoProps) => {
  if (compact) {
    return (
      <img
        src="/code-joy-logo.svg"
        alt="Code Joy Academy"
        className={className ?? "h-10 w-auto"}
      />
    );
  }

  return (
    <img
      src="/code-joy-logo.svg"
      alt="Code Joy Academy"
      className={className ?? "h-12 w-auto"}
    />
  );
};

export default BrandLogo;
