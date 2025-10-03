import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Upload, Radio, Plus } from 'lucide-react'

const CreateButtonPopup = ({ onUploadClick, buttonText = "+ Create", buttonStyle = "default" }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const menuItems = [
    {
      icon: <Upload className="w-4 h-4" />,
      label: "Upload videos",
      onClick: () => {
        onUploadClick()
        setIsOpen(false)
      }
    },
    {
      icon: <Radio className="w-4 h-4" />,
      label: "Go live",
      onClick: () => {
        console.log("Go live clicked")
        setIsOpen(false)
      }
    },
    {
      icon: <Plus className="w-4 h-4" />,
      label: "Create a Short",
      onClick: () => {
        console.log("Create a Short clicked")
        setIsOpen(false)
      }
    }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const getButtonClasses = () => {
    if (buttonStyle === "dashboard") {
      return "bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center gap-2"
    }
    return "bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
  }

  return (
    <div className="relative flex justify-center" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={getButtonClasses()}
      >
        {buttonText}
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 left-1/2 transform -translate-x-1/2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-3 first:rounded-t-lg last:rounded-b-lg"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CreateButtonPopup
