type SectionHeadingProps = {
  title: string
  subtitle?: string
  light?: boolean
}

export function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-unit-lg">
      <h2
        className={`font-headline-md text-headline-md mb-4 ${
          light ? 'text-white' : 'text-on-background'
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`font-body-md text-body-md ${
            light ? 'text-white/80' : 'text-on-surface-variant'
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
