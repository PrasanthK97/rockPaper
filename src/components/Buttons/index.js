import './index.css'

const Buttons = props => {
  const {buttonDetails, activeButton} = props
  const {id, imageUrl} = buttonDetails

  const onClickButon = () => {
    activeButton(imageUrl, id)
    console.log(id, imageUrl)
  }
  const testId = id.toLowerCase()
  console.log(`${testId}Button`)

  return (
    <button
      onClick={onClickButon}
      type="button"
      data-testid={`${testId}Button`}
    >
      <img id="button-image" alt={id} src={imageUrl} />
    </button>
  )
}

export default Buttons
