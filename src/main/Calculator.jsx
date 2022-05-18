// Terça-feira,10 de maio de 2022 das 21:36:00 as 22:33:00 h+|-
import React, {Component} from 'React'
import './Calculator.css'
import button from '../components/button'
import display from   '../components/display'
 //   Segunda-feira,16/05/2022 das 22:00:00 as 22:30:00  h +|_
const initialState =  {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
export default class Calculator extends Component {
     /* sexta-feira, 13/05/2022 as 22:29:00 h+|- */
      state = {...initialState}
     constructor(props){
         super(props)
         this.clearMemory = this.clearMemory.bind(this)
         this.setOperation = this.setOperation.bind(this)
         this.addDigit = this.addDigit.bind(this)

     }
     clearMemory(){
        //  console.log('limpar')
        this.setState(...initialState)
     }
     setOperation(operation){
        //  console.log(operation)  Terça-feira,17/05/2022 as 21:30:00 h+|-
        if (this.state.current === 0) {
            this.setOperation({operation, current: 1, clearDisplay: true})
       } else{
          const equals = operation === '='
          const currentOperation = this.state.operation

          const values = [...this.state.values] 
          try{ values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}` )} catch(e){
              values[0] = this.state.values[0]
          }
        values[1] = 0
          this.setState({
               displayValue: values[0], 
               operation: equals ? null : operation,
               current: equals ? 0 : 1,
               clearDisplay: !equals, 
               values


          })
       }
     }
     addDigit(n) {
        //  console.log(n)
        if(n === '.' && this.state.displayValue('.')){
            return 
        }
        const clearDisplay = this.state.displayValue === '0'
             || this.state.display 
        const currentvalue = clearDisplay ? '' : this.state.displayValue
        const displayValue =currentvalue + n  
        this.setState({displayValue, clearDisplay: false })

        if (n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
        }

    }

    render(){
      return(
            <div className="calculator">
                <display value= {this.state.displayValue}/>
                 <button label ="AC" click={this.clearMemory}triple/>
                 <button label ="/" click={this.setOperation} operation/>
                 <button label ="7" click={this.addDigit}/>
                 <button label ="8"click={this.addDigit}/>
                 <button label ="9"click={this.addDigit}/>
                 <button label ="*"click={this.setOperation} operation/>
                 <button label ="4"click={this.addDigit}/>
                 <button label ="5"click={this.addDigit}/>
                 <button label ="6"click={this.addDigit}operation/>
                 <button label ="-"click={this.setOperation}/>
                 <button label ="1"click={this.addDigit}/>
                 <button label ="2"click={this.addDigit}/>
                 <button label ="3"click={this.addDigit} operation/>
                 <button label ="+"click={this.setOperation}/>
                 <button label ="0"click={this.addDigit} double/>
                 <button label ="."click={this.addDigit}/>
                 <button label ="="click={this.setOperation} operation/>
              </div>
        )
    }
}