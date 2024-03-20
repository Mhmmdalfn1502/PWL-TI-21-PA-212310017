const myStyle = {
    color: 'red',
    fontSize:"25px"
  }
  const MyBio = (props) => {
    return (
  <div>
  <h1 style={myStyle}>NPM saya {props.npm}</h1>
  <h1>Umur {props.age}</h1>
  </div>
    )
  }

export default MyBio