'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Copy, Check, Loader, RefreshCw, Search } from 'lucide-react'

export default function Bash() {
  const [commands, setCommands] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [copiedCommand, setCopiedCommand] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch commands from API
  const fetchCommands = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('http://localhost:5000/api/bash-learning')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setCommands(data)
    } catch (err) {
      setError(`Failed to fetch commands: ${err.message}`)
      console.error('Error fetching commands:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCommands()
  }, [])

  // Copy command to clipboard
  const copyCommand = async (command) => {
    try {
      await navigator.clipboard.writeText(command)
      setCopiedCommand(command)
      setTimeout(() => setCopiedCommand(null), 2000)
    } catch (err) {
      console.error('Failed to copy command:', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = command
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopiedCommand(command)
      setTimeout(() => setCopiedCommand(null), 2000)
    }
  }

  // Filter commands based on search term
  const filteredCommands = commands.filter(cmd => 
    cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 bg-white border border-green-100"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Terminal className="w-8 h-8 text-green-600" />
          <div>
            <h2 className="text-3xl font-bold text-green-800">Linux Commands</h2>
            <p className="text-gray-600">Learn essential bash commands with examples</p>
          </div>
        </div>
        
        <motion.button
          onClick={fetchCommands}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </motion.button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search commands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      {/* Loading State */}
      {loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center py-12"
        >
          <Loader className="w-8 h-8 animate-spin text-green-500" />
          <span className="ml-3 text-gray-600">Loading commands...</span>
        </motion.div>
      )}

      {/* Error State */}
      {error && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-500 font-bold">!</span>
            </div>
            <div>
              <h3 className="font-semibold text-red-800">Error Loading Commands</h3>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
          <motion.button
            onClick={fetchCommands}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.button>
        </motion.div>
      )}

      {/* Commands Grid */}
      {!loading && !error && (
        <div className="space-y-4">
          {filteredCommands.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-500"
            >
              <Terminal className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">
                {searchTerm ? `No commands found matching "${searchTerm}"` : 'No commands available'}
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredCommands.map((cmd, index) => (
                <motion.div
                  key={`${cmd.command}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-green-500 text-white px-3 py-1 rounded-md font-mono text-sm">
                          {cmd.command}
                        </div>
                        <motion.button
                          onClick={() => copyCommand(cmd.command)}
                          className="flex items-center gap-2 px-3 py-1 bg-white border border-green-300 rounded-md hover:bg-green-50 transition-colors opacity-0 group-hover:opacity-100"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {copiedCommand === cmd.command ? (
                            <>
                              <Check className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-green-600">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-gray-600" />
                              <span className="text-sm text-gray-600">Copy</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">{cmd.description}</p>
                      
                      {/* Command Preview */}
                      <div className="mt-4 bg-gray-900 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-400 text-sm ml-2">Terminal</span>
                        </div>
                        <div className="font-mono text-sm">
                          <span className="text-green-400">user@linux:~$ </span>
                          <span className="text-white">{cmd.command}</span>
                          <span className="text-gray-500 animate-pulse">_</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Summary Stats */}
          {filteredCommands.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">Command Summary</h3>
                  <p className="text-gray-600">
                    Showing {filteredCommands.length} of {commands.length} commands
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{filteredCommands.length}</div>
                  <div className="text-sm text-gray-500">Available Commands</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  )
}