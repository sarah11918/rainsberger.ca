function ButtonReact({handleClick, color}){
    const styles = {
      backgroundColor: color,
      color: '#ffffff'
    }
  
      return (
        <button style={styles} onClick={handleClick}>Click</button>
      )
    }
    export default ButtonReact