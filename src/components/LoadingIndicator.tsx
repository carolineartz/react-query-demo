import React from 'react'

import { Spinner } from 'grommet'

type LoadingIndicatorProps = PropsOf<typeof Spinner> & {
  delay?: number
}

export function LoadingIndicator({ delay = 200, ...spinnerProps }: LoadingIndicatorProps) {
  const [showSpinner, setShowSpinner] = React.useState(delay === 0)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(true)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [delay])

  return <>{showSpinner && <Spinner {...spinnerProps} />}</>
}
