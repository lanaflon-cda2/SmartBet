import React,  {Component} from 'react';

class cache extends Component {
  render() {
     return (
       <body class="cachebody">
<form class="cachebody">

<input type="radio" id="rock-rock" name="rock-paper-scissors"></input>
<input type="radio" id="rock-paper" name="rock-paper-scissors"></input>
<input type="radio" id="rock-scissors" name="rock-paper-scissors"></input>
<input type="radio" id="paper-rock" name="rock-paper-scissors"></input>
<input type="radio" id="paper-paper" name="rock-paper-scissors"></input>
<input type="radio" id="paper-scissors" name="rock-paper-scissors"></input>
<input type="radio" id="scissors-rock" name="rock-paper-scissors"></input>
<input type="radio" id="scissors-paper" name="rock-paper-scissors"></input>
<input type="radio" id="scissors-scissors" name="rock-paper-scissors"></input>
<div>
  <h1>CSS Rock-Paper-Scissors</h1>
  <div id="hands">
    <div class="hand" id="computer-hand">
      <div class="fist"></div>
      <div class="finger finger-1"></div>
      <div class="finger finger-2"></div>
      <div class="finger finger-3"></div>
      <div class="finger finger-4"></div>
      <div class="thumb"></div>
      <div class="arm"></div>
    </div>

    <div class="hand" id="user-hand">
      <div class="fist"></div>
      <div class="finger finger-1"></div>
      <div class="finger finger-2"></div>
      <div class="finger finger-3"></div>
      <div class="finger finger-4"></div>
      <div class="thumb"></div>
      <div class="arm"></div>
    </div>
    
    <div id="icons">
      <div>
        <label for="rock-rock">✊</label>
        <label for="paper-rock">✊</label>
        <label for="scissors-rock">✊</label>
      </div>
      <div>
        <label for="rock-paper">🖐️</label>
        <label for="paper-paper">🖐️</label>
        <label for="scissors-paper">🖐️</label>
      </div>
      <div>
        <label for="rock-scissors">✌</label>
        <label for="paper-scissors">✌</label>
        <label for="scissors-scissors">✌</label>
      </div>
    </div>
  </div>
</div>

<div id="message">
  <h2></h2>
  <input type="reset" value="Refresh Round" />
</div>

</form>
</body>
     );
  }
}

export default cache;