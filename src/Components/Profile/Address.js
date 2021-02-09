let IconStyle = {paddingRight: "10px"}
const Address = () => {
  return (
    
    <div>
      <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
          />
      <span>
        <i class="fas fa-at" style={IconStyle}></i>
        krimas.sirine@gmail.com
        <br/>
      </span>
      <span>
        <i class="fas fa-mobile-alt" style={IconStyle}></i>
        (+216) 20 122 830
        <br/>
      </span>
      <span>
        <i class="fas fa-map-marker-alt" style={IconStyle}></i>
        Nouvelle Medina 3, Ben Arous, Tunisia
        <br/>
      </span>
    </div>
  );
}

export default Address;