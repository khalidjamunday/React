import React from 'react'

// wrapping inside memo to avoid re rendering
const Childcomp = React.memo(
    (props) => {
        console.log("Child comp. re-rendered again")
      return (
        <div>
            <button onClick={props.handleClick}>
                {props.buttonName}
            </button>
        </div>
      )
    }
)

export default Childcomp
// React.memo->wrap->comp.-> comp re-render tabhi hoga jb props change honge nhi toh re-render nhi hoga
// when u r sending fx in prop react.memo won't be able to save childcomp. from re-rendering
// --> this is bcoz when comp. re-renders ->phir poora code wapis chalta-> new fx gets created with same logic but with diff. refernce
// --> aur diff. ref. ki wjh se react.memo ko lagta new fx pass hua h aur wo usse re-render se nhi bachha paata