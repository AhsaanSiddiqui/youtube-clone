import React, { useState } from 'react'
import { X, Info, Upload } from 'lucide-react'

const UploadVideoModal = ({ isOpen, onClose }) => {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    // Handle file drop logic here
    console.log('Files dropped:', e.dataTransfer.files)
  }

  const handleFileSelect = () => {
    // Handle file selection logic here
    console.log('Select files clicked')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Upload videos</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Info className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div 
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              isDragOver 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {/* Upload Icon */}
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <div className="relative">
                <Upload className="w-12 h-12 text-gray-400" />
                <div className="absolute -bottom-1 -right-1 w-6 h-1 bg-gray-400 rounded"></div>
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Drag and drop video files to upload
            </h3>
            <p className="text-gray-600 mb-6">
              Your videos will be private until you publish them.
            </p>

            {/* Select Files Button */}
            <button
              onClick={handleFileSelect}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Select files
            </button>
          </div>

          {/* File Types Info */}
          <div className="mt-6 text-sm text-gray-500 text-center">
            <p>You can upload videos up to 15 minutes long.</p>
            <p>For longer videos, verify your account to upload videos up to 12 hours long.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UploadVideoModal
