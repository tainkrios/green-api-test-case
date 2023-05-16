import s from './BaseLayout.module.css'

// eslint-disable-next-line react/prop-types
export const BaseLayout = ({ children }) => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.greenTop}></div>
        <div className={s.whiteBot}></div>
      </div>
      <div className={s.overLayout}>{children}</div>
    </>
  )
}
