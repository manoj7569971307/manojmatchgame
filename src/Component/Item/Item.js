import './Item.css'

const Item = props => {
  const {each, imageId} = props
  const {id, imageUrl} = each
  const onImageId = () => {
    imageId(id)
  }
  return ( 
    
      <p onClick={onImageId}>
      <img className='all-single-image' src={imageUrl} />
    </p>
    
     
  )
}
export default Item