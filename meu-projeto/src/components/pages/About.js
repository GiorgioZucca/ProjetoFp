import Banner from '../layout/Banner';
import Rect from '../layout/Rect';
import Card from '../layout/Card';
import Circ from '../layout/Circ';

function About() {
  return (
    <div>
      <Rect title="Sobre nós" 
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vehicula elit. Quisque non congue dui. Nullam sit amet turpis id libero feugiat cursus vitae nec ante. Sed ullamcorper id quam a tincidunt. Vivamus laoreet, ex nec varius aliquam, purus ipsum sodales orci, eu egestas orci odio non urna."
      image="https://images.unsplash.com/photo-1564277287253-934c868e54ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"/>
      <Circ title="Espaço" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vehicula elit. Quisque non congue dui. Nullam sit amet turpis id libero feugiat cursus vitae nec ante. Sed ullamcorper id quam a tincidunt. Vivamus laoreet, ex nec varius aliquam, purus ipsum sodales orci, eu egestas orci odio non urna."
      image="https://images.unsplash.com/photo-1631248207065-771ae9ac32f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"/>
    </div>
  )
}

export default About;