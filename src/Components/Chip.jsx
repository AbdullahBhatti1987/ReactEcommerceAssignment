function Chip({onclick, title, isChosen}) {
  
  return (
        <p onClick={onclick} className={`${isChosen ? "bg-blue-800 text-white" : "bg-white" } border-2 text-dark hover:bg-blue-300 text-center text-nowrap p-2 rounded-md cursor-pointer`}>{title}</p>
  )
}

export default Chip