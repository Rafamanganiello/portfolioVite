import './Card.css'

function Card({title,descr,subject,date}){

 
    return(
        <div className="card">
            <section>
                <h3>{title}</h3>
                <div className="date">
                    <p>{date}</p>
                    <p>{subject}</p>
                </div>
                <p>{descr}</p>
            </section>
            
        </div>
    )
}
export default Card