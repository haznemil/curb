import logo from './logo.svg';
import './App.css';
import Nav from './pages/Nav';
import Card from './pages/Card';
import a from "./images/1.JPG"
import b from "./images/2.JPG"
import c from "./images/3.JPG"
import d from "./images/4.JPG"
import e from "./images/5.JPG"
import f from "./images/6.JPG"
import g from "./images/7.JPG"
import h from "./images/8.JPG"
import i from "./images/9.JPG"
import j from "./images/10.JPG"
import k from "./images/11.JPG"


function App() {

  let images=[
    {
      img: a,
    },
    {
      img: b,
    },
    {
      img: c,
    },
    {
      img: d,
    },
    {
      img: e,
    },
    {
      img: f,
    },
    {
      img: g,
    },
    {
      img: h,
    },
    {
      img: i,
    },{
      img: j,
    },{
      img: k,
    },
]


  return (
    <>
    <div className='bg'>
      <Nav/>
    </div>
    <h1>THE CULTUREHOOD</h1>        
    <div className='bg-grey d-flex over'>
      {images.map((value)=>(
        <Card img={value.img}/>
      ))}
    </div>
   </>
  );
}

export default App;
