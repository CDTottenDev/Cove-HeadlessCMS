import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface DisclaimerPopupProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export function DisclaimerPopup({ isOpen, onClose, onConfirm }: DisclaimerPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Small delay to allow for animation
      const timer = setTimeout(() => setIsVisible(true), 50)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  if (!isOpen || !mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
      <div 
        className={`bg-white rounded-lg p-6 max-w-md w-full mx-4 transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <h3 className="text-xl font-serif text-teal-900 mb-4">Important Notice</h3>
        <p className="text-teal-700 mb-6">
          If pregnant please see our pre-natal massage service, as services can only be performed on 2nd and 3rd trimester of pregnancy.
        </p>
        <p className="text-teal-700 mb-6">
          We can not perform head spa services on guests with extensions, locks and sew-ins. As they obstruct access to the scalp.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors duration-300"
          >
            OK
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
} 