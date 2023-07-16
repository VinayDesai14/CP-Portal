import React from 'react'
import CodeForces from './Contests/CodeForces'
import CodeChef from './Contests/CodeChef'
import AtCoder from './Contests/AtCoder.js'
import Leetcode from './Contests/Leetcode'
import GeeksforGeeks from './Contests/GeeeksforGeeks'

function Contests() {
  return (
    <>
    <div style={{color:"white"}}>
    <CodeForces/>
     <CodeChef/>
     <AtCoder/>
     <Leetcode/>
     <GeeksforGeeks/>
     <footer style={{display:"block" , textAlign:"center",margin:"30px"}}>
        <div>
          <a href='/'>CP Portal</a>
        </div>
        <div>
          This is Competitive Programming portal
        </div>
    </footer>
    </div>
    </>
  )
}

export default Contests
