export function Card({ color, number, description}){

  const colorDefault = color == undefined ? "success" : color

  return (
    <div className="card">
    <img src="https://saboresdacidade.com/wp-content/uploads/2021/07/Diavola-01-Sabores.jpg" className="card-img-top" alt="..." />
    <div className={`card-body text-${colorDefault}`}>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        {`${description} ${number}`}
      </p>
      <p className="card-text">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
    )
  
}


