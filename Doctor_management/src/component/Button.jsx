import React from 'react'

const Button = (props) => {
  return (
    <div>
         <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8a6 6 0 1110.9 3.648c.03-.059.062-.118.094-.177A6.002 6.002 0 014 8zm16 2a8 8 0 10-14.249 4.966A5.99 5.99 0 018 14c0 .196-.01.393-.029.588A8.002 8.002 0 0020 10z"
                  />
                </svg>
              </span>
              {props.children}
            </button>
    </div>
  )
}

export default Button