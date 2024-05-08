import './Blog.css'
import Card from './Card'

function Blog(){
    return(
        <div className='blog' id='bl'>
            <h1>Blog</h1>
            <section>
                <Card
                title="Making a design system from scratch"
                descr="Amet minim mollit non deserunt ullamco est 
                sit aliqua dolor do amet sint. Velit officia consequat 
                duis enim velit mollit. Exercitation veniam consequat 
                sunt nostrud amet."
                date="12 Feb 2030"
                subject="Design, Pattern"
                />
                <Card
                title="Creating pixel perfect icons in Figma"
                descr="Amet minim mollit non deserunt ullamco est 
                sit aliqua dolor do amet sint. Velit officia consequat 
                duis enim velit mollit. Exercitation veniam consequat 
                sunt nostrud amet."
                date="12 Feb 2030"
                subject="Figma, Icon Design"
                />
                
            </section>
        </div>
        
    )
}

export default Blog