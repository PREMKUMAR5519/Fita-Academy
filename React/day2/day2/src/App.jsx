
import Child from './Child'

function App(){


  let a = 55;
  return(
    <div>
      hello
      <div>
        hi
      </div>
      <div>
        <Child  fruit="apple" color="red" numeric={a}/>
      </div>
    </div>
  )
}

export default App