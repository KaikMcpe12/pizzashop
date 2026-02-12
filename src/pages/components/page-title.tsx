interface PageTitleProps {
  title: string
}

export function PageTitle({ title }: PageTitleProps) {
  return <title>{`${title} | pizza.shop`}</title>
}
