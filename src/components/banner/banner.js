import './banner.css'
function Banner({message}) {
  return (
    message?  
    <div className="banner" >      
     {message}
    </div>:""
  );
}

export default Banner;
