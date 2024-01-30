import { config } from "./_variable";

export function Body({children}) {
  return (
    <div className={config.spacer}>{children}</div>
  )
}
