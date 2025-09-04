import React from 'react'
import { Navigate } from 'react-router-dom'

const Settings = () => {
  // Redirect to account settings by default
  return <Navigate to="/settings/account" replace />
}

export default Settings
