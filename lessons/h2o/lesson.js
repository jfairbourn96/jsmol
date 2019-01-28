class Lesson 
{
  constructor()
  {
    this.instructionList = new Array();
    this.instruction = 0;
    this.maxInstruction = -1;
    this.descriptionBox = document.getElementById('description');
    this.refreshButton = document.getElementById('refreshButton');
    this.restartButton = document.getElementById('restartButton');
    this.backButton = document.getElementById('backButton');
    this.nextButton = document.getElementById('nextButton');
    
    this.addInstruction = (description, script) => 
    {
      this.instructionList.push(new Instruction(description, script));
      this.maxInstruction++;
    }

    this.execute = (step) =>
    {
      this.instruction += step;
      this.backButton.disabled = false;
      this.nextButton.disabled = false;
      if(this.instruction === 0) this.backButton.disabled = true;
      else if(this.instruction === this.maxInstruction) this.nextButton.disabled = true;
      this.descriptionBox.innerHTML = this.instructionList[this.instruction].description;
      Jmol.script(main, this.instructionList[this.instruction].script);
    }

    this.restart = () =>
    {
      this.instruction = 0;
      this.execute(0);
    }


  }
}