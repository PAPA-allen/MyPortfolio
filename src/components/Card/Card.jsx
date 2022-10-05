import './Card.css';

export const Card = ({heading, detail}) => {
  return (
    <div className = "Card">
        <span>{heading}</span>
        <span>{detail}</span>
      
    </div>
  )
}