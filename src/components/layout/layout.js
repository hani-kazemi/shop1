import React from "react";

export default function Layout() {
  return (
    <div className="flex flex-row justify-evenly gap-5 w-full h-10 items-center bg-black text-white text-sm">
        <p className="flex ml-40 gap-2">sumsung sale for All swim suits and free exppress delivery-oFF 50%! <span className="font-bold">shop now</span></p>
        <form>
          <select name="language"className="bg-black">
              <option value="english">english</option>
              <option value="persian">persian</option>
          </select>
        </form>
    </div>
  )
}
