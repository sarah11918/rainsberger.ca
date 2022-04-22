<script>
    import Button from './Button.svelte';
    import Heading from './Heading.svelte';
  
    let count = 0;
    let color = '#000000';
  
    const colors = ['#00ff00', '#ff0000', '#0000ff'];
  
     let handleClick = () => {
      count++;
      color = colors[Math.floor(Math.random() * 3)];
  }
  </script>
  
    <div style="border: 2px solid black; padding: 1em; margin-top:0.75em; margin-bottom:0.75em;">
    <Heading count={count} />
    <Button color={color} handleClick={handleClick} />
  </div>
  