import cn from 'classnames'

const Container = ({ children, container }) => container 
  ? <div className="container">{ children }</div>
  : <>{ children }</>

const Base = ({children, className, ...section}) => {
  const { component, identifier, config } = section?.fields || {}
  const classNames = {
    [`${component?.toLowerCase()}`]: component,
  }
  return (
    <Container container={config?.outerContainer}>
      <div className={cn(identifier, className, config?.className, classNames)}>
        <Container container={config?.innerContainer}>
          { children }
        </Container>
      </div>
    </Container>
  )
}

export default Base