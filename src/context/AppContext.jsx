import React, { createContext, useContext, useState } from 'react'

// Create context for app-wide state
const AppContext = createContext()

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

// Provider component
export const AppProvider = ({ children }) => {
  // App-wide state
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [theme, setTheme] = useState('dark')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentVideo, setCurrentVideo] = useState(null)

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  // Update search query
  const updateSearchQuery = (query) => {
    setSearchQuery(query)
  }

  // Set current video
  const setVideo = (video) => {
    setCurrentVideo(video)
  }

  // Context value
  const value = {
    // State
    sidebarExpanded,
    currentUser,
    theme,
    searchQuery,
    currentVideo,
    
    // Actions
    toggleSidebar,
    setSidebarExpanded,
    setCurrentUser,
    setTheme,
    updateSearchQuery,
    setVideo
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
